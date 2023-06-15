import React from "react";
import Link from "next/link";

const preDefinedTagNames = ["default", "nextjs", "tailwindcss", "react"] as const;
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
