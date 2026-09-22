import { getAllPosts, getPostBySlug } from "@/lib/md";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Project on Waldy's digital garden";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return getAllPosts("projects").map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPostBySlug("projects", slug);

  return renderOgImage({
    label: "Project",
    title: project?.meta.title ?? "Project",
    subtitle: project?.meta.description,
    meta: project?.meta.date,
  });
}
