"use client";
import AboutSection from "./AboutSection";
import PackageGrid from "./PackageGrid";
import { useTranslations } from 'next-intl';
import { Package } from "../lib/content";

interface HighlightsProps {
  packages: Package[];
  locale: string;
}

export default function Highlights({ packages, locale }: HighlightsProps) {
  const t = useTranslations('highlights');
  
  // Transform package data to match PackageGrid component expectations
  const packageItems = packages.map(pkg => ({
    id: pkg.id,
    title: pkg.title,
    imageSrc: pkg.imageSrc,
    imageAlt: pkg.imageAlt,
    description: pkg.description,
    price: pkg.price,
    ctaHref: `/${locale}/kontak`,
  }));
  
  return (
    <div className="py-16 md:py-20">
      <AboutSection />
      <PackageGrid items={packageItems} />
    </div>
  );
}