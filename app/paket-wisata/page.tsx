import PackageGrid from "../../components/PackageGrid";

export default function Page() {
  return (
    <main className="pt-16">
      <PackageGrid
        items={[
          {
            title: "Package 1",
            imageSrc: "/images/package-1.jpg",
            bullets: ["Tenda + Matras", "Api unggun", "Minuman hangat"],
            price: "Rp 400.000",
            ctaHref: "/kontak",
          },
          {
            title: "Package 2",
            imageSrc: "/images/package-2.jpg",
            bullets: ["Tenda + Matras", "Api unggun", "Minuman hangat"],
            price: "Rp 450.000",
            ctaHref: "/kontak",
          },
          {
            title: "Package 3",
            imageSrc: "/images/package-3.jpg",
            bullets: ["Tenda + Matras", "Api unggun", "Minuman hangat"],
            price: "Rp 500.000",
            ctaHref: "/kontak",
          },
        ]}
      />
    </main>
  );
}