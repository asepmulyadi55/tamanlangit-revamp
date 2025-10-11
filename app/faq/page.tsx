import Section from "../../components/Section";

export default function FAQPage() {
  const faqs = [
    { q: "Bagaimana cara memesan?", a: "Hubungi kami via WhatsApp atau formulir kontak." },
    { q: "Apakah tersedia paket keluarga?", a: "Ya, kami menyediakan paket Family Trip." },
  ];
  return (
    <Section title="FAQ" description="Pertanyaan yang sering diajukan.">
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="card-base">
            <h3 className="font-semibold">{f.q}</h3>
            <p className="mt-1">{f.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}