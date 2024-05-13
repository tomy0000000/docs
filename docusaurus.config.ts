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

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
      type: "text/css",
      integrity: "sha256-UF1fgpAiu3tPJN/uCqEUHNe7pnr+QR0SQDNfgglgtcM=",
      crossorigin: "anonymous",
    },
  ],

  scripts: [
    {
      src: "https://a.tomy.me/js/script.js",
      defer: true,
      "data-domain": "docs.tomy.me",
    },
  ],

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
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/tomy0000000/docs/blob/main/",
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
          sidebarId: "developingSidebar",
          label: "👨🏻‍💻 Developing",
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
          sidebarId: "travelSidebar",
          label: "🧳 Travel",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "financeSidebar",
          label: "🏦 Finance",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "miscSidebar",
          label: "🍥 Misc",
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
              label: "📦 Package Managers",
              to: "/package-managers/glossary",
            },
            {
              label: "📜 Specifications",
              to: "/specifications/country",
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
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ["bash", "docker"],
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
