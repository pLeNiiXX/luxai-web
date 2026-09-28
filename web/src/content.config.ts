import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faq = z.array(z.object({ q: z.string(), a: z.string() })).default([]);

/** Guías: una entrada por idioma, emparejadas por `key` */
const guias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guias' }),
  schema: z.object({
    lang: z.enum(['es', 'en']),
    key: z.string(),
    slug: z.string(),
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    excerpt: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    readingMinutes: z.number(),
    order: z.number().default(10),
    faq,
    related: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});

export const collections = { guias };
