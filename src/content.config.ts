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
      'analytics',
      'ai',
      'platform',
      'languages',
      'web',
    ]),
    // Multi-coverage for end-to-end projects (e.g. BLIV).
    // `layer` is kept as a primary label for backwards compatibility.
    layers: z.array(
      z.enum([
        'storage',
        'ingestion',
        'orchestration',
        'analytics',
        'ai',
        'platform',
        'languages',
        'web',
      ])
    ).optional(),
    stack: z.array(z.string()),
    summary: z.string(),
    repo: z.string().url().optional(),
    article: z.string().url().optional(),
    closed: z.boolean().default(false),
  }),
});

export const collections = { projects };
