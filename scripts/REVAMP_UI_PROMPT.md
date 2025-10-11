# Revamp UI Prompt — Taman Langit Pangalengan (Next.js + Tailwind, App Router)

## Goal
Revamp https://www.tamanlangitpangalengan.com into a modern, simple, camping-themed site with a calm palette. Keep each page’s section structure the same as the current site. Model the homepage search UX (check-in, check-out, guests) after https://www.tiket.com/hotel.

## Tech Constraints
- Next.js App Router
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes (dark mode via class with a toggle)
- No /src directory
- Turbopack: Yes
- Import alias customization: No (keep default)
- Blog: static Markdown first, CMS later (Strapi)
- Search/booking: UI only now, integrate later (Directus/Strapi)

## Design Direction
- Clean, minimalist, camping vibe
- Soft shadows, rounded corners, generous spacing
- Calm nature colors
  - Forest green: #2E7D32
  - Soft green: #6BBF59
  - Warm beige: #F5EBD0
  - Off-white surface: #FAFAF7
  - Slate/dark text: #1F2937
- Optional gradient: from-green-200 via-teal-100 to-emerald-200
- Dark mode: slate backgrounds, muted greens, accessible contrast

## Pages (slugs)
- /
- /tentang-kami
- /kontak
- /faq
- /paket-wisata
- /blog
- /blog/[slug]

## Homepage Sections (keep structure, refresh UI)
1. Hero (full-bleed media, gradient overlay, tagline, primary CTA)
2. Search panel like tiket.com (Check-in, Check-out, Guests, Search button)
3. About/Intro
4. Activities/Attractions (responsive cards grid)
5. Gallery (responsive grid or masonry, lightbox-ready)
6. Packages (pricing/benefits cards with CTA)
7. Testimonials (optional)
8. Footer (contacts, socials, navigation)

## Component Plan
- Navbar (sticky, translucent on scroll, dark-mode toggle)
- Hero (overlay)
- SearchBox (3 fields + submit, no backend yet)
- Activities
- Gallery
- Packages
- Testimonials (optional)
- Footer
- Section (generic wrapper for title/description)
- Blog list/detail prepared for Markdown

## Interactions and Animation
- Use Framer Motion for subtle fade or slide-in on section entry
- Hover micro-interactions on cards and buttons
- Navbar gains slight shadow or opacity on scroll
- Lazy and optimized images

## Accessibility
- Label all inputs and use ARIA where needed
- Keyboard focus styles
- Adequate color contrast in light and dark modes
- Forms usable on mobile

## Deliverables (from the generator/tool)
- Concise UI plan and component breakdown matching the pages above
- Exact labels for search: "Check-in", "Check-out", "Guests", "Search"
- Dark mode toggle behavior that persists user preference across reloads
- Blog static structure suggestion (Markdown front matter: title, date, excerpt)
- TODO notes for future Directus/Strapi integration

## Acceptance Criteria
- Calm camping visual style that matches the color direction
- Homepage search UX clearly inspired by tiket.com (layout and affordances)
- Dark mode toggle included and preference persists
- All listed pages and slugs present, sections mirror the current site’s content order
- Fully responsive on mobile, tablet, and desktop
- Accessibility basics implemented (labels, focus, contrast)

## Best Practices (Next.js App Router)
- Prefer Server Components; mark Client Components only where interactivity is required (dark-mode toggle, SearchBox)
- Use next/link for internal navigation
- Use next/image for images with assets under /public
- Set metadata in app layout; add Open Graph later
- Use Tailwind utilities; avoid heavy custom CSS
- Avoid blocking data calls on the homepage until the real backend exists

## QA Checklist
- Spacing and typography consistent; calm palette applied
- Search panel fields and labels correct and mobile-friendly; CTA clear
- Dark mode toggles, persists, and maintains contrast
- All pages and slugs exist and match current site sections
- Basic Lighthouse checks pass for Performance and Accessibility
