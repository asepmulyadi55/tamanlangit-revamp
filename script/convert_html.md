Title: Convert 7 static HTML pages to Next.js (App Router) using Next.js best practices while keeping visual parity

Goal:
Convert the provided HTML files into a Next.js project (App Router) using best practices such as next/image and next/link. The final UI must look the same visually (pixel parity or indistinguishable to users), but the DOM may change where required by Next.js. Preserve all Tailwind classes and styling intent.

Input files (one-to-one mapping):
- index.html            -> app/page.tsx
- tentang-kami.html     -> app/tentang-kami/page.tsx
- paket-wisata.html     -> app/paket-wisata/page.tsx
- faq.html              -> app/faq/page.tsx
- kontak.html           -> app/kontak/page.tsx
- blog.html             -> app/blog/page.tsx
- blog-post.html        -> app/blog/[slug]/page.tsx  (slug: "blog-post")

Project settings (must match):
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes (dark mode via class)
- No /src directory
- App Router: Yes
- Turbopack: Yes
- Import alias customization: No

Best practices to apply:
- Replace <img> with next/image. Keep the same className values and visual behavior.
  - If using Image with fill, add the minimal required parent wrapper with position: relative and the original sizing classes so the layout is unchanged.
  - Set width/height or fill appropriately. Provide sizes for responsive images. Use priority for the hero image on the homepage.
  - Configure next.config.js to allow remote images used in the HTML (picsum.photos) via images.remotePatterns.
  - If any image cannot be served by next/image due to restrictions, fall back to <img> only for that specific case and document the reason.
- Replace internal anchor links with next/link.
  - Use <Link href="/path" className="...">label</Link> so it still renders an <a> with the same classes.
  - Do not introduce extra wrappers unless strictly required.
- Fonts:
  - Prefer next/font to load Inter (body) and Cormorant Garamond (display) with swap behavior and the same fallback stack. Keep font intent identical.
  - If exact matching to Google Fonts rendering is critical on your side, it is acceptable to keep the <link> tags instead; choose one approach and apply consistently.
- Metadata:
  - Use the Metadata API in app/layout.tsx for title and description.
- Code split:
  - Move page-agnostic header and footer to app/layout.tsx or to components included by the layout to avoid duplication. Output HTML must remain visually the same.

Styling and structure requirements:
- Preserve all Tailwind utility classes from the HTML files. Do not rewrite the utility approach.
- Visual appearance must match the HTML reference: spacing, radii, shadows, colors, and typography scale should be the same to the naked eye.
- It is allowed to make minimal structural adjustments required by next/image (for example, a relative wrapper for fill), but do not change the visual layout.
- Keep the same copy, labels, and content.

Scripts and interactivity from HTML (must be preserved):
- Dark mode toggle with localStorage persistence. Keep the same behavior.
- Navbar shadow on scroll.
- IntersectionObserver reveal-on-scroll.
- Search form validation and redirect logic on homepage:
  - Redirect to /paket-wisata?checkIn=...&checkOut=...&guests=...
- Implement these inside Client Components. Keep selectors and logic equivalent, but adapt to React as needed without changing behavior.

Routing and links:
- Map the pages exactly as listed in Input files.
- Update href values for internal navigation to the new Next routes.
- Ensure the blog-post page is accessible at /blog/blog-post.

Tailwind configuration:
- Reproduce the theme tokens present in the HTML (tlp.forest #2E7D32, tlp.soft #6BBF59, tlp.beige #F5EBD0, tlp.surface #FAFAF7; soft shadow; rounded radii as used).
- Keep dark mode strategy as class on html.

Assets:
- Local images can go under /public/images if later needed.
- For remote dummy images (picsum.photos), ensure next.config.js images.remotePatterns includes
  - protocol: https
  - hostname: picsum.photos

Deliverables:
1) A Next.js project folder ready to run:
   - app/layout.tsx using Metadata API and including fonts via next/font (or keep <link> tags consistently).
   - app/page.tsx and app/<slug>/page.tsx files converted from each HTML file to JSX with only necessary JSX attribute changes (class -> className, htmlFor, etc.).
   - components (optional) for Navbar, Footer, and any small client behaviors, ensuring the rendered UI remains visually identical.
   - styles/globals.css with Tailwind directives.
   - tailwind.config.ts reproducing the color tokens and extras (shadow, radii).
   - next.config.js with images.remotePatterns for picsum.photos.
2) Client Components implementing:
   - dark mode toggle + navbar shadow + reveal-on-scroll
   - homepage search form validation + redirect

Acceptance criteria:
- Visual parity with the original HTML in all pages (same look and feel).
- Images use next/image where feasible without altering layout; hero uses priority.
- Internal navigation uses next/link; routes match the specified slugs.
- Dark mode, navbar shadow, reveal-on-scroll, and search behaviors work as before.
- Project builds and runs under Turbopack; ESLint passes.

If any conflict arises, prioritize Next.js best practices while maintaining visual parity with the original HTML.
