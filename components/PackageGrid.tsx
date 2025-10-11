import PackageCard, { PackageCardProps } from "./PackageCard";
export default function PackageGrid({ items }: { items: PackageCardProps[] }) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-center">Paket Wisata</h1>
        <p className="mt-3 text-center text-slate-600 dark:text-slate-300">Pilih paket sesuai kebutuhanmu.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <PackageCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}