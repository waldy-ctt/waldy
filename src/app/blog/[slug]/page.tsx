import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/md";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Statically generate routes at build time
export async function generateStaticParams() {
  const posts = getAllPosts("blogs");
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug("blogs", slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 mt-20 pb-20">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-2">{post.meta.title}</h1>
        <p className="text-sm text-muted-foreground">{post.meta.date}</p>
      </header>

      {/* Styled with Tailwind Typography 'prose' */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
