// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.string(),
      description: z.string(),
    })
});

const mahabharatCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
  })
});

const poemsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
  })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  mahabharat: mahabharatCollection,
  poems: poemsCollection,
};