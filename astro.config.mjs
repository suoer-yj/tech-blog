import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tech-blog.vercel.app',
  integrations: [
    tailwind()
  ]
});
