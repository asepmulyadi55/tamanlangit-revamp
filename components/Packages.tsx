import Link from "next/link";

export default function Packages() {
  const packages = [
    { name: "Camping Basic", price: "Rp 150.000", benefits: ["Tenda", "Matras", "Area Camping"] },
    { name: "Camping Plus", price: "Rp 250.000", benefits: ["Tenda", "Matras", "Makan Pagi"] },
    { name: "Family Trip", price: "Rp 500.000", benefits: ["Tenda Besar", "Matras", "Guide"] },
  ];
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
      {packages.map((p, i) => (
        <div key={i} className="card-base">
          <h3 className="text-xl font-semibold">{p.name}</h3>
          <p className="mt-2">{p.price}</p>
          <ul className="mt-3 space-y-1">
            {p.benefits.map((b, j) => (
              <li key={j} className="meta-text">• {b}</li>
            ))}
          </ul>
          <div className="mt-4">
            <Link href="/kontak" className="btn-brand">Pesan</Link>
          </div>
        </div>
      ))}
    </div>
  );
}