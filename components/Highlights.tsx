import AboutSection from "./AboutSection";
import PackageGrid from "./PackageGrid";

export default function Highlights() {
  return (
    <>
      <AboutSection
        title="Tentang Kami"
        titleTag="h2"
        description="Taman Langit Pangalengan menghadirkan pengalaman camping yang tenang dengan panorama pegunungan dan udara sejuk."
        descClassName="text-slate-600 dark:text-slate-300"
        imageSrc="/images/about us.jpg"
        imageAlt="About Image"
        imageWidth={800}
        imageHeight={600}
        imageClassName="w-full h-72 object-cover rounded-2xl shadow-soft reveal"
        ctaHref="/tentang-kami"
        ctaText="Pelajari Lebih Lanjut"
      />

      <PackageGrid
        items={[
          {
            title: "Family Package",
            imageSrc: "/images/package 1.jpg",
            bullets: ["Tenda keluarga", "Sarapan sederhana"],
            price: "Rp 400.000",
            ctaHref: "/paket-wisata",
          },
          {
            title: "Adventure Package",
            imageSrc: "/images/package 2.jpg",
            bullets: ["Trekking", "Api unggun", "Minuman hangat"],
            price: "Rp 600.000",
            ctaHref: "/paket-wisata",
          },
          {
            title: "Romantic Package",
            imageSrc: "/images/package 3.jpg",
            bullets: ["Tenda couple", "Dekorasi light string"],
            price: "Rp 550.000",
            ctaHref: "/paket-wisata",
          },
        ]}
        title="Paket Wisata Unggulan"
        subtitle={undefined}
        headingTag="h2"
        sectionClassName="py-16 md:py-20 bg-white dark:bg-slate-900"
      />
    </>
  );
}