import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";
import partytown from "@astrojs/partytown";
import compress from "astro-compress";
import purgecss from "astro-purgecss";

import criticalCss from "astro-critical-css";

// https://astro.build/config
export default defineConfig({
  site: 'https://aidxn.com',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }[sitemap()]), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), alpinejs(), partytown(), compress(), purgecss(), criticalCss()],
  experimental: {
    viewTransitions: true
  }
});