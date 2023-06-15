import { Metadata } from "next";
import Container from "@/lib/sharedComponents/Container";

export const metadata: Metadata = {
  title: "Justin's Blog",
  description: "Created By Justin Clark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="prose prose-xl prose-invert prose-h1:text-5xl prose-h2:text-3xl flex-1 z-10 overflow-x-hidden min-w-full w-full">
      <Container className="bg-slate-900/70 min-h-full">{children}</Container>
    </main>
  );
}
