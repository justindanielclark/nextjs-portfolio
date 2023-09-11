import { getPostsMeta, getPostByName } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Tag from "../../components/Tag";

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
  return (
    <>
      <h1 className="mt-4 mb-0 text-white/90">{meta.title}</h1>
      <p className="mt-0 text-sm text-white/80">{pubDate}</p>
      <article>{content}</article>
      {meta.tags.length > 0 ? (
        <section className="mb-8">
          <h2 className="my-2">Related Posts By Tag:</h2>
          <div className="flex flex-row gap-4">
            {meta.tags.map((tag) => (
              <Tag tagName={tag} key={tag} />
            ))}
          </div>
        </section>
      ) : undefined}
      <div className="mb-8">
        <h2 className="my-2">Navigate:</h2>
        <Link href={"/blog"} className="flex flex-row w-full hover:bg-slate-700/80 no-underline p-2">
          <span className="block basis-10 shrink-0 grow-0">✉️</span>
          <span className="block basis-full grow-1">Back to Posts </span>
        </Link>
        {/* <Link href={"/"} className="flex flex-row w-full hover:bg-slate-700/80 no-underline p-2">
          <span className="block basis-10 shrink-0 grow-0">🏠</span>
          <span className="block basis-full grow-1">Back to Home </span>
        </Link> */}
      </div>
    </>
  );
}
