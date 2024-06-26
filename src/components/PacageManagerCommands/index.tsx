import { Icon } from "@iconify/react";
import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import React from "react";

type PackageManagerItem = {
  id: string;
  title: string;
  icon: string;
};

export const PackageManagerList: PackageManagerItem[] = [
  { id: "apt", title: "apt", icon: "logos:debian" },
  { id: "brew", title: "Homebrew", icon: "logos:homebrew" },
  { id: "pip", title: "Python", icon: "logos:python" },
  { id: "npm", title: "npm", icon: "logos:npm-icon" },
  { id: "gem", title: "Ruby", icon: "logos:rubygems" },
  { id: "go", title: "Go", icon: "logos:gopher" },
];

export default function PackageManagers({ commands }): JSX.Element {
  return (
    <Tabs groupId="package-manager">
      {PackageManagerList.map((props, idx) => (
        <TabItem
          key={idx}
          value={props.id}
          label={
            <p>
              <Icon icon={props.icon} inline={true} />
              {props.title}
            </p>
          }
        >
          <CodeBlock language="shell">
            {commands[props.id]
              ? commands[props.id]
              : commands[props.id] === null
                ? "# N/A"
                : "# Open a PR to complete this 🫶🏻"}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
