import PackageGrid from "../../../components/PackageGrid";
import { getPackages } from "../../../lib/content";

interface PackagesPageProps {
  params: {
    locale: string;
  };
}

export default async function PackagesPage({ params }: PackagesPageProps) {
  const { locale } = await params;
  const packages = await getPackages(locale);
  
  // Transform package data to match PackageGrid component expectations
  const packageItems = packages.map(pkg => ({
    id: pkg.id,
    title: pkg.title,
    imageSrc: pkg.imageSrc,
    imageAlt: pkg.imageAlt,
    bullets: pkg.bullets,
    description: pkg.description, // Use description instead of bullets for PackageCard
    price: pkg.price,
    ctaHref: `/${locale}/kontak`,
  }));

  return (
    <main className="pt-16">
      <PackageGrid items={packageItems} />
    </main>
  );
}