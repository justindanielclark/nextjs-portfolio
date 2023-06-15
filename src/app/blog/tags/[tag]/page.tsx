import { getPostsMeta } from "@/lib/posts";
import ListItem from "../../components/ListItem";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 86400;

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();
  if (!posts) return [];
  const tags = new Set(posts.map((post) => post.tags).flat());
  return Array.from(tags).map((tag) => {
    tag;
  });
}

export function generateMetadata({ params: { tag } }: Props): Metadata {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta();
  if (!posts) return <p className="mt-10 text-center">Sorry, no posts available</p>;
  const tagPosts = posts.filter((post) => post.tags.includes(tag));
  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword exist.</p>
        <Link href={"/"}>Back to Home</Link>
      </div>
    );
  }
  return (
    <>
      <h2 className="">Results for #{tag}</h2>
      <section className="">
        <ul className="w-full list-none p-0">
          {tagPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
