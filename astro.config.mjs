// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ansarcliniconline.com',
  build: {
    // Preserve the original .html URLs (e.g. /terms-and-conditions.html)
    format: 'file',
  },
});
