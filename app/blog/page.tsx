export default function Page() {
  return (
    <main className="pt-16">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-center">Blog</h1>
          <ul className="mt-10 space-y-4">
            <li className="rounded-2xl border p-5 shadow-soft reveal flex items-center justify-between">
              <div>
                <a href="/blog/blog-post" className="font-medium hover:underline">Tips Camping untuk Pemula 1</a>
                <div className="text-sm text-slate-500 dark:text-slate-400">12 Sept 2025</div>
              </div>
              <img src="https://picsum.photos/120/90?random=300" alt="thumb" className="rounded-lg object-cover w-[120px] h-[90px]" />
            </li>

            <li className="rounded-2xl border p-5 shadow-soft reveal flex items-center justify-between">
              <div>
                <a href="/blog/blog-post" className="font-medium hover:underline">Tips Camping untuk Pemula 2</a>
                <div className="text-sm text-slate-500 dark:text-slate-400">12 Sept 2025</div>
              </div>
              <img src="https://picsum.photos/120/90?random=301" alt="thumb" className="rounded-lg object-cover w-[120px] h-[90px]" />
            </li>

            <li className="rounded-2xl border p-5 shadow-soft reveal flex items-center justify-between">
              <div>
                <a href="/blog/blog-post" className="font-medium hover:underline">Tips Camping untuk Pemula 3</a>
                <div className="text-sm text-slate-500 dark:text-slate-400">12 Sept 2025</div>
              </div>
              <img src="https://picsum.photos/120/90?random=302" alt="thumb" className="rounded-lg object-cover w-[120px] h-[90px]" />
            </li>

            <li className="rounded-2xl border p-5 shadow-soft reveal flex items-center justify-between">
              <div>
                <a href="/blog/blog-post" className="font-medium hover:underline">Tips Camping untuk Pemula 4</a>
                <div className="text-sm text-slate-500 dark:text-slate-400">12 Sept 2025</div>
              </div>
              <img src="https://picsum.photos/120/90?random=303" alt="thumb" className="rounded-lg object-cover w-[120px] h-[90px]" />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}