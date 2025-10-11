import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-spacing border-t border-black/10 dark:border-white/10" style={{ background: "var(--footer-bg)", color: "var(--foreground)" }}>
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Taman Langit Pangalengan</h3>
          <p className="meta-text mt-2">Camping & activities in Pangalengan.</p>
        </div>
        <div>
          <h4 className="font-semibold">Navigasi</h4>
          <ul className="mt-2 space-y-2">
            <li><Link href="/tentang-kami" className="hover:underline">Tentang Kami</Link></li>
            <li><Link href="/paket-wisata" className="hover:underline">Paket Wisata</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link href="/kontak" className="hover:underline">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Kontak</h4>
          <p className="mt-2">WhatsApp: +62-812-xxx (placeholder)</p>
          <p>Email: info@tamanlangitpangalengan.com</p>
        </div>
      </div>
    </footer>
  );
}