import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    date: z.string(),
    author: z.string().default('admin'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
