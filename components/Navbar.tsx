"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header id="nav" className="fixed inset-x-0 top-0 z-50 bg-[#F3EFE6]/85 dark:bg-slate-900/70 backdrop-blur transition-shadow">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">Taman Langit</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/tentang-kami" className="hover:opacity-80">Tentang Kami</Link>
          <Link href="/paket-wisata" className="hover:opacity-80">Paket Wisata</Link>
          <Link href="/blog" className="hover:opacity-80">Blog</Link>
          <Link href="/faq" className="hover:opacity-80">FAQ</Link>
          <Link href="/kontak" className="hover:opacity-80">Kontak</Link>
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