import Link from "next/link";
import { getAllPosts } from "@/lib/md";

export default function BlogIndex() {
  const posts = getAllPosts("blogs");

  return (
    <div className="mx-auto max-w-2xl px-6 mt-20">
      <h1 className="text-4xl font-semibold ">Blogs</h1>
      <p>I wrote random thought about random things in this random life.</p>
      <div className="space-y-6 mt-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group border border-border p-5 rounded-lg hover:border-foreground/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <span className="text-sm text-muted-foreground ml-3">
                {post.date}
              </span>
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
