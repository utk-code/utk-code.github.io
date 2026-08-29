# UTKCODE — Architecture

## Stack
- React 19 + Vite 6 + TypeScript (strict)
- Tailwind CSS v4 with design tokens in `@theme` (`src/index.css`)
- Motion (Framer Motion successor) for animation
- Static SPA, deployed to GitHub Pages at `/utkcode-main/`

## Design tokens (`src/index.css` @theme)
| Token | Value | Use |
|-------|-------|-----|
| `--color-ink` | `#0a0a0a` | page background |
| `--color-ink-2` | `#101010` | raised panels |
| `--color-paper` | `#f2efe6` | primary text |
| `--color-paper-dim` | `#9b978b` | secondary/muted |
| `--color-acid` | `#ebff00` | single accent (CTA, highlights) |
| `--color-line` | `rgba(242,239,230,0.13)` | hairline rules |
| `--font-display` | Syne | display/headlines |
| `--font-body` | Space Grotesk | body |
| `--font-mono` | JetBrains Mono | editorial labels/metadata |

## Section flow (App.tsx)
```
Cursor → ScrollProgress → Header
Hero → Marquee → Work → Services → Capabilities → Contact → Footer
```

## Data layer
Single source of truth: `src/data/site.ts` exports `site`, `projects`,
`services`, `capabilities`. All content edits happen there. Types live in
`src/types.ts`.

## Interaction layer
- `Reveal` — scroll-triggered fade/slide (IntersectionObserver via Motion).
- `Magnetic` — pointer-magnetic wrapper for CTAs.
- `Cursor` — custom dot cursor on fine pointers only; native cursor hidden
  via `body.has-cursor`. Mix-blend-difference for contrast.
- `ScrollProgress` — thin acid progress bar on scroll.
- All honors `prefers-reduced-motion` (via `usePrefersReducedMotion`).

## Styling conventions
- Opacity-based text tints over a hard accent for hierarchy.
- Hairlines (`border-line`) instead of shadow-based cards.
- Abstract CSS/SVG project visuals — no raster images, no stock.
- Responsive type via `clamp()`; mobile is intentionally simplified, not a
  naive stacking of desktop.
