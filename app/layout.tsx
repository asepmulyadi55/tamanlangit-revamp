import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taman Langit Pangalengan",
  description: "Camping-themed stays and experiences in Pangalengan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {/* Initialize theme from localStorage before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const pref = localStorage.getItem('theme'); const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; const isDark = pref ? pref === 'dark' : systemDark; document.documentElement.classList.toggle('dark', isDark); } catch(e){} })();`,
          }}
        />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
