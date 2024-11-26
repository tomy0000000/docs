import { Config } from "tailwindcss";

// https://tailwindcss.com/docs/configuration
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // Preflight overwrites Docusaurus default styles and breaks the layout
    // Once Docusaurus styles are removed, we can enable this
    preflight: false,
  },
} satisfies Config;
