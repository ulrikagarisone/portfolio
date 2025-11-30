import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects - Main portfolio work
const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()),
        status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
        cover: image().optional(),
    }),
});

// Creative coding + research notes
const experiments = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/experiments' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()),
        status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
        cover: image().optional(),
    }),
});

export const collections = {
    projects,
    experiments,
};