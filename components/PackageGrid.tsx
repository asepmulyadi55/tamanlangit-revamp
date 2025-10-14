import PackageCard from "./PackageCard";
import { PackageGridProps } from "../types/components";

export default function PackageGrid({
  items,
  title = "Paket Wisata",
  subtitle = "Pilih paket sesuai kebutuhanmu.",
  headingTag = "h1",
  sectionClassName = "py-16 md:py-20",
}: PackageGridProps) {
  const HeadingTag = headingTag;
  return (
    <section className={sectionClassName}>
      <div className="mx-auto max-w-7xl px-4">
        <HeadingTag className="font-display text-4xl md:text-5xl font-semibold text-center">
          {title}
        </HeadingTag>
        {subtitle ? (
          <p className="mt-3 text-center text-slate-600 dark:text-slate-300">{subtitle}</p>
        ) : null}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <PackageCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}