import SearchPanel from "../components/SearchPanel";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import PackageGrid from "../components/PackageGrid";

export default function Home() {
  return (
    <main>
      <main className="pt-16">
        <Hero>
          <SearchPanel />
        </Hero>

        <Highlights />

        <PackageGrid
          items={[
            {
              title: "Package 1",
              imageSrc: "https://picsum.photos/800/500?random=240",
              bullets: ["Tenda + Matras", "Api unggun", "Minuman hangat"],
              price: "Rp 400.000",
              ctaHref: "/kontak",
            },
            {
              title: "Package 2",
              imageSrc: "https://picsum.photos/800/500?random=241",
              bullets: ["Tenda + Matras", "Api unggun", "Minuman hangat"],
              price: "Rp 450.000",
              ctaHref: "/kontak",
            },
            {
              title: "Package 3",
              imageSrc: "https://picsum.photos/800/500?random=242",
              bullets: ["Tenda + Matras", "Api unggun", "Minuman hangat"],
              price: "Rp 500.000",
              ctaHref: "/kontak",
            },
          ]}
        />
      </main>
      {/* HomeSearch is now included within SearchPanel to retain behavior */}
    </main>
  );
}
