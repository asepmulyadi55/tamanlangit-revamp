Title: Refactor pages into reusable components (preserve visual/DOM parity)

Goal
Refactor the existing Next.js App Router pages into reusable components per section/page while keeping the UI identical to current output. Keep all Tailwind classes and visual behavior the same. Use TypeScript props for simple reusability.

Project assumptions
- App Router, TS, ESLint, Tailwind (dark mode via class) already set up
- Existing pages under /app/* are rendering correctly
- There are two existing components: components/HomeSearch.tsx and components/SiteScripts.tsx (keep them)

Key constraints (do NOT violate)
1) Visual/DOM parity: The rendered HTML must look the same (same classes, spacing, fonts). Only minimal wrappers allowed when required by next/image.
2) Keep next/image and next/link best practices used in the project.
3) Client vs server:
   - UI-only/interactive parts are Client Components.
   - Static content sections are Server Components.

Tasks
A) Create shared layout components (used across pages)
- components/Navbar.tsx  (Client: dark mode button + mobile menu toggle; markup/className same as current)
- components/MobileMenu.tsx  (Client: dropdown/drawer content triggered by Navbar; reuse existing markup)
- components/Footer.tsx     (Server: static)
- components/Section.tsx    (Server: wrapper with title/desc/children; pass through className)

B) Homepage components
- components/Hero.tsx           (Server: heading, subtitle, background image overlay)
- components/SearchPanel.tsx    (Client: wire to existing HomeSearch logic; keep current DOM/classes)
- components/Highlights.tsx     (Server: small “About/Packages teaser” grid if present)
- Reuse existing components/SiteScripts.tsx (dark mode, reveal, navbar shadow)

C) Tentang Kami (/tentang-kami)
- components/AboutIntro.tsx     (Server: image + copy)
- components/ValuesGrid.tsx     (Server: 3-card value list)

D) Paket Wisata (/paket-wisata)
- components/PackageCard.tsx     (Server: card with image, title, bullets, price, CTA)
- components/PackageGrid.tsx     (Server: wraps multiple PackageCard)
- Keep props minimal:
  - PackageCardProps = { title: string; imageSrc: string; bullets: string[]; price: string; ctaHref: string; }

E) FAQ (/faq)
- components/FAQItem.tsx         (Client: <details> with summary/body if you need minor interaction; otherwise Server ok)
- components/FAQList.tsx         (Server or Client depending on implementation)

F) Kontak (/kontak)
- components/ContactInfo.tsx     (Server)
- components/ContactForm.tsx     (Client: retain current markup/validation if any)

G) Blog (/blog and /blog/[slug])
- components/BlogListItem.tsx    (Server: list row with title/date/thumb)
- components/BlogPostContent.tsx (Server: title/date/cover/prose block)

Implementation notes
- Move repeated navbar/footer/site-scripts out of page files into layout and components above.
- Replace in each page:
  - import and compose the new components so the page becomes a thin container.
  - preserve all className strings and element order from the current pages when moving into components.
- Where next/image needs a wrapper:
  - If using `fill`, wrap with a div `className="relative ..."`, keep the same height/ratio classes.
  - Otherwise use width/height props to match layout. Keep Tailwind classes on the Image.

Files to create (paths)
- components/Navbar.tsx
- components/MobileMenu.tsx
- components/Footer.tsx
- components/Section.tsx
- components/Hero.tsx
- components/SearchPanel.tsx
- components/Highlights.tsx
- components/AboutIntro.tsx
- components/ValuesGrid.tsx
- components/PackageCard.tsx
- components/PackageGrid.tsx
- components/FAQItem.tsx
- components/FAQList.tsx
- components/ContactInfo.tsx
- components/ContactForm.tsx
- components/BlogListItem.tsx
- components/BlogPostContent.tsx

Update pages to use components
- app/page.tsx: <Hero/>, <SearchPanel/>, optional <Highlights/>
- app/tentang-kami/page.tsx: <AboutIntro/>, <ValuesGrid/>
- app/paket-wisata/page.tsx: <PackageGrid> with several <PackageCard/>
- app/faq/page.tsx: <FAQList/> with multiple <FAQItem/>
- app/kontak/page.tsx: <ContactInfo/>, <ContactForm/>
- app/blog/page.tsx: map posts to <BlogListItem/>
- app/blog/[slug]/page.tsx: <BlogPostContent/>

TypeScript guidelines
- Add minimal props interfaces for each component. Example:
  - export interface PackageCardProps { title: string; imageSrc: string; bullets: string[]; price: string; ctaHref: string; }
  - const PackageCard = ({ title, imageSrc, bullets, price, ctaHref }: PackageCardProps) => (…)
- Components that rely on window/localStorage must be `"use client"`.

Acceptance criteria
- All pages compile and render the same visually after refactor.
- Navbar + mobile menu + dark mode still work.
- Search panel on Home retains validation/redirect behavior.
- No className or spacing regressions.
- ESLint and type checks pass.

Output
- Commit all new files under /components and the minimal edits to /app/* pages and layout.
- Brief README notes describing which page uses which components.
