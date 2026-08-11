import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    layer: z.enum([
      'storage',
      'ingestion',
      'orchestration',
      'serving',
      'ai',
      'platform',
      'languages',
    ]),
    stack: z.array(z.string()),
    summary: z.string(),
    repo: z.string().url().optional(),
    closed: z.boolean().default(false),
  }),
});

export const collections = { projects };
