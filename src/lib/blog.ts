import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

function extractLocationFromTitle(title: string): string {
  // Common Ontario cities and regions
  const locations = [
    "Hamilton",
    "St. Catharines",
    "St Catharines",
    "Niagara Falls",
    "Niagara",
    "Welland",
    "Brantford",
    "Fort Erie",
    "Burlington",
    "Grimsby",
    "Niagara-on-the-Lake",
    "Toronto",
    "Mississauga",
    "Ontario",
  ];

  for (const location of locations) {
    if (title.toLowerCase().includes(location.toLowerCase())) {
      return location;
    }
  }

  return "Ontario"; // Default fallback
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  isPillar: boolean;
  relatedPillar?: string;
  image: string;
  content: string;
  location: string;
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith(".mdx"))
    .map(fileName => {
      // Remove ".mdx" from file name to get id
      const slug = fileName.replace(/\.mdx$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Extract location from title
      const title = matterResult.data.title || "";
      const location = extractLocationFromTitle(title);

      // Combine the data with the slug
      return {
        slug,
        content: matterResult.content,
        location,
        ...matterResult.data,
      } as BlogPost;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    // Extract location from title
    const title = matterResult.data.title || "";
    const location = extractLocationFromTitle(title);

    return {
      slug,
      content: matterResult.content,
      location,
      ...matterResult.data,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith(".mdx"))
    .map(fileName => fileName.replace(/\.mdx$/, ""));
}

export function getPostsByCategory(category?: string): BlogPost[] {
  const allPosts = getAllPosts();

  if (!category || category === "All Articles") {
    return allPosts;
  }

  return allPosts.filter(post => post.category === category);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const allPosts = getAllPosts();
  const currentPost = allPosts.find(post => post.slug === currentSlug);

  if (!currentPost) return [];

  // Get posts from the same category, excluding the current post
  const relatedPosts = allPosts
    .filter(
      post =>
        post.slug !== currentSlug && post.category === currentPost.category
    )
    .slice(0, limit);

  // If not enough related posts, fill with other recent posts
  if (relatedPosts.length < limit) {
    const otherPosts = allPosts
      .filter(post => post.slug !== currentSlug && !relatedPosts.includes(post))
      .slice(0, limit - relatedPosts.length);

    return [...relatedPosts, ...otherPosts];
  }

  return relatedPosts;
}
