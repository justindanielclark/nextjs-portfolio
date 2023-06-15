import ListItem from "./components/ListItem";
import { getPostsMeta } from "@/lib/posts";

export const revalidate = 86400;

export default async function Blog() {
  const posts = await getPostsMeta();
  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }
  return (
    <>
      <h2 className="text-4xl font-bold text-white/90">Blog</h2>
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
}
