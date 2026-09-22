import { getAllPosts, getPostBySlug } from "@/lib/md";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = "Blog post on Waldy's digital garden";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return getAllPosts("blogs").map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug("blogs", slug);

  return renderOgImage({
    label: "Blog",
    title: post?.meta.title ?? "Blog",
    subtitle: post?.meta.description,
    meta: post?.meta.date,
  });
}
