import fs from 'fs-extra';
import path from 'path';

// Replace these values with your actual collection paths and other relevant information
const poemsCollectionPath = 'src/collections/poems';
const siteUrl = 'https://example.com'; // Replace with your website URL
const feedTitle = 'My Poetry Feed';
const feedDescription = 'A collection of my poetry';

interface Post {
  title: string;
  slug: string;
  date: string;
  // Add other fields you want to include in the Atom feed
}

async function generateAtomFeed() {
  try {
    const posts: Post[] = await getPostsFromCollection(poemsCollectionPath);
    const feedXml = generateFeedXml(posts);

    const outputPath = 'dist/atom.xml'; // Output path for the atom.xml file
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, feedXml);

    console.log('atom.xml generated successfully!');
  } catch (error) {
    console.error('Error generating atom.xml:', error);
  }
}

async function getPostsFromCollection(collectionPath: string): Promise<Post[]> {
  // Your logic to read posts from the collection files and return an array of Post objects
  // For example, if your collection files are Markdown files with frontmatter, you can use a library like `gray-matter`
  // to read the files and extract the required information.

  // Here's a simple example assuming your posts are in a 'posts' folder and each post is a markdown file with frontmatter.
  const files = await fs.readdir(collectionPath);
  const posts: Post[] = [];

  for (const file of files) {
    const filePath = path.join(collectionPath, file);
    // Your logic to read the post content and extract relevant information
    // For example, using `gray-matter` to extract frontmatter from markdown files.
    // const content = await fs.readFile(filePath, 'utf-8');
    // const { data } = matter(content);
    // posts.push({ title: data.title, slug: data.slug, date: data.date });
  }

  return posts;
}

function generateFeedXml(posts: Post[]): string {
  const feedItems = posts
    .map((post) => {
      const postUrl = `${siteUrl}/poems/${post.slug}`; // Adjust the path as per your collection setup
      return `
        <entry>
          <title>${post.title}</title>
          <link href="${postUrl}" />
          <published>${post.date}</published>
          <!-- Add other fields as needed -->
        </entry>
      `;
    })
    .join('');

  return `
    <?xml version="1.0" encoding="utf-8"?>
    <feed xmlns="http://www.w3.org/2005/Atom">
      <title>${feedTitle}</title>
      <subtitle>${feedDescription}</subtitle>
      <link href="${siteUrl}/atom.xml" rel="self" />
      <link href="${siteUrl}" />
      <updated>${new Date().toISOString()}</updated>
      ${feedItems}
    </feed>
  `;
}

generateAtomFeed();

