// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        type: z.string().optional(), // "Design", "Development", "Visual"
        experience: z.string().optional(), 
    }),
});

const designTranslator = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/design-translator" }),
    schema: z.object({
        userQuote: z.string(),
        translation: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = {
    projects,
    "design-translator": designTranslator
};