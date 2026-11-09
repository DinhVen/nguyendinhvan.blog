import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    category: z.enum(['data-engineering', 'life', 'future']),
    categoryLabel: z.string(),
    readingTime: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
