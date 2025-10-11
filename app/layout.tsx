import "./globals.css";
import SiteScripts from "../components/SiteScripts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Taman Langit</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F3EFE6] text-slate-900 dark:bg-slate-950 dark:text-slate-100">
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
            <button id="toggleTheme" className="rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">Dark</button>
          </div>
        </header>

        {children}

        <footer className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">
          © <span id="year"></span> Taman Langit Pangalengan. All rights reserved.
        </footer>

        <SiteScripts />
      </body>
    </html>
  );
}
