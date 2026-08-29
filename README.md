# UTKCODE

**Websites worth remembering.**

A high-end, faceless digital studio website. Built to flex capability and convert clients — the website itself is the portfolio.

Live at **https://utkcode.me** (GitHub Pages).

---

## Stack

- **React 19** + **Vite 6** + **TypeScript**
- **Tailwind CSS v4** (design tokens via `@theme` in `src/index.css`)
- **Motion** (scroll reveals, hover, magnetic, cursor)
- Static production build — no backend, no database, no server runtime.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build to dist/
npm run preview  # serve the production build
```

## Project structure

```
src/
  main.tsx                 # React entry
  App.tsx                  # orchestrates all sections
  index.css                # Tailwind v4 @theme tokens + global styles
  types.ts                 # Project, Service, Visual types
  data/site.ts             # SINGLE SOURCE OF TRUTH — all content
  hooks/                   # usePrefersReducedMotion
  lib/cx.ts                # className helper
  components/              # Header, Hero, Work, Services, Capabilities,
                           #  Contact, Footer, Marquee, Cursor, Magnetic,
                           #  Reveal, ScrollProgress, ProjectVisual
```

## Adding a project

All projects live in `src/data/site.ts` → `projects`. Add an object:

```ts
{
  index: '04',            // editorial numbering
  title: 'Your Project',
  subtitle: 'Digital Experience',
  year: '2026',
  category: 'Business Website',
  description: 'One concise line.',
  focus: ['Interaction', 'Performance'],
  visual: {
    tone: '#hex',         // accent of the abstract visual
    tone2: '#hex',        // deep tone
    motif: 'grid',        // 'grid' | 'orbit' | 'type' — abstract composition
    label: 'EDITORIAL',
  },
  layout: 'editorial',    // 'editorial' | 'split' | 'full' — pick a composition
}
```

Each layout renders a different composition so the portfolio stays an
art-directed runway, not a grid of cards.

## Deployment (GitHub Pages)

The repo must be named **`utkcode-main`** and hosted under the
`utk-code` account so the base path `/utkcode-main/` resolves correctly.

Two supported paths:

1. **GitHub Actions** (recommended). On push to `main`, the workflow in
   `.github/workflows/deploy.yml` builds and deploys to Pages.
   Enable **Settings → Pages → Source: GitHub Actions**.

2. **Manual** — commit the `dist/` output with a Pages action, or push
   `dist/` to a `gh-pages` branch configured as the Pages source.

The Vite `base` is `/utkcode-main/`. The canonical URL stays
`https://utkcode.me` (map the custom domain in **Settings → Pages →
Custom domain**).

## Custom domain

Point `utkcode.me` at the Pages host (CNAME) and set it under Settings →
Pages. The repo-level `public/robots.txt` and `public/sitemap.xml` reference
`https://utkcode.me`.

## Quality

- `npm run build` runs `tsc --noEmit` (strict) before bundling.
- Reduced-motion is fully supported — all animation respects
  `prefers-reduced-motion`.
- Custom cursor only activates on fine pointers and hides the native cursor
  there; keyboard focus styles and semantic landmarks are preserved.
- All project visuals are abstract CSS/SVG compositions (no fake stock,
  no invented clients, no fake results) — consistent with the brief's
  "the website is the proof" rule.
