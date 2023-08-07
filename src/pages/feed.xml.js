import rss from '@astrojs/rss';
import { getCollection } from "astro:content";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();
const poemPosts = await getCollection("poems");
const blogPosts = await getCollection("posts");
const reviewPosts = await getCollection("mahabharat");
const allPosts = [...poemPosts, ...blogPosts, ...reviewPosts];
const sortedPosts = allPosts.sort(
  (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
);
const options = {
    year: 'numeric', month: 'long', day: 'numeric'
};
export async function get(context) {
  return rss({
    title: 'ht.xyz',
    description: "Hitarth's personal website and blog",
    site: "https://hitarththummar.xyz",
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/${post.collection}/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      
    })),
  });
}