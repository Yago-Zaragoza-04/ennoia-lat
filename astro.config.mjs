import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  output: 'static',
  server: {
    port: 4321
  },
  integrations: [react()],
});
