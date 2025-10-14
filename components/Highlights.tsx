"use client";
import AboutSection from "./AboutSection";
import PackageGrid from "./PackageGrid";
import { useTranslations } from 'next-intl';

export default function Highlights() {
  const t = useTranslations('highlights');
  
  return (
    <div className="py-16 md:py-20">
      <AboutSection />
      <PackageGrid />
    </div>
  );
}