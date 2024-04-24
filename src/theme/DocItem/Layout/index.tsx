// https://stackoverflow.com/a/74668016/10325430
import { useDoc } from "@docusaurus/theme-common/internal";
import type { WrapperProps } from "@docusaurus/types";
import Layout from "@theme-original/DocItem/Layout";
import type LayoutType from "@theme/DocItem/Layout";
import React from "react";

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): JSX.Element {
  const doc = useDoc();
  return (
    <div className={doc.frontMatter.full_width ? "" : "container"}>
      <Layout {...props} />
    </div>
  );
}
