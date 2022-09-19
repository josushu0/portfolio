import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://josushu0.github.io',
  base: '/portfolio',
  integrations: [vue()]
});