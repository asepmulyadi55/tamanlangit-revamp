import Image from "next/image";
import Link from "next/link";
import { PackageCardProps } from "../types/components";

export default function PackageCard({ title, imageSrc, bullets, price, ctaHref }: PackageCardProps) {
  return (
    <article className="rounded-3xl border border-black/5 overflow-hidden shadow-soft reveal">
      <Image src={imageSrc} alt={title} width={800} height={500} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-semibold text-lg">{title}</h3>
        <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-1">
          {bullets.map((b, i) => (<li key={i}>{b}</li>))}
        </ul>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold">{price}</span>
          <Link href={ctaHref} className="px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Pesan</Link>
        </div>
      </div>
    </article>
  );
}