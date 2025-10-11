## Implementation Handoff (for the generator)

Purpose: concrete specs to match the provided UI mockup and Next.js + Tailwind setup.

### Design tokens (colors)
- tlp-forest: #2E7D32
- tlp-soft: #6BBF59
- tlp-beige: #F5EBD0
- tlp-surface: #FAFAF7
- tlp-slate: #1F2937
- dark-surface: #0F172A
- dark-text: #E5E7EB

Tailwind usage examples
- background: bg-[var(--tlp-surface)] dark:bg-slate-950
- text: text-[var(--tlp-slate)] dark:text-slate-100
- brand button: bg-[var(--tlp-forest)] text-white
- optional gradient: bg-gradient-to-b from-green-200 via-teal-100 to-emerald-200

### Typography scale
- Hero title: text-5xl md:text-6xl font-bold
- H1: text-4xl md:text-5xl font-semibold
- H2: text-3xl font-semibold
- Body: text-base leading-relaxed
- Meta text: text-sm text-slate-500 dark:text-slate-400

### Radius and shadow
- Border radius: rounded-xl, rounded-2xl
- Shadow: shadow-[0_8px_24px_rgba(0,0,0,0.06)] or Tailwind shadow-lg

### Spacing rules
- Section vertical spacing: py-16 md:py-20
- Grid gutter: gap-6 md:gap-8
- Card padding: p-4 md:p-6

### Core components (must exist)
- Navbar (sticky, translucent on scroll, dark-mode toggle)
- Hero (full-bleed image with gradient overlay)
- SearchBox (Check-in, Check-out, Guests, Search button; no backend)
- Activities (cards grid)
- Gallery (responsive grid or masonry, lightbox-ready)
- Packages (pricing/benefits cards with CTA)
- Testimonials (optional)
- Footer
- Section wrapper (title, description, consistent spacing)
- Blog list and detail (Markdown first)

### Search behavior (tiket.com style)
- Fields: date check-in, date check-out, guests (min 1)
- Validation: check-out >= check-in
- Submit: redirect to /paket-wisata?checkIn=...&checkOut=...&guests=...
- Layout: mobile stacked 1 column; desktop 3 inputs + 1 button

### Dark mode behavior
- Strategy: Tailwind "class" on <html>
- Persist user preference in localStorage
- Brand button in dark mode must keep readable contrast (white text on tlp-forest)

### Images and assets
- Store under /public/images
- Hero: at least 1600x900 (prefer 1920x1080), WebP or AVIF, optimized
- Gallery: mixed ratios (1:1, 4:3, 3:2), lazy loading on
- Use next/image where possible

### Interactions and animations
- Section entry: subtle fade + small slide (duration 0.35–0.5s)
- Hover: translate-y-1 and slight scale on cards/buttons
- Navbar on scroll: add shadow and slight background opacity

### Quick QA before delivery
- Search panel responsive and clear on mobile
- Contrast for brand button OK in light and dark
- Keyboard navigation and visible focus states
- LCP optimized: hero image prioritized on homepage
- All slugs exist and section order matches current site
