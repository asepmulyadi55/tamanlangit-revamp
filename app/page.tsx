import Section from "../components/Section";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import Activities from "../components/Activities";
import Gallery from "../components/Gallery";
import Packages from "../components/Packages";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Section>
        <SearchBox />
      </Section>
      <Section title="Tentang Taman Langit" description="Suasana tenang, camping modern dengan pemandangan alam.">
        <p className="text-base leading-relaxed">Kami menawarkan pengalaman camping yang nyaman dengan fasilitas dan paket wisata yang menarik, cocok untuk keluarga dan komunitas.</p>
      </Section>
      <Section title="Aktivitas & Atraksi">
        <Activities />
      </Section>
      <Section title="Galeri">
        <Gallery />
      </Section>
      <Section title="Paket Wisata">
        <Packages />
      </Section>
      <Section title="Testimoni">
        <Testimonials />
      </Section>
    </div>
  );
}
