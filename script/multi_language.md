Title: Add i18n with next-intl (App Router) using STATIC locale content first (no CMS)

Goal
Enable locale-prefixed routing (`/id/*`, `/en/*`) and translate UI chrome via `next-intl`. Serve dynamic sections (FAQ, Packages, Blog) from per-locale static files under `/content/{id,en}`. Keep pixel-perfect visuals and current DOM/Tailwind exactly as-is. Wire the existing language dropdown in `Navbar.tsx` to switch locales while preserving the current path and query. No CMS integration yet.

Assumptions
- Next.js App Router + TypeScript + Tailwind are already set up
- Locales: `id` (default) and `en`
- A language dropdown already exists in `Navbar.tsx`

Implement
1) Configure locale-prefixed routing with next-intl middleware and set up a next-intl provider in `app/[locale]/layout.tsx`.
2) Create UI message files `/messages/id.json` and `/messages/en.json` containing **UI chrome only** (nav items, headings, form labels, button text). Do **not** include dynamic content.
3) Replace hardcoded UI chrome strings in pages/components with next-intl lookups (keep existing markup and Tailwind classes unchanged).
4) Create a static content layer under `/content/{id,en}`:
   - `faq.json` (array of Q/A items)
   - `packages.json` (array of packages with title, bullets, price, slug, optional cover)
   - `blog/*.md` for posts (one file per post per locale; same slug per locale; include front-matter for slug/title/date/excerpt/cover)
5) Add minimal server-side loaders that read the static files per locale with graceful fallback to `id` if a file is missing. Pages in `app/[locale]/faq`, `app/[locale]/paket-wisata`, and `app/[locale]/blog` must consume these loaders and render with the current UI structure.
6) Wire the existing language dropdown to replace only the first URL segment (`/id` ↔ `/en`) and preserve the remainder of the path and query parameters using App Router navigation. Do not alter the visual component.
7) Prepare for future CMS: keep the loader API surface stable so it can be swapped later with Strapi/Directus adapters without changing page code or message keys.

Constraints
- Do not modify DOM structure or Tailwind classes.
- Keep `next/link` and `next/image` best practices.
- Messages JSON must never contain dynamic content.

Acceptance
- `/id/*` and `/en/*` render with localized UI chrome via next-intl.
- FAQ/Packages/Blog switch language based on files in `/content/{id,en}`.
- Language dropdown switches locale while preserving current route and query.
- ESLint/types pass and visuals remain identical.
