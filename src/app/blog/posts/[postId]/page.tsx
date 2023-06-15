import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();
  if (posts) {
    return posts.map((post) => ({
      postId: post.id,
    }));
  }
  return [];
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);
  if (!post) {
    notFound();
  }
  const { meta, content } = post;
  const pubDate = meta.date;
  const tags = meta.tags.map((tag, i) => {
    return (
      <Link key={i} href={`/blog/tags/${tag}`}>
        {tag}
      </Link>
    );
  });

  return (
    <>
      <h1 className="mt-4 mb-0 text-white/90">{meta.title}</h1>
      <p className="mt-0 text-sm text-white/80">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h2>Related:</h2>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <div className="mb-10">
        <h2>Navigate:</h2>
        <Link href={"/blog"} className="flex flex-row w-full hover:bg-slate-700/80 no-underline p-2">
          <span className="block basis-10 shrink-0 grow-0">✉️</span>
          <span className="block basis-full grow-1">Back to Posts </span>
        </Link>
        <Link href={"/"} className="flex flex-row w-full hover:bg-slate-700/80 no-underline p-2">
          <span className="block basis-10 shrink-0 grow-0">🏠</span>
          <span className="block basis-full grow-1">Back to Home </span>
        </Link>
      </div>
    </>
  );
}
