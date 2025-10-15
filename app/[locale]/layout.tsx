import "../globals.css";
import SiteScripts from "../../components/SiteScripts";
import Navbar from "../../components/Navbar";
import MobileMenu from "../../components/MobileMenu";
import Footer from "../../components/Footer";
import { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/apple-icon.png",
  },
};

const locales = ['id', 'en'];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`scroll-smooth ${inter.variable} ${cormorant.variable}`} data-scroll-behavior="smooth">
      <body className="bg-[#F3EFE6] text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <MobileMenu />
          {children}
          <Footer />
          <SiteScripts />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}