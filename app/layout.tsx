import "./globals.css";
import SiteScripts from "../components/SiteScripts";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
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
        <Navbar />
        <MobileMenu />

        {children}

        <Footer />

        <SiteScripts />
      </body>
    </html>
  );
}
