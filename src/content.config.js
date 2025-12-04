import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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

const skills = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/skills" }),
    schema: z.object({
        title: z.string(),
        category: z.string(),
        order: z.number(),
        tools: z.array(z.string()),
        description: z.string(),
        imagePath: z.string(),
    }),
});

export const collections = {
    projects,
    experiments,
    skills,
};