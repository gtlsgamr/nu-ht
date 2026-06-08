// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default([]),
      // Optional custom social-card image. If omitted, one is generated
      // automatically at /og/<collection>/<slug>.png (see src/pages/og/).
      image: z.string().optional(),
    })
});

const mahabharatCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  })
});

const poemsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  mahabharat: mahabharatCollection,
  poems: poemsCollection,
};