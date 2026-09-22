import { getAllPosts } from "@/lib/md";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = [
    ...getAllPosts("blogs").map((post) => ({ ...post, path: "/blog" })),
    ...getAllPosts("projects").map((post) => ({ ...post, path: "/projects" })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)}</title>
    <link>${site.url}</link>
    <description>${escapeXml(site.description)}</description>
    <language>en</language>
    <atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml" />
${items
  .map((item) => {
    const url = absoluteUrl(`${item.path}/${item.slug}`);
    const pubDate = item.date
      ? new Date(item.date).toUTCString()
      : new Date().toUTCString();

    return `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>`;
  })
  .join("\n")}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
