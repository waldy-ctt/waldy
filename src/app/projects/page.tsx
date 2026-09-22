import type { Metadata } from "next";
import { ContentList } from "@/components/content-list";
import { getAllPosts } from "@/lib/md";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects and build notes by Waldy (Le Thanh Hieu) — what I made, how it works, and what I learned.",
  alternates: { canonical: "/projects" },
};

export default function ProjectIndex() {
  const posts = getAllPosts("projects");

  return (
    <main className="page-column">
      <h1 className="page-title">Projects</h1>
      <p className="page-lead">Notes and documents from things I&apos;ve built.</p>
      <ContentList items={posts} basePath="/projects" />
    </main>
  );
}
