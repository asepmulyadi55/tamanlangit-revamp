"use client";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <div id="mobileMenu" className="md:hidden hidden fixed inset-x-0 top-14 z-40">
      <div className="mx-auto max-w-7xl px-4 py-4 space-y-1 bg-[#F3EFE6] dark:bg-slate-900 border-t border-black/10 shadow-soft rounded-b-2xl">
        <Link href="/tentang-kami" className="block py-2 hover:opacity-80">Tentang Kami</Link>
        <Link href="/paket-wisata" className="block py-2 hover:opacity-80">Paket Wisata</Link>
        <Link href="/blog" className="block py-2 hover:opacity-80">Blog</Link>
        <Link href="/faq" className="block py-2 hover:opacity-80">FAQ</Link>
        <Link href="/kontak" className="block py-2 hover:opacity-80">Kontak</Link>
      </div>
    </div>
  );
}