import DetailedAboutSection from "../../../components/DetailedAboutSection";
import ValuesGrid from "../../../components/ValuesGrid";
import { getTranslations } from 'next-intl/server';

interface AboutPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return (
    <main className="pt-16">
      <DetailedAboutSection
        title={t('title')}
        titleTag="h1"
        description={t('description')}
        descClassName="text-slate-700 dark:text-slate-300"
        imageSrc="/images/about us.jpg"
        imageAlt={t('title')}
        imageWidth={900}
        imageHeight={650}
        imageClassName="w-full h-80 object-cover rounded-2xl shadow-soft reveal"
        bullets={[
          t('bullets.location'),
          t('bullets.facilities'),
          t('bullets.team'),
        ]}
      />
      <ValuesGrid />
    </main>
  );
}