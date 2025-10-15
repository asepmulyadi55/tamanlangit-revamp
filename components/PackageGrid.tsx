"use client";
import React from "react";
import PackageCard from "./PackageCard";
import { useTranslations } from 'next-intl';
import { PackageGridProps } from "../types/components";

export default function PackageGrid({ items, title, subtitle, headingTag = "h2", sectionClassName }: PackageGridProps) {
  const t = useTranslations('highlights');

  // Use provided title or fallback to translation
  const displayTitle = title || t('packages.title');

  return (
    <section className={sectionClassName || "py-16 md:py-20 bg-white dark:bg-slate-900"}>
      <div className="mx-auto max-w-7xl px-4">
        {headingTag === "h1" ? (
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-center">{displayTitle}</h1>
        ) : (
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-center">{displayTitle}</h2>
        )}
        {subtitle && (
          <p className="text-center text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((pkg, index) => (
            <PackageCard
              key={pkg.id || index}
              title={pkg.title}
              imageSrc={pkg.imageSrc}
              imageAlt={pkg.imageAlt}
              description={pkg.description}
              price={pkg.price}
              ctaHref={pkg.ctaHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}