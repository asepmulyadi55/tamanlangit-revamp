import "./globals.css";
import SiteScripts from "../components/SiteScripts";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Taman Langit",
  description: "Taman Langit - Tempat Wisata Terbaik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${inter.variable} ${cormorant.variable}`}>
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
