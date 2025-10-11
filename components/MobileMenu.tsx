"use client";
export default function MobileMenu() {
  return (
    <div id="mobileMenu" className="md:hidden hidden fixed inset-x-0 top-14 z-40">
      <div className="mx-auto max-w-7xl px-4 py-4 space-y-1 bg-[#F3EFE6] dark:bg-slate-900 border-t border-black/10 shadow-soft rounded-b-2xl">
        <a href="/tentang-kami" className="block py-2 hover:opacity-80">Tentang Kami</a>
        <a href="/paket-wisata" className="block py-2 hover:opacity-80">Paket Wisata</a>
        <a href="/blog" className="block py-2 hover:opacity-80">Blog</a>
        <a href="/faq" className="block py-2 hover:opacity-80">FAQ</a>
        <a href="/kontak" className="block py-2 hover:opacity-80">Kontak</a>
      </div>
    </div>
  );
}