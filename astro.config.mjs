// astro.config.mjs
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [svelte()],
  output: 'server'
});