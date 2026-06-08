// Static endpoint: one generated social card per content entry.
// URL shape: /og/<collection>/<slug>.png  (referenced from Head.astro)
// Entries that declare a custom `image` in frontmatter are skipped.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { renderOg } from "../../lib/og";

const COLLECTIONS = ["posts", "poems", "mahabharat"] as const;
const LABELS: Record<string, string> = {
  posts: "Blog",
  poems: "Poem",
  mahabharat: "Mahabharat Review",
};

// Section / index pages get their own branded cards too (no date → the footer
// shows the domain instead). Referenced as image="/og/pages/<slug>.png".
const PAGES = [
  { slug: "home", title: "Hitarth Thummar", description: "A developer and poet from Gujarat, India — code, poems, artwork, and reflections." },
  { slug: "blog", title: "Hitarth's Blog", description: "Essays and short posts — on tech, food, culture, and life in Gujarat." },
  { slug: "poems", title: "Hitarth's Poems", description: "A collection of poetry, in English and Hindi." },
  { slug: "artwork", title: "Hitarth's Artwork", description: "Vaporwave themes and pop-culture remixes made in Photoshop." },
  { slug: "mahabharat", title: "Mahabharat Reviews", description: "An episode-by-episode reading companion to the 1988 TV series." },
  { slug: "about", title: "About Hitarth", description: "A developer, poet, and sometime artist writing on the small web." },
  { slug: "tags", title: "Hitarth's Tags", description: "Browse posts, poems, and reviews by tag." },
];

export async function getStaticPaths() {
  const paths = [];
  for (const collection of COLLECTIONS) {
    const entries = await getCollection(collection as any);
    for (const entry of entries) {
      if (entry.data.image) continue; // custom card supplied — nothing to generate
      paths.push({
        params: { route: `${collection}/${entry.slug}` },
        props: {
          title: entry.data.title,
          description: entry.data.description,
          date: entry.data.date,
          label: LABELS[collection],
        },
      });
    }
  }
  for (const page of PAGES) {
    paths.push({
      params: { route: `pages/${page.slug}` },
      props: { title: page.title, description: page.description, label: "" },
    });
  }
  return paths;
}

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props as any);
  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
