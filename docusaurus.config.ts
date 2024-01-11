import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes } from "prism-react-renderer";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const config: Config = {
  title: "Tomy's Docs",
  tagline: "Tomy's Personal Documents Library",
  favicon: "img/favicon.ico",

  url: "https://docs.tomy.me",
  baseUrl: "/",

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

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/tomy0000000/docs/",
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image:
    //   "https://raw.githubusercontent.com/facebook/docusaurus/main/examples/classic-typescript/static/img/docusaurus-social-card.jpg",
    navbar: {
      title: "Tomy's Docs",
      logo: {
        alt: "Tomy's Docs Logo",
        src: "img/tomy-circle-white.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "mainSidebar",
          label: "Main",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "packageManagerSidebar",
          label: "📦 Package Managers",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "pythonSidebar",
          label: "🐍 Python",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "specificationsSidebar",
          label: "📜 Specifications",
          position: "left",
        },
        {
          href: "https://github.com/tomy0000000/docs",
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
              label: "Home",
              to: "/",
            },
            {
              label: "Package Managers",
              to: "/package-managers/glossary",
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
    stylesheets: [
      {
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
        type: "text/css",
        integrity:
          "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
        crossorigin: "anonymous",
      },
    ],
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
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
