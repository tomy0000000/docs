import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Tomy's Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.tomy.me",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "tomy0000000",
  projectName: "docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image:
      "https://raw.githubusercontent.com/facebook/docusaurus/main/examples/classic-typescript/static/img/docusaurus-social-card.jpg",
    navbar: {
      title: "Tomy's Docs",
      logo: {
        alt: "Tomy's Docs Logo",
        src: "https://github.com/facebook/docusaurus/raw/main/examples/classic-typescript/static/img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/tomy0000000/docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tomy Hsieh. Built with Docusaurus.`,
    },
    prism: {
      theme: require("prism-react-renderer").themes.github,
      darkTheme: require("prism-react-renderer").themes.dracula,
    },
    algolia: {
      appId: "RJBX6ZLAHI",
      apiKey: "9991342c2a17675564d2451763097278",
      indexName: "tomy",
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;