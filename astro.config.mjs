import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

import remarkLinkCard from "remark-link-card";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkLinkCard],
  },
  remarkPlugins: [remarkLinkCard],
});
