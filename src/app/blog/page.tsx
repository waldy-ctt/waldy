import type { Metadata } from "next";
import { ContentList } from "@/components/content-list";
import { getAllPosts } from "@/lib/md";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays and notes by Waldy (Le Thanh Hieu) on software, tools, and building things.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts("blogs");

  return (
    <main className="page-column">
      <h1 className="page-title">Blog</h1>
      <p className="page-lead">
        Random thoughts about random things in this random life.
      </p>
      <ContentList items={posts} basePath="/blog" />
    </main>
  );
}
