"use client";
export default function Navbar() {
  return (
    <header id="nav" className="fixed inset-x-0 top-0 z-50 bg-[#F3EFE6]/85 dark:bg-slate-900/70 backdrop-blur transition-shadow">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-wide">Taman Langit</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/tentang-kami" className="hover:opacity-80">Tentang Kami</a>
          <a href="/paket-wisata" className="hover:opacity-80">Paket Wisata</a>
          <a href="/blog" className="hover:opacity-80">Blog</a>
          <a href="/faq" className="hover:opacity-80">FAQ</a>
          <a href="/kontak" className="hover:opacity-80">Kontak</a>
        </nav>
        {/* Mobile menu button */}
        <button id="menuBtn" className="md:hidden rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <button id="toggleTheme" className="rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">Dark</button>
      </div>
    </header>
  );
}