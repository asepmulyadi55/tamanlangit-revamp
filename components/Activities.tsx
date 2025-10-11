export default function Activities() {
  const items = [
    { title: "Sunrise Point", desc: "Nikmati sunrise yang indah." },
    { title: "Camping Ground", desc: "Area camping nyaman." },
    { title: "Trekking", desc: "Jelajahi alam sekitar." },
  ];
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {items.map((it, i) => (
        <div key={i} className="card-base hover:translate-y-1 hover:scale-[1.01] transition">
          <h3 className="font-semibold">{it.title}</h3>
          <p className="mt-2 meta-text">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}