# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (note: `vite` is aliased via `pnpm.overrides` to `rolldown-vite`).

```bash
pnpm dev       # Vite dev server (http://localhost:5173) with HMR
pnpm build     # Type-check (tsc -b) then Vite production build — both must pass
pnpm preview   # Serve the production build
pnpm lint      # ESLint over the repo (flat config, type-aware not enabled by default)
```

There is no test runner configured in this project.

## Architecture

This is a single-user, single-page **bento-grid portfolio** built with React 19 + Vite + Tailwind v4. The app is fully data-driven: the entire UI is rendered from one content object.

### Data flow: `appContent.ts` → `App.tsx` → `CardRenderer`

- **[src/data/appContent.ts](src/data/appContent.ts)** is the single source of truth. It exports `usersContent` (keyed by user id), `defaultUserId`, and the TypeScript types (`AppContent`, `CardSection`, `LinkCardItem`, `YoutubeEmbedCardItem`, `AppCardItem`, `ProfileContent`, etc.). Adding/removing cards or sections is done here, not by editing JSX.
- **[src/App.tsx](src/App.tsx)** picks one user's content and walks `profile` + `sections[].rows[][]`. The outer grid is a two-column layout on `xl+` (`500px | 1fr`) with a sticky profile column; each section is a `<TextSeparator>` heading followed by one `<CardsContainer>` (flex-wrap row) per row.
- **[src/components/cards/CardRenderer.tsx](src/components/cards/CardRenderer.tsx)** is the dispatcher. It resolves two indirections:
  1. `card.icon` / `card.actionIcon` → JSX via the `iconFactory` record (custom brand icons in [src/components/icons/](src/components/icons/), generic ones from `lucide-react`). New icon keys must be added to both `CardIconKey` in `appContent.ts` and `iconFactory` here.
  2. `card.rightContent` → `buildRightContent()` produces the right-side media (currently only `type: "github-calendar"` via `react-github-calendar`).
- A `LinkCardItem` renders via `SocialGalleryCard` when `socialStyle` is set; otherwise it falls back to a lightweight `BaseFallbackCard` defined inline in `CardRenderer`. `YoutubeEmbedCardItem` renders via `YoutubeEmbedCard`. Both paths share the same entry/hover/tap motion recipe driven by `entryDelay` and `useReducedMotion`.

### The card primitive

- **[src/components/cards/base/SocialGalleryCard.tsx](src/components/cards/base/SocialGalleryCard.tsx)** is the composed primitive: `CardInfo` (icon + text + action button) on the left, and either `rightContent`, `SingleImage`, or `ImageGrid` on the right. `singleImageMode` or `validImages.length === 1` forces the single-image path.
- **[src/components/cards/base/SocialGalleryCard.variants.ts](src/components/cards/base/SocialGalleryCard.variants.ts)** owns all visual variants via `cva`: `cardVariants` (size + hover), `imageVariants`, `buttonVariants` (brand colors keyed by `platform`), `gridVariants`, plus the `maxImagesByLayout` lookup. Prefer adding a new `platform`/`layout` variant here over one-off `className` overrides.
- **[src/constants/socialMediaPresets.tsx](src/constants/socialMediaPresets.tsx)** exposes `socialCardPresets` — named bundles of `SocialGalleryCardProps` partials (e.g. `twitch`, `portfolio`). A card opts in via `socialStyle.preset`; `CardRenderer` merges preset values with per-card overrides using `cn()` (card-level overrides win).

### Styling system

- Tailwind v4 via `@tailwindcss/vite`; there is **no `tailwind.config.js`**. Design tokens live entirely in [src/index.css](src/index.css): CSS variables under `:root`/`.dark` (OKLCH color space), then re-exposed to Tailwind through `@theme inline`. Change colors/radii/fonts there, not in a config file.
- Custom typography utilities (`text-title`, `text-body`, `text-small`, `text-caption`) are defined in an `@layer utilities` block in the same file — use these instead of raw `text-{size}` classes for consistency.
- Fonts: `Linik Sans` (self-hosted `@font-face` from `public/fonts/linik-sans/`, referenced with absolute `/fonts/...` URLs) with `Figtree Variable` as fallback via `@fontsource-variable/figtree`.
- Path alias `@/*` → `src/*` (configured in both `tsconfig.app.json` and `vite.config.ts` — update both if changed).

### UI component library

[src/components/ui/](src/components/ui/) is shadcn/ui output (`components.json`: style `base-nova`, base color `zinc`, icon lib `lucide`). Add new primitives with the shadcn CLI rather than hand-authoring — they will land here and import `@/lib/utils`'s `cn` helper. Note the library is **Base UI (`@base-ui/react`) + Radix** hybrid, not pure Radix.

### Animation

All card and profile motion goes through `framer-motion` + `useReducedMotion()`. When adding new animated components, gate every `initial`/`animate`/`whileHover`/`whileTap` object behind `!prefersReducedMotion` (see `CardRenderer` / `SocialGalleryCard` for the canonical pattern) and include `motion-reduce:transition-none` on CSS transitions. This is a hard accessibility requirement for this project.

### Adding a new card

1. Add the entry to the appropriate `rows[]` in [src/data/appContent.ts](src/data/appContent.ts) with `type: "link"` and an `icon` key.
2. If the icon is new: add the SVG component to [src/components/icons/](src/components/icons/), extend `CardIconKey`, and register it in `iconFactory` in [CardRenderer.tsx](src/components/cards/CardRenderer.tsx).
3. For brand colors, prefer adding a `platform` to `buttonVariants` in `SocialGalleryCard.variants.ts`; reach for `socialCardPresets` only when multiple prop defaults need to ship together.
