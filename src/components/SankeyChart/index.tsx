import {
  sankey,
  SankeyLink,
  sankeyLinkHorizontal,
  SankeyNode,
} from "d3-sankey";
import React from "react";

/**
 * Sankey diagram with an author-controlled node order.
 *
 * Mermaid's sankey leaves d3's `nodeSort` unset, which makes every column
 * re-sort itself to minimise crossings. Rendering d3-sankey directly lets the
 * caller decide the vertical order: nodes stack in the order they are passed.
 *
 * The markup mirrors Mermaid's sankey structure (`g.links > g.link`,
 * `g.nodes > g.node`, `g.node-labels`) so the shared hover behaviour in
 * `src/clientModules/sankeyNodeHover.js` and `src/css/custom.css` applies here
 * too.
 */

interface NodeData {
  id: string;
  name: string;
}

interface LinkData {
  source: string;
  target: string;
  value: number;
  /** Shown in the gutters while the link is in play. */
  label?: string;
}

interface SankeyChartProps {
  nodes: NodeData[];
  links: LinkData[];
  height?: number;
  gutter?: number;
}

/** Tableau 10, the palette Mermaid's sankey uses. */
const PALETTE = [
  "#4e79a7",
  "#f28e2c",
  "#e15759",
  "#76b7b2",
  "#59a14f",
  "#edc949",
  "#af7aa1",
  "#ff9da7",
  "#9c755f",
  "#bab0ab",
];

const WIDTH = 1000;
const NODE_WIDTH = 10;
const NODE_PADDING = 10;
const LABEL_GAP = 6;
/** Default empty margin either side, reserved for the link labels. */
const GUTTER = 60;

const color = (node: SankeyNode<NodeData, LinkData>) =>
  PALETTE[node.index % PALETTE.length];

export default function SankeyChart({
  nodes,
  links,
  height = 1000,
  gutter = GUTTER,
}: SankeyChartProps): JSX.Element {
  const gradientId = React.useId().replaceAll(":", "");
  const graph = sankey<NodeData, LinkData>()
    .nodeId((node) => node.id)
    .nodeWidth(NODE_WIDTH)
    .nodePadding(NODE_PADDING)
    .nodeSort((a, b) => a.index - b.index)
    .extent([
      [gutter, 0],
      [WIDTH - gutter, height],
    ])({
    nodes: nodes.map((node) => ({ ...node })),
    links: links.map((link) => ({ ...link })),
  });

  const path = sankeyLinkHorizontal<NodeData, LinkData>();
  const isLeft = (node: SankeyNode<NodeData, LinkData>) => node.x0 < WIDTH / 2;
  const source = (link: SankeyLink<NodeData, LinkData>) =>
    link.source as SankeyNode<NodeData, LinkData>;
  const target = (link: SankeyLink<NodeData, LinkData>) =>
    link.target as SankeyNode<NodeData, LinkData>;

  return (
    <svg
      className="sankey"
      width="100%"
      viewBox={`0 0 ${WIDTH} ${height}`}
      style={{ maxWidth: WIDTH }}
    >
      <defs>
        {graph.links.map((link, index) => (
          <linearGradient
            key={index}
            id={`${gradientId}-${index}`}
            gradientUnits="userSpaceOnUse"
            x1={source(link).x1}
            x2={target(link).x0}
          >
            <stop offset="0%" stopColor={color(source(link))} />
            <stop offset="100%" stopColor={color(target(link))} />
          </linearGradient>
        ))}
      </defs>
      <g className="links">
        {graph.links.map((link, index) => (
          <g className="link" key={index}>
            <path
              d={path(link)}
              fill="none"
              stroke={`url(#${gradientId}-${index})`}
              strokeWidth={link.width}
            />
            {link.label !== undefined && (
              <>
                <text
                  className="link-label link-label--source"
                  x={gutter - LABEL_GAP}
                  y={link.y0}
                  dy="0.35em"
                  textAnchor="end"
                  fill="var(--ifm-font-color-base)"
                  fontSize={13}
                >
                  {link.label}
                </text>
                <text
                  className="link-label link-label--target"
                  x={WIDTH - gutter + LABEL_GAP}
                  y={link.y1}
                  dy="0.35em"
                  textAnchor="start"
                  fill="var(--ifm-font-color-base)"
                  fontSize={13}
                >
                  {link.label}
                </text>
              </>
            )}
          </g>
        ))}
      </g>
      <g className="nodes">
        {graph.nodes.map((node) => (
          <g
            className="node"
            key={node.id}
            transform={`translate(${node.x0},${node.y0})`}
          >
            <rect
              width={node.x1 - node.x0}
              height={node.y1 - node.y0}
              fill={color(node)}
            />
          </g>
        ))}
      </g>
      <g className="node-labels">
        {graph.nodes.map((node) => (
          <text
            key={node.id}
            x={isLeft(node) ? node.x1 + LABEL_GAP : node.x0 - LABEL_GAP}
            y={(node.y0 + node.y1) / 2}
            dy="0.35em"
            textAnchor={isLeft(node) ? "start" : "end"}
            fill="var(--ifm-font-color-base)"
            fontSize={14}
            /* Halo, so a label stays readable over the ribbons behind it. */
            stroke="var(--ifm-background-color)"
            strokeWidth={3}
            paintOrder="stroke"
          >
            {node.name}
          </text>
        ))}
      </g>
    </svg>
  );
}
