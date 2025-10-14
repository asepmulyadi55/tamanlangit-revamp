import PackageGrid from "../../../components/PackageGrid";
import { getPackages } from "../../../lib/content";

interface PackagesPageProps {
  params: {
    locale: string;
  };
}

export default async function PackagesPage({ params: { locale } }: PackagesPageProps) {
  const packages = await getPackages(locale);
  
  // Transform package data to match PackageGrid component expectations
  const packageItems = packages.map(pkg => ({
    title: pkg.title,
    imageSrc: pkg.imageSrc,
    bullets: pkg.bullets,
    price: pkg.price,
    ctaHref: `/${locale}/kontak`,
  }));

  return (
    <main className="pt-16">
      <PackageGrid items={packageItems} />
    </main>
  );
}