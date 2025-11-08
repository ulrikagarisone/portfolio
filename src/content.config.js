import { defineCollection, z } from 'astro:content';

// Projects - Main portfolio work
const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()),
        status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
        cover: z.string().optional(),
    }),
});

// Creative coding + research notes
const experiments = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()),
        status: z.enum(['completed', 'in-progress', 'archived']).default('completed'),
        cover: z.string().optional(),
    }),
});

export const collections = {
    projects,
    experiments,
};