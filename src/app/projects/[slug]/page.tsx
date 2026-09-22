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
  const posts = getAllPosts("projects");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPostBySlug("projects", slug);

  if (!project) return {};

  return {
    title: project.meta.title,
    description: project.meta.description,
    keywords: project.meta.tags,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: "article",
      title: project.meta.title,
      description: project.meta.description,
      url: absoluteUrl(`/projects/${slug}`),
      publishedTime: project.meta.date || undefined,
      authors: [site.author],
      tags: project.meta.tags,
    },
  };
}

export default async function ProjectPost({ params }: PageProps) {
  const { slug } = await params;
  const project = getPostBySlug("projects", slug);

  if (!project) notFound();

  return (
    <article className="page-column">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.meta.title,
          description: project.meta.description,
          datePublished: project.meta.date,
          keywords: project.meta.tags,
          inLanguage: "en",
          url: absoluteUrl(`/projects/${slug}`),
          image: absoluteUrl(`/projects/${slug}/opengraph-image`),
          author: {
            "@type": "Person",
            name: site.author,
            alternateName: site.handle,
            url: site.url,
          },
        }}
      />

      <header className="mb-10 border-b border-border pb-8">
        <h1 className="page-title">{project.meta.title}</h1>
        <p className="mt-4 font-mono text-xs tabular-nums tracking-wide text-muted-foreground">
          {project.meta.date}
        </p>
      </header>

      <div className="prose-garden">
        <MDXRemote source={project.content} />
      </div>
    </article>
  );
}
