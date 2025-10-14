"use client";
import React from "react";
import PackageCard from "./PackageCard";
import { useTranslations } from 'next-intl';

export default function PackageGrid() {
  const t = useTranslations('highlights');

  const packages = [
    {
      title: t('packages.family.title'),
      imageSrc: "/images/package 1.jpg",
      description: t('packages.family.description'),
      price: t('packages.family.price'),
      ctaHref: "#contact",
    },
    {
      title: t('packages.adventure.title'),
      imageSrc: "/images/package 2.jpg",
      description: t('packages.adventure.description'),
      price: t('packages.adventure.price'),
      ctaHref: "#contact",
    },
    {
      title: t('packages.romantic.title'),
      imageSrc: "/images/package 3.jpg",
      description: t('packages.romantic.description'),
      price: t('packages.romantic.price'),
      ctaHref: "#contact",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-center">{t('packages.title')}</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              imageSrc={pkg.imageSrc}
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