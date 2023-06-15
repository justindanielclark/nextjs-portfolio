import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Tag from "./Tag";

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, tags } = post;
  const formattedDate = date;

  return (
    <li className="mt-4 text-2xl text-white/90 even:bg-slate-700/10 odd:bg-slate-700/40 p-2 rounded">
      <div className="m-0 flex flex-row items-center justify-start">
        {tags.length > 0 ? (
          <div className="flex flex-row gap-2 mb-1 flex-1 justify-start">
            {tags.map((tag) => (
              <Tag tagName={tag} key={tag} />
            ))}
          </div>
        ) : undefined}
        <p className="text-sm m-0 p-0">{formattedDate}</p>
      </div>
      <Link className="block underline text-white/90 hover:text-white/70" href={`/blog/posts/${id}`}>
        {title}
      </Link>
    </li>
  );
}
