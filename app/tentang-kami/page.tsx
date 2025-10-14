import AboutSection from "../../components/AboutSection";
import ValuesGrid from "../../components/ValuesGrid";

export default function Page() {
  return (
    <main className="pt-16">
      <AboutSection
        title="Tentang Kami"
        titleTag="h1"
        description="Kami menghadirkan pengalaman camping yang nyaman, aman, dan ramah keluarga di Pangalengan. Visi kami adalah membuat setiap tamu merasakan ketenangan alam dan pulang membawa cerita baru."
        descClassName="text-slate-700 dark:text-slate-300"
        imageSrc="/images/about us.jpg"
        imageAlt="Tentang Kami"
        imageWidth={900}
        imageHeight={650}
        imageClassName="w-full h-80 object-cover rounded-2xl shadow-soft reveal"
        bullets={[
          "Lokasi strategis dengan view pegunungan",
          "Fasilitas lengkap dan bersih",
          "Tim ramah dan siap membantu",
        ]}
      />
      <ValuesGrid />
    </main>
  );
}