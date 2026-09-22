/**
 * Single source of truth for identity + absolute URLs (canonicals, sitemap, OG, RSS).
 *
 * Set NEXT_PUBLIC_SITE_URL once a custom domain exists. On Vercel the production
 * domain is used automatically, so previews and local dev still resolve.
 */
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  url: rawSiteUrl.replace(/\/+$/, ""),
  name: "Waldy's digital garden",
  title: "Waldy (Le Thanh Hieu) — Software Engineer",
  author: "Le Thanh Hieu",
  handle: "Waldy",
  jobTitle: "Software Engineer",
  location: "Phu Quoc, Viet Nam",
  email: "lethanhhieu.waldy@gmail.com",
  locale: "en_US",
  description:
    "Digital garden and portfolio of Waldy (Le Thanh Hieu), a software engineer from Viet Nam — blog posts, project notes, and experiments.",
  keywords: [
    "Waldy",
    "Le Thanh Hieu",
    "software engineer",
    "digital garden",
    "developer portfolio",
    "Viet Nam developer",
  ],
  /** Canonical profile URLs for search engines (Person.sameAs). */
  sameAs: [
    "https://github.com/waldy-ctt",
    "https://codeberg.org/waldy",
    "https://www.linkedin.com/in/le-thanh-hieu-464a5b257/",
    "https://t.me/waldyctt",
    "https://www.facebook.com/lethanhhieu.waldy",
    "https://www.instagram.com/lethanhhieu.waldy/",
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${site.url}/`).toString();
}
