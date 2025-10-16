"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function Hero({ children }: { children?: React.ReactNode }) {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[72vh] flex items-center justify-center" role="banner">
      <Image
        src="/images/hero banner.jpg"
        alt="Camping di Taman Langit"
        fill
        className="absolute inset-0 h-full w-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/10 dark:from-black/60"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-semibold text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">
          {t('title')}
        </h1>
        <p className="mt-4 text-white/90">{t('subtitle')}</p>
        
        {children}
      </div>
    </section>
  );
}