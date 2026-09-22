# Waldy Taste — Reference

Detail for [SKILL.md](SKILL.md).

## Source of truth

| Concern | Path |
|---------|------|
| Tokens + utilities | `src/app/globals.css` |
| Fonts / theme / root metadata | `src/app/layout.tsx` |
| Identity, domain, `sameAs` | `src/lib/site.ts` |
| OG card renderer | `src/lib/og.tsx` |
| Header | `src/components/header.tsx` |
| Index lists | `src/components/content-list.tsx` |
| Button | `src/components/ui/button.tsx` |
| shadcn | `components.json` (`base-lyra`, stone) |

## Theme (locked, dark-only)

- `layout.tsx`: static `dark` class on `<html>`, `forcedTheme="dark"`, `enableSystem={false}`
- `viewport`: `colorScheme: "dark"`, `themeColor: "#090807"` (matches `--background`)
- `globals.css`: one palette in `:root` with `color-scheme: dark` — **no `.dark` block, no light values**
- `@custom-variant dark` stays so kit `dark:` utilities in `button.tsx` still resolve (html keeps the class)
- `--radius: 0rem`; body uses `--foreground`
- Violet split: `--primary` `oklch(0.42 0.115 301)` deep plum for filled surfaces; `--accent-violet` `oklch(0.78 0.11 298)` for text accents and `--ring`
- Filled-button hover brightens via `color-mix(in oklch, var(--primary), var(--foreground) 12%)` — matches the kit's `secondary` idiom, never a fade to `/80`
- Adding a light theme means re-auditing prose, marks, emerald status, signature mask, and hairlines — treat as a project, not a flag

## Language (locked)

- English only, `lang="en"`, no i18n library or `/vi` routing
- Vietnamese only as inline content inside a post or a line of copy

## Shared classes (`globals.css`)

| Class | Use |
|-------|-----|
| `.page-column` | Content routes shell |
| `.page-title` | H1 |
| `.page-lead` | Subtitle under H1 |
| `.prose-garden` | MDX body — token-bound colors (`--tw-prose-*` → `--foreground`), never `prose-neutral`/`prose-invert`; `text-pretty` paragraphs, scrollable `pre` |

## Page recipes

### Home
- `main` flex-1 centered, `max-w-xl`
- Name as display + muted legal name line
- Hairline `h-px w-14`
- CTA via `buttonVariants({ size: "lg" })` on `Link`

### About / Contact
- `.page-column` + hairline under title
- Long-form `text-lg leading-[1.75] text-foreground`
- Highlight: `<mark className="bg-primary px-1 text-primary-foreground">`
- Status accents stay content-only (emerald, VN gradient)

### Blog / Projects index
- `.page-column` + `.page-title` + `.page-lead`
- `<ContentList items={…} basePath="/blog|/projects" />`
- Row hover tints the title with `text-accent-violet`, not `text-primary`

### Detail articles
- `.page-column`
- Header block with `border-b` + mono date
- `.prose-garden` for MDX

### Header
- Sticky, solid `bg-background`, `border-b`, `h-16`
- Signature CSS mask
- Tracked uppercase nav links

## CTA pattern

Prefer Link + variants (valid HTML):

```tsx
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

<Link href="…" className={cn(buttonVariants({ size: "lg" }), "mt-10 …")}>
  Label
</Link>
```

## Responsive (mobile-first patches)

- Header: stacked logo + full-width nav under `md`; desktop keeps 3-col grid
- `.page-column`: `px-4 mt-12` → `sm:px-6 sm:mt-20`
- `.page-title`: `text-3xl` → `sm:text-4xl`
- `ContentList`: title/date stack on small screens
- Home CTA: `whitespace-normal`, wraps on narrow widths
- About PDF: direct “Open PDF” on mobile; inline embed from `sm`
- Contact labels: `min-w-0 break-words`
- Body: `overflow-x-clip`; prose `pre` scrolls horizontally
- `viewport` export in `layout.tsx`

## SEO conventions

Every new route must ship metadata — an untitled page is an unindexable page.

- Static route → `export const metadata` with `title` (short, the layout appends `· Waldy`), `description`, and `alternates: { canonical: "/path" }`
- Dynamic route → `generateMetadata` with title, description, `keywords` from frontmatter tags, canonical, and `openGraph: { type: "article", publishedTime }`
- Never hardcode the domain; use `site`/`absoluteUrl` from `src/lib/site.ts` (`NEXT_PUBLIC_SITE_URL`, else the Vercel production domain, else localhost)
- Structured data via `<JsonLd data={…} />`: `Person` + `WebSite` on home, `BlogPosting` on posts, `CreativeWork` on projects
- Crawler surface: `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/rss.xml/route.ts` — all pick up new content automatically from `public/content`
- Add a new content folder → extend `sitemap.ts` and the RSS route in the same change
- OG images: `opengraph-image.tsx` per route using `renderOgImage`. Satori can't read CSS variables, so `src/lib/og.tsx` holds hex literals mirroring the tokens — this is the **only** sanctioned hex in the codebase; update it when the palette changes
- Keep OG cards on-taste: dark, sharp, tracked uppercase label, hairline rule, no gradients

## Extending

1. New page → `.page-column` first.
2. New list → `ContentList` or same divide-y pattern.
3. New color → one OKLCH value in `:root` + `@theme` bridge (dark-only, so one value).
4. Never add blur, soft radius, or Apple-like materials.
5. Before adding UI, check whether removing something achieves the same goal.
