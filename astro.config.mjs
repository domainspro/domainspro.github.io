import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://bartoszlenar.github.io",
  base: "/astro-milidev/",
  integrations: [sitemap(), mdx(), pagefind()],

  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});