import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

/**
 * Hovering a Mermaid sankey node highlights every route running through it.
 *
 * Mermaid does not tag a link with its source or target, so a link is matched
 * to a node by testing whether either endpoint of its path touches the node's
 * box. Node labels live in a sibling group drawn in the same order as the
 * nodes, so a label resolves to its node by index.
 */

const TOLERANCE = 4;

const resolveNode = (target) => {
  const node = target.closest?.("g.nodes > g.node");
  if (node) return node;
  const label = target.closest?.("g.node-labels > text");
  if (!label) return null;
  const index = [...label.parentElement.children].indexOf(label);
  return label.ownerSVGElement.querySelectorAll("g.nodes > g.node")[index];
};

const endpoints = (path) => {
  const matrix = path.getScreenCTM();
  return [0, path.getTotalLength()].map((length) => {
    const { x, y } = path.getPointAtLength(length);
    return new DOMPoint(x, y).matrixTransform(matrix);
  });
};

const touches = (point, box) =>
  point.x >= box.left - TOLERANCE &&
  point.x <= box.right + TOLERANCE &&
  point.y >= box.top - TOLERANCE &&
  point.y <= box.bottom + TOLERANCE;

const highlight = (node) => {
  const svg = node.ownerSVGElement;
  const links = svg.querySelectorAll("g.links > g.link");
  if (links.length === 0) return;
  const box = node.getBoundingClientRect();
  for (const link of links) {
    link.classList.toggle(
      "sankey-active",
      endpoints(link.querySelector("path")).some((point) =>
        touches(point, box),
      ),
    );
  }
  const bounds = svg.getBoundingClientRect();
  const side =
    box.left + box.width / 2 < bounds.left + bounds.width / 2
      ? "left"
      : "right";
  svg.classList.add("sankey-node-hover", `sankey-hover-${side}`);
};

/**
 * Mermaid draws the links last, so they cover the labels and swallow their
 * pointer events. Lifting the labels above the links makes a program hoverable
 * by its name, and keeps the text legible where ribbons run behind it.
 */
const liftLabels = (svg) => {
  const labels = svg.querySelector("g.node-labels");
  if (labels?.nextElementSibling) svg.append(labels);
};

const clear = (svg) => {
  svg.classList.remove(
    "sankey-node-hover",
    "sankey-hover-left",
    "sankey-hover-right",
  );
  for (const link of svg.querySelectorAll("g.link.sankey-active")) {
    link.classList.remove("sankey-active");
  }
};

if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener("mouseover", (event) => {
    const svg = event.target.closest?.("svg");
    if (!svg?.querySelector("g.links > g.link")) return;
    liftLabels(svg);
    const node = resolveNode(event.target);
    if (node) highlight(node);
  });
  document.addEventListener("mouseout", (event) => {
    const node = resolveNode(event.target);
    if (node) clear(node.ownerSVGElement);
  });
}
