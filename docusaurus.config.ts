import tailwindPlugin from "./plugins/tailwind-plugin";
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { slug } from "github-slugger";
import { themes } from "prism-react-renderer";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// https://docusaurus.io/docs/api/docusaurus-config
export default {
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
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);
      const filePaths = params.filePath.split("/");
      const fileName = filePaths.pop();
      let name = fileName.split(".").shift();
      if (name === "README") {
        name = filePaths.pop();
      }
      // NOTE: Check console to see if there are any duplicated slugs
      result.frontMatter.slug = `/${slug(name)}`;
      if (
        (result.frontMatter.slug as string).endsWith("s") &&
        !result.frontMatter.skip_plural_check
      ) {
        console.warn(
          `Potential plural doc name: ${result.frontMatter.slug} at ${params.filePath}`,
        );
      }
      return result;
    },
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
          sidebarId: "designSidebar",
          label: "🎨 Design",
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
          sidebarId: "shoppingSidebar",
          label: "🛍️ Shopping",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "cookingSidebar",
          label: "🍳 Cooking",
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
      logo: {
        alt: "Tomy's Docs Logo",
        src: "img/tomy-circle-white.png",
        width: 25,
        height: 25,
      },
      style: "dark",
      links: [
        {
          title: "More",
          items: [
            {
              label: "About",
              to: "/about",
            },
            {
              label: "Rules",
              to: "/docs-rule",
            },
            {
              label: "Privacy Policy",
              to: "/privacy-policy",
            },
            {
              label: "GitHub",
              href: "https://github.com/tomy0000000/docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tomy Hsieh. Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      // https://github.com/FormidableLabs/prism-react-renderer/blob/master/packages/generate-prism-languages/index.ts#L9
      // https://prismjs.com/#supported-languages
      additionalLanguages: ["bash", "docker", "ini"],
    },
    algolia: {
      appId: "RJBX6ZLAHI",
      apiKey: "9991342c2a17675564d2451763097278",
      indexName: "tomy",
      contextualSearch: true,
    },
    mermaid: {
      options: {
        securityLevel: "loose",
      },
    },
  } satisfies Preset.ThemeConfig,

  plugins: [tailwindPlugin],
} satisfies Config;
