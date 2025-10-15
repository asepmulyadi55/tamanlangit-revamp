"use client";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

export default function MobileMenu() {
  const t = useTranslations('navbar');
  const locale = useLocale();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent hydration mismatch by ensuring consistent rendering
  if (!isClient) {
    return (
      <div id="mobileMenu" className="md:hidden hidden fixed inset-x-0 top-14 z-40">
        <div className="mx-auto max-w-7xl px-4 py-4 space-y-1 bg-[#F3EFE6] dark:bg-slate-900 border-t border-black/10 shadow-soft rounded-b-2xl" aria-label="Mobile navigation">
          <Link href="/tentang-kami" className="block py-2 hover:opacity-80">
            {t('about')}
          </Link>
          <Link href="/paket-wisata" className="block py-2 hover:opacity-80">
            {t('packages')}
          </Link>
          <Link href="/blog" className="block py-2 hover:opacity-80">
            {t('blog')}
          </Link>
          <Link href="/faq" className="block py-2 hover:opacity-80">
            {t('faq')}
          </Link>
          <Link href="/kontak" className="block py-2 hover:opacity-80">
            {t('contact')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="mobileMenu" className="md:hidden hidden fixed inset-x-0 top-14 z-40">
      <div className="mx-auto max-w-7xl px-4 py-4 space-y-1 bg-[#F3EFE6] dark:bg-slate-900 border-t border-black/10 shadow-soft rounded-b-2xl" aria-label="Mobile navigation">
        <Link href={`/${locale}/tentang-kami`} className="block py-2 hover:opacity-80">
          {t('about')}
        </Link>
        <Link href={`/${locale}/paket-wisata`} className="block py-2 hover:opacity-80">
          {t('packages')}
        </Link>
        <Link href={`/${locale}/blog`} className="block py-2 hover:opacity-80">
          {t('blog')}
        </Link>
        <Link href={`/${locale}/faq`} className="block py-2 hover:opacity-80">
          {t('faq')}
        </Link>
        <Link href={`/${locale}/kontak`} className="block py-2 hover:opacity-80">
          {t('contact')}
        </Link>
      </div>
    </div>
  );
}