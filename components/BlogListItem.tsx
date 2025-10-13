import Image from "next/image";
import Link from "next/link";

export default function BlogListItem({ href, title, date, thumbSrc }: { href: string; title: string; date: string; thumbSrc: string }) {
  return (
    <li className="rounded-2xl border p-5 shadow-soft reveal flex items-center justify-between">
      <div>
        <Link href={href} className="font-medium hover:underline">{title}</Link>
        <div className="text-sm text-slate-500 dark:text-slate-400">{date}</div>
      </div>
      <Image src={thumbSrc} alt="thumb" width={120} height={90} className="rounded-lg object-cover w-[120px] h-[90px]" />
    </li>
  );
}