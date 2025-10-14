Title: Add i18n with next-intl (App Router) using STATIC locale content first (no CMS)

Goal
Enable locale-prefixed routing (`/id/*`, `/en/*`) and translate UI chrome via `next-intl`. Serve dynamic sections (FAQ, Packages, Blog) from simple per-locale static files for now. Keep pixel-perfect visuals and DOM/Tailwind exactly as-is. The existing language dropdown in `Navbar.tsx` must switch locales while preserving the current path and query.

Key Requirements
- Locales: `id` (default), `en`; App Router only.
- Do NOT change styling, spacing, or element structure (except what `next-intl` strictly needs).
- UI chrome (nav labels, headings, form labels, button text) comes from `messages/{locale}.json`.
- Dynamic content (FAQ/Packages/Blog) comes from static files under `content/{id,en}/…` (not from messages).
- Language switch must replace only the first URL segment and keep the rest of the path + query.

Implement
1) Routing & Provider
   - Use `next-intl` with locale-prefixed routing (middleware) and a provider in `app/[locale]/layout.tsx`.
   - `next.config.js`: ensure `i18n.locales = ['id','en']`, `defaultLocale = 'id'`, `localeDetection = true`.

2) Messages (UI chrome)
   - Create `/messages/id.json` and `/messages/en.json` containing ONLY UI strings already present visually (nav items, section titles, form labels, button text). Keys should be short, stable, and grouped (e.g., `nav.about`, `search.checkin`, `hero.title`).
   - Replace hardcoded UI strings in pages/components with `next-intl` lookups, without altering the markup or classes.

3) Static content (temporary data source)
   - Create simple locale folders:
     - `content/id/faq.json`, `content/en/faq.json`
     - `content/id/packages.json`, `content/en/packages.json`
     - `content/id/blog/*.md`, `content/en/blog/*.md` (same slug per locale)
   - Add tiny server-side loaders in `lib/` to read those files by `params.locale`, with graceful fallback to `id` if a file is missing.
   - Pages under `app/[locale]/faq`, `app/[locale]/paket-wisata`, `app/[locale]/blog` must read data through those loaders; render using the existing HTML structure and Tailwind classes.

4) Navbar language dropdown
   - Wire the existing dropdown to replace the first URL segment (`/id/...` ↔ `/en/...`) and preserve the rest (path + query) using App Router navigation. Do not change the visual component.

Constraints
- No visual regressions; do not add wrappers or change element order.
- Keep `next/link` and `next/image` best practices.
- Messages JSON must NEVER include dynamic content (FAQ answers, blog text, package descriptions); those live in `content/{locale}/…`.

Deliverable
- Locale-prefixed site where:
  - UI chrome switches between `id`/`en` via `next-intl`.
  - FAQ/Packages/Blog switch via static per-locale files.
  - The language dropdown preserves the current route and query.
  - ESLint/types pass; layout and styling remain identical.

Note (future)
- This structure must be ready to swap the static loaders with Strapi/Directus adapters later, without touching page/components or message keys.
