import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const rootDirectory = process.cwd();

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  [key: string]: any;
}

export function getAllFiles(folder: "blogs" | "projects"): string[] {
  const dirPath = path.join(rootDirectory, "public/content", folder);
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath).filter((file) => file.endsWith(".md"));
}

export function getAllPosts(folder: "blogs" | "projects"): PostMetadata[] {
  const files = getAllFiles(folder);

  const posts: PostMetadata[] = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(rootDirectory, "public/content", folder, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? "Untitled",
      date: data.date ?? "",
      description: data.description ?? "",
      tags: data.tags ?? [],
      ...data,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(folder: "blogs" | "projects", slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(
    rootDirectory,
    "public/content",
    folder,
    `${realSlug}.md`,
  );

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const meta: PostMetadata = {
    slug: realSlug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
    ...data,
  };

  return {
    meta,
    content,
  };
}
