import Markdown from "react-markdown";

export default function linkify(text: string) {
  return (
    <Markdown disallowedElements={["p"]} unwrapDisallowed>
      {text}
    </Markdown>
  );
}
