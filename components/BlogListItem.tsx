export default function BlogListItem({ href, title, date, thumbSrc }: { href: string; title: string; date: string; thumbSrc: string }) {
  return (
    <li className="rounded-2xl border p-5 shadow-soft reveal flex items-center justify-between">
      <div>
        <a href={href} className="font-medium hover:underline">{title}</a>
        <div className="text-sm text-slate-500 dark:text-slate-400">{date}</div>
      </div>
      <img src={thumbSrc} alt="thumb" className="rounded-lg object-cover w-[120px] h-[90px]" />
    </li>
  );
}