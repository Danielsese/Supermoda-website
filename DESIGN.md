# Design

## Theme
- **Style:** Soft UI Evolution
- **Strategy:** Minimalist storefront layout with prominent high-conversion action triggers. High whitespace, single CTA focus per section.

## Colors
OKLCH palette. Every neutral is tinted toward the rose hue (350) — no literal `#fff` or `#000`. Tokens defined in `globals.css` and exposed to Tailwind via `@theme inline`.
- **Primary:** Rose `oklch(0.5 0.19 6)` (Brand anchor) / **Primary-strong:** `oklch(0.42 0.18 8)` (hover/press)
- **Secondary:** Pink `oklch(0.66 0.2 350)`
- **Accent:** Warm gold `oklch(0.74 0.14 70)` (highlights)
- **Background:** Soft rose tint `oklch(0.985 0.008 350)`
- **Foreground:** Rose-tinted charcoal `oklch(0.23 0.025 350)`
- **Card:** Tinted near-white `oklch(0.998 0.004 350)` (use `bg-card`, never `bg-white`)
- **Ink:** Tinted near-black `oklch(0.19 0.022 350)` for dark sections (use `bg-ink` / `text-on-ink`, never `zinc-950`)
- **Muted:** `oklch(0.965 0.014 350)` · **Border:** `oklch(0.915 0.018 350)` · **Destructive:** `oklch(0.55 0.2 25)`

## Typography
- **Display (headings):** Bricolage Grotesque via `next/font` (`.font-display`, tracking -0.02em) — warm, contemporary, gives identity beyond a default sans.
- **Body:** Hanken Grotesk via `next/font` (`--font-sans`).
- **Hierarchy:** High scale + weight contrast. Hero clamps up to ~5.5rem; body 16px/1.5; section headings 4xl–5xl bold.

## Spacing & Layout
- Mobile-first approach.
- 4pt/8pt grid system.
- Max-width containers for desktop readability (max-w-7xl).

## Components & Interactive Flows
- **Header Navigation:** Uses the official Supermoda logo `cropped-LOGO-SMOL-2.jpg` with `object-contain`. Animated underline on desktop links, WhatsApp CTA, and a slide-in mobile menu (`src/components/MobileMenu.tsx`: scroll-lock + Escape-to-close).
- **Benefits:** Editorial two-column layout (sticky intro + numbered 01–04 rows), intentionally NOT a 4-up icon-card grid.
- **Virtual Catalog Grid:** Clean, border-tinted cards displaying custom covers, instant PDF downloads, inline search, and pre-formatted WhatsApp order links.
- **Sizing Tables (Medidas):** High contrast supplier sizing images. Includes a custom Javascript-driven Lightbox Modal Viewer with full-screen zoom controls and a WhatsApp fit assistant link.
- **Hero Cover:** Replaces stock images with the authentic campaign banner (`portada-abril-3.jpg`).
- **Video Player:** Integration of the weekly campaign MP4 video inside a beautifully centered mobile-framed aspect ratio layout.

## Motion
- Custom easing tokens in `globals.css`: `--ease-out-quart`, `--ease-out-expo`, `--ease-out-cubic` (built-in curves are too weak).
- Reusable utility classes: `.press` (`active:scale-0.97` press feedback on buttons), `.lift` (hover translateY on cards, gated to `hover:hover` pointers — no layout-shifting scale), `.reveal` + `.reveal-1..4` (staggered hero fade-up on first paint only).
- Transitions specify exact properties (no `transition: all`); durations 150–350ms.
- Icons are SVG (lucide-react) — no emoji used as UI icons.
- Fully respects `@media (prefers-reduced-motion: reduce)`.
