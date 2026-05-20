import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkVideoEmbed } from './src/lib/remark-video-embed';

export default defineConfig({
  site: 'https://tech-blog.vercel.app',
  integrations: [
    tailwind()
  ],
  markdown: {
    remarkPlugins: [remarkVideoEmbed]
  }
});
