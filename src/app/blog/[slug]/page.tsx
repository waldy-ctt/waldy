import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/md";
import { absoluteUrl, site } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts("blogs");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug("blogs", slug);

  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    keywords: post.meta.tags,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description,
      url: absoluteUrl(`/blog/${slug}`),
      publishedTime: post.meta.date || undefined,
      authors: [site.author],
      tags: post.meta.tags,
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug("blogs", slug);

  if (!post) notFound();

  return (
    <article className="page-column">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.meta.title,
          description: post.meta.description,
          datePublished: post.meta.date,
          dateModified: post.meta.date,
          keywords: post.meta.tags,
          inLanguage: "en",
          mainEntityOfPage: absoluteUrl(`/blog/${slug}`),
          image: absoluteUrl(`/blog/${slug}/opengraph-image`),
          author: {
            "@type": "Person",
            name: site.author,
            alternateName: site.handle,
            url: site.url,
          },
        }}
      />

      <header className="mb-10 border-b border-border pb-8">
        <h1 className="page-title">{post.meta.title}</h1>
        <p className="mt-4 font-mono text-xs tabular-nums tracking-wide text-muted-foreground">
          {post.meta.date}
        </p>
      </header>

      <div className="prose-garden">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
