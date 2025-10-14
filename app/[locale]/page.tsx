import SearchPanel from "../../components/SearchPanel";
import Hero from "../../components/Hero";
import Highlights from "../../components/Highlights";
import ActivitiesSection from "../../components/ActivitiesSection";
import GallerySection from "../../components/GallerySection";
import TestimonialsSection from "../../components/TestimonialsSection";
import ContactSection from "../../components/ContactSection";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  
  return (
    <main>
      <main className="pt-16">
        <Hero>
          <SearchPanel />
        </Hero>
        
        <Highlights />
        
        <ActivitiesSection />
        
        <GallerySection />
        
        <TestimonialsSection />

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center reveal">
            <h2 className="font-display text-4xl md:text-5xl font-semibold">{t('blog.title')}</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{t('blog.description')}</p>
            <Link href={`/${locale}/blog`} className="inline-block mt-6 px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">
              {t('blog.readMore')}
            </Link>
          </div>
        </section>
        
        <ContactSection />
      </main>
    </main>
  );
}