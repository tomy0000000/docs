import { useColorMode } from "@docusaurus/theme-common";
import type { WrapperProps } from "@docusaurus/types";
import { BaseStyles, ThemeProvider } from "@primer/react";
import MDXContent from "@theme-original/MDXContent";
import type MDXContentType from "@theme/MDXContent";
import React, { type ReactNode } from "react";

type Props = WrapperProps<typeof MDXContentType>;

export default function MDXContentWrapper(props: Props): ReactNode {
  const { colorMode } = useColorMode();
  return (
    <ThemeProvider colorMode={colorMode === "dark" ? "night" : "day"}>
      <BaseStyles>
        <MDXContent {...props} />
      </BaseStyles>
    </ThemeProvider>
  );
}
