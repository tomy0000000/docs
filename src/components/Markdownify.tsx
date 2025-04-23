import Markdown from "react-markdown";

interface MarkdownifyProps {
  content: string;
}

export default function Markdownify({ content }: MarkdownifyProps) {
  return (
    <Markdown disallowedElements={["p"]} unwrapDisallowed>
      {content}
    </Markdown>
  );
}
