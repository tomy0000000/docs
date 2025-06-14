import { LoadContext, Plugin, PluginOptions } from "@docusaurus/types";

export default async function tailwindPlugin(
  _context: LoadContext,
  _options: PluginOptions,
): Promise<Plugin> {
  return {
    name: "tailwind-plugin",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [require("@tailwindcss/postcss")];
      return postcssOptions;
    },
  };
}
