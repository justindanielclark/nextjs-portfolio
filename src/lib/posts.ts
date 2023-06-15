import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";
import Video from "@/app/blog/components/BlogPostComponents/Video";
import CustomImage from "@/app/blog/components/BlogPostComponents/CustomImage";

export async function getPostsMeta(): Promise<Meta[] | undefined> {
  if (typeof process.env.GITHUB_TOKEN !== "string") {
    throw new Error(".env.local must be populated");
  }
  const headers = new Headers([
    ["Accept", "application/vnd.github+json"],
    ["Authorization", `Bearer ${process.env.GITHUB_TOKEN}`],
    ["X-GitHub-Api-Version", "2022-11-28"],
  ]);
  const res = await fetch("https://api.github.com/repos/justindanielclark/NextJS13BlogPosts/git/trees/main", {
    headers,
  });
  if (!res.ok) {
    return undefined;
  }

  const repoFiletree: Filetree = await res.json();
  const fetchArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(".mdx"))
    .map((path) => {
      return getPostByName(path);
    });
  const posts: Array<BlogPost | undefined> = await Promise.all(fetchArray);
  const filteredPosts = posts.filter((post) => post !== undefined) as BlogPost[];
  const filteredPostsMeta = filteredPosts.map((filteredPost) => filteredPost.meta);
  return filteredPostsMeta;
}
export async function getPostByName(fileName: string) {
  if (typeof process.env.GITHUB_TOKEN !== "string") {
    throw new Error(".env.local must be populated");
  }
  const headers = new Headers([
    ["Accept", "application/vnd.github+json"],
    ["Authorization", `Bearer ${process.env.GITHUB_TOKEN}`],
    ["X-GitHub-Api-Version", "2022-11-28"],
  ]);
  const res = await fetch(`https://raw.githubusercontent.com/justindanielclark/NextJS13BlogPosts/main/${fileName}`, {
    headers,
  });
  if (!res.ok) {
    return undefined;
  }
  const rawMDX = await res.text();
  if (rawMDX === "404: Not Found") return undefined;
  const { frontmatter, content } = await compileMDX<{ title: string; date: string; tags: string[] }>({
    source: rawMDX,
    components: {
      Video,
      CustomImage,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight, rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
      },
    },
  });
  const id = fileName.replace(/\.mdx$/, "");
  const blogPost: BlogPost = {
    content,
    meta: {
      id,
      date: frontmatter.date,
      tags: frontmatter.tags,
      title: frontmatter.title,
    },
  };
  return blogPost;
}
