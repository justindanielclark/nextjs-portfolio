import React from "react";
import Link from "next/link";

const preDefinedTagNames = [
  "default",
  "nextjs",
  "tailwindcss",
  "react",
  "leetcode",
  "neetcode",
  "easy",
  "medium",
  "hard",
] as const;
type TagName = (typeof preDefinedTagNames)[number];
type PredefinedTag = {
  textColor: string; //TailwindClass
  bgColor: string; //TailwindClass
};
const preDefinedTags = new Map<TagName | string, PredefinedTag>();
preDefinedTags.set("nextjs", {
  bgColor: "bg-black",
  textColor: "text-white",
});
preDefinedTags.set("react", {
  bgColor: "bg-cyan-400",
  textColor: "text-back",
});
preDefinedTags.set("tailwindcss", {
  bgColor: "bg-white",
  textColor: "text-cyan-600",
});
preDefinedTags.set("leetcode", {
  bgColor: "bg-black",
  textColor: "text-yellow-500",
});
preDefinedTags.set("neetcode", {
  bgColor: "bg-black",
  textColor: "text-cyan-600",
});
preDefinedTags.set("easy", {
  bgColor: "bg-green-500",
  textColor: "text-green-950",
});
preDefinedTags.set("medium", {
  bgColor: "bg-yellow-500",
  textColor: "text-yellow-950",
});
preDefinedTags.set("hard", {
  bgColor: "bg-red-500",
  textColor: "text-red-950",
});
preDefinedTags.set("default", {
  bgColor: "bg-white",
  textColor: "text-black",
});

type Props = {
  tagName: string;
};
export default function Tag({ tagName }: Props) {
  let tagData = preDefinedTags.get(tagName);
  if (tagData == undefined) {
    tagData = preDefinedTags.get("default") as PredefinedTag;
  }
  return (
    <Link
      href={`/blog/tags/${tagName}`}
      className={`${tagData.bgColor} ${tagData.textColor} text-sm px-1.5 py-0.5 rounded`}
    >
      {tagName}
    </Link>
  );
}
