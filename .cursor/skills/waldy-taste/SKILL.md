---
name: waldy-taste
description: >-
  Locked taste-design system for Waldy's personal digital garden. Enforces
  premium-minimal editorial sharpness (not Apple soft): dark-only, English-only,
  Geist, stone/violet OKLCH, radius 0, hairlines, tracked nav, max-w-2xl
  columns, quiet color-only motion. Use for every UI, layout, styling, page,
  component, Tailwind, theme, header, MDX, or visual change in this repo.
---

# Waldy Taste

**Premium minimal — sharp, editorial, precise.** Not empty minimalism, not Apple softness.

Recipes + tokens: [reference.md](reference.md)

## Design read (fixed)

**Reading this as:** personal digital garden / developer portfolio — calm premium-minimal language; Geist + shadcn base-lyra (stone) + rare violet; hairlines and type craft over decoration.

Voice: *minimal, less is more, elegant* — elevated by contrast, spacing, and sharp geometry.

## Locked dials

| Dial | Value | Meaning |
|------|-------|---------|
| `DESIGN_VARIANCE` | **4** | One column, predictable rhythm, light established asymmetry |
| `MOTION_INTENSITY` | **2** | Color transitions + focus rings only |
| `VISUAL_DENSITY` | **2** | Airy spacing (`page-column`, hairline rules, `mt-8`/`mt-10`/`mt-12`) |

## Locked product decisions

Treat as settled. Do not propose these as "improvements" again.

| Decision | State |
|----------|-------|
| **Theme** | **Dark only.** One palette in `:root` + `color-scheme: dark` + `forcedTheme="dark"`. No light palette, no toggle, no system detection. |
| **Language** | **English only** (`lang="en"`). No i18n library, locale routing, or translated duplicates. Vietnamese appears only as inline content when Waldy writes it. |
| **Scope** | Minimal surface: no footer, sidebar, search, tags UI, or theme switcher unless Waldy asks. |

Reopen only if Waldy explicitly changes direction.

## Pre-flight

1. Announce: *"Applying Waldy taste (premium-minimal / dials 4·2·2)."*
2. Clone existing page recipes; prefer shared utilities (`.page-column`, `.page-title`, `.page-lead`, `.prose-garden`, `ContentList`).
3. Reject: Apple soft (blur, big radius, pills, frosted glass), AI purple mesh, glass cards, badge clusters, dashboard shells.

## Taste laws

### Premium = craft, not chrome
- Flat `bg-background`. Solid sticky header (`border-b`) — **no backdrop blur**.
- `--radius: 0` / `rounded-none` everywhere. No soft cards.
- Neutrals carry the page. Violet is rare and split in two roles:
  - `--primary` — deep plum, **filled surfaces only** (CTA, `mark`), with near-white `--primary-foreground`
  - `--accent-violet` — light violet, **text accents on dark** (list-title hover, focus ring)
- Never use `text-primary` on dark: the plum is too deep to read as text.
- Body ink: `text-foreground` (crisp). Secondary: `text-muted-foreground`. Do not wash body in `text-primary-foreground`.
- Editorial marks: short `h-px w-14 bg-foreground/50` rules under titles; mono tabular dates.

### Structure
- Content: class `page-column` (`max-w-2xl px-6 mt-20 mb-24`).
- Home: centered `max-w-xl` inside flex-1 main — not the content column.
- One global `Header`. Padding `px-6`.

### Type
- Geist. Titles: `.page-title` (`text-4xl font-semibold tracking-tight text-balance`).
- Nav: `text-[11px] uppercase tracking-[0.2em] font-medium`.
- Leads: `.page-lead`. Body ~`text-lg leading-[1.75]` on long-form.
- MDX: `.prose-garden`.
- Dates: `font-mono text-xs tabular-nums tracking-wide text-muted-foreground`.

### Lists & links
- Indexes use `ContentList` — `border-y` + `divide-y` rows, not rounded boxes.
- Title hover → `text-primary`. Inline links: bottom border, hover → muted.
- CTAs: `buttonVariants({ size: "lg" })` on `Link` (or Button) — sharp, `tracking-wide`, generous padding.

### Theme
- Single dark palette in `:root` (OKLCH) — no `.dark` token block to keep in sync.
- Selection tinted with primary mix. `scrollbar-gutter: stable` prevents page shift.
- Delete unused tokens instead of carrying them (no sidebar/chart leftovers).

## SEO is part of shipping

Every new route needs a `title`, `description`, and canonical path; dynamic routes use `generateMetadata`. Domain comes from `src/lib/site.ts`, never hardcoded. Sitemap, robots, and RSS live in `src/app` and must stay in sync with new content types. Details in [reference.md](reference.md).

## Minimal ≠ bloated

Premium comes from contrast, type, spacing, and edges — not added layers.

- Adding a component must remove or replace something, or earn its place.
- No decorative dependencies; no animation libraries for a hover state.
- Prefer one strong element (title, CTA, hairline) over three medium ones.

## Hard anti-patterns

- Soft radius, blur, glow, glass, pill CTAs, multi-layer shadows
- Lavender/washed body text via `text-primary-foreground` on long copy
- Marketing eyebrows, stat strips, card-in-card
- Light-mode tokens, theme toggles, `enableSystem`, i18n scaffolding
- Raising motion/density without an explicit ask

## Ship checklist

- [ ] Sharp geometry (`radius` 0)
- [ ] Crisp `text-foreground` hierarchy
- [ ] Hairline / mono date craft where appropriate
- [ ] Semantic tokens only, dark palette untouched
- [ ] Nothing added that could have been left out
- [ ] Still quiet garden — now with premium precision
