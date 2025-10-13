import FAQList from "../../components/FAQList";

export default function Page() {
  return (
    <main className="pt-16">
      <FAQList
        items={[
          { question: "Pertanyaan 1 — Apakah bisa bawa hewan peliharaan?", answer: "Mohon maaf, saat ini belum tersedia area khusus untuk hewan peliharaan." },
          { question: "Pertanyaan 2 — Apakah bisa bawa hewan peliharaan?", answer: "Mohon maaf, saat ini belum tersedia area khusus untuk hewan peliharaan." },
          { question: "Pertanyaan 3 — Apakah bisa bawa hewan peliharaan?", answer: "Mohon maaf, saat ini belum tersedia area khusus untuk hewan peliharaan." },
          { question: "Pertanyaan 4 — Apakah bisa bawa hewan peliharaan?", answer: "Mohon maaf, saat ini belum tersedia area khusus untuk hewan peliharaan." },
          { question: "Pertanyaan 5 — Apakah bisa bawa hewan peliharaan?", answer: "Mohon maaf, saat ini belum tersedia area khusus untuk hewan peliharaan." },
        ]}
      />
    </main>
  );
}