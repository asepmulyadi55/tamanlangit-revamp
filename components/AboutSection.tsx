"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('highlights');
  const locale = useLocale();

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="reveal">
            <h2 className="font-display text-4xl md:text-5xl font-semibold">{t('about.title')}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{t('about.description')}</p>
            <Link href={`/${locale}/tentang-kami`} className="inline-block mt-6 px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">
              {t('about.ctaText')}
            </Link>
          </div>
          <div className="reveal">
            <Image 
              src="/images/about us.jpg" 
              alt={t('about.imageAlt')} 
              width={800} 
              height={600} 
              className="w-full h-72 object-cover rounded-2xl shadow-soft" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}