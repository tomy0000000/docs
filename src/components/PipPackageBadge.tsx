import { Icon } from "@iconify/react";
import "@primer/primitives/dist/css/functional/themes/light.css";
import { Button, Link } from "@primer/react";
import { BaseStyles, ThemeProvider } from "@primer/react";

interface PipPackageBadgeProps {
  name: string;
}

export default function PipPackageBadge({ name }: PipPackageBadgeProps) {
  return (
    <ThemeProvider>
      <BaseStyles>
        <Button
          as={Link}
          href={`https://pypi.org/project/${name}`}
          target="_blank"
          rel="noopener noreferrer"
          muted={true}
          leadingVisual={<Icon icon="logos:pypi" inline={true} />}
        >
          {name}
        </Button>
      </BaseStyles>
    </ThemeProvider>
  );
}
