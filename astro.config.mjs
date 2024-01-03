import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

import remarkLinkCard from "remark-link-card";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  markdown: {
    remarkPlugins: [remarkLinkCard],
  },
  remarkPlugins: [remarkLinkCard],
});
