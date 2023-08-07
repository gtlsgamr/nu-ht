import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();
const poemPosts = await getCollection("poems");
const blogPosts = await getCollection("posts");
const reviewPosts = await getCollection("mahabharat");
const allPosts = [...poemPosts, ...blogPosts, ...reviewPosts];
const sortedPosts = allPosts.sort(
  (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
);


function convertToRFC3339(dateString) {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}

export async function get(context) {
  const xmlEntries = sortedPosts.map((post) => {
    return `
      <entry>
        <title>${post.data.title}</title>
        <id>https://hitarththummar.xyz/${post.collection}/${post.slug}</id>
        <updated>${convertToRFC3339(post.data.date)}</updated>
        <summary>"${post.data.description}"</summary>
        <content type="html">${sanitizeHtml(parser.render(post.body))}</content>
      </entry>
    `;
  });

  return {
    body: `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
<title>ht.xyz</title>
<id>https://hitarththummar.xyz/feed.xml</id>
<subtitle>Hitarth Thummar's website and blog</subtitle>
<link href="https://hitarththummar.xyz"/>
<link href="https://hitarththummar.xyz/atom.xml" rel="self"/>
<updated>${convertToRFC3339(sortedPosts[0].data.date)}</updated>
<author>
<name>Hitarth Thummar</name>
<email>hittarth91@gmail.com</email>
</author>
${xmlEntries}
</feed>
    `,
  };
}
