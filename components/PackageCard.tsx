export interface PackageCardProps { title: string; imageSrc: string; bullets: string[]; price: string; ctaHref: string; }
export default function PackageCard({ title, imageSrc, bullets, price, ctaHref }: PackageCardProps) {
  return (
    <article className="rounded-3xl border border-black/5 overflow-hidden shadow-soft reveal">
      <img src={imageSrc} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-semibold text-lg">{title}</h3>
        <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-1">
          {bullets.map((b, i) => (<li key={i}>{b}</li>))}
        </ul>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold">{price}</span>
          <a href={ctaHref} className="px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Pesan</a>
        </div>
      </div>
    </article>
  );
}