export default function Testimonials() {
  const items = [
    { name: "Andi", text: "Pengalaman camping yang menyenangkan!" },
    { name: "Siti", text: "Pemandangan indah dan layanan ramah." },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {items.map((t, i) => (
        <div key={i} className="card-base">
          <p className="italic">“{t.text}”</p>
          <p className="mt-2 font-semibold">— {t.name}</p>
        </div>
      ))}
    </div>
  );
}