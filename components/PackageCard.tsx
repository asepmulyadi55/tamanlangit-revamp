import Image from "next/image";
import Link from "next/link";
import { PackageCardProps } from "../types/components";

export default function PackageCard({ title, imageSrc, imageAlt, description, price, ctaHref }: PackageCardProps) {
  return (
    <article className="rounded-3xl border border-black/5 overflow-hidden shadow-soft hover:-translate-y-1 hover:shadow-lg transition reveal">
      <Image src={imageSrc} alt={imageAlt ?? title} width={800} height={500} className="h-44 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold">{price}</span>
          <Link href={ctaHref} aria-label={`Detail paket ${title}`} className="px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Detail</Link>
        </div>
      </div>
    </article>
  );
}