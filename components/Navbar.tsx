"use client";
import Link from "next/link";
import Image from "next/image"
import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const t = useTranslations('navbar');
  const locale = useLocale();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent hydration mismatch by ensuring consistent rendering
  if (!isClient) {
    return (
      <header id="nav" className="fixed inset-x-0 top-0 z-50 bg-[#F3EFE6]/85 dark:bg-slate-900/70 backdrop-blur transition-shadow">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-wide">
            <Image
              src="/logo landscape.png"
              alt="Taman Langit Pangalengan"
              width={100}
              height={50}
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/tentang-kami" className="hover:opacity-80">
              {t('about')}
            </Link>
            <Link href="/paket-wisata" className="hover:opacity-80">
              {t('packages')}
            </Link>
            <Link href="/blog" className="hover:opacity-80">
              {t('blog')}
            </Link>
            <Link href="/faq" className="hover:opacity-80">
              {t('faq')}
            </Link>
            <Link href="/kontak" className="hover:opacity-80">
              {t('contact')}
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center gap-2">
            <button id="menuBtn" className="md:hidden rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
            <select id="langSelect" className="rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
              <option value="id">ID</option>
              <option value="en">EN</option>
            </select>
            <button
              id="toggleTheme"
              className="rounded-xl border px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {/* Sun icon (shown in light mode) */}
              <svg className="h-5 w-5 block dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
                <path strokeWidth="1.8" strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
              {/* Moon icon (shown in dark mode) */}
              <svg className="h-5 w-5 hidden dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header id="nav" className="fixed inset-x-0 top-0 z-50 bg-[#F3EFE6]/85 dark:bg-slate-900/70 backdrop-blur transition-shadow">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-semibold tracking-wide">
          <Image
            src="/logo landscape.png"
            alt="Taman Langit Pangalengan"
            width={100}
            height={50}
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href={`/${locale}/tentang-kami`} className="hover:opacity-80">
            {t('about')}
          </Link>
          <Link href={`/${locale}/paket-wisata`} className="hover:opacity-80">
            {t('packages')}
          </Link>
          <Link href={`/${locale}/blog`} className="hover:opacity-80">
            {t('blog')}
          </Link>
          <Link href={`/${locale}/faq`} className="hover:opacity-80">
            {t('faq')}
          </Link>
          <Link href={`/${locale}/kontak`} className="hover:opacity-80">
            {t('contact')}
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <div className="flex items-center gap-2">
          <button id="menuBtn" className="md:hidden rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <select id="langSelect" className="rounded-xl border px-3 py-1.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
            <option value="id">ID</option>
            <option value="en">EN</option>
          </select>
          <button
            id="toggleTheme"
            className="rounded-xl border px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {/* Sun icon (shown in light mode) */}
            <svg className="h-5 w-5 block dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="4" strokeWidth="1.8" />
              <path strokeWidth="1.8" strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            {/* Moon icon (shown in dark mode) */}
            <svg className="h-5 w-5 hidden dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}