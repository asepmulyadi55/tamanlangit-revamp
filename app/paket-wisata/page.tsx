export default function Page() {
  return (
    <main className="pt-16">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-center">Paket Wisata</h1>
          <p className="mt-3 text-center text-slate-600 dark:text-slate-300">Pilih paket sesuai kebutuhanmu.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <article className="rounded-3xl border border-black/5 overflow-hidden shadow-soft reveal">
              <img src="https://picsum.photos/800/500?random=240" alt="Package 1" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">Package 1</h3>
                <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>Tenda + Matras</li>
                  <li>Api unggun</li>
                  <li>Minuman hangat</li>
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold">Rp 400.000</span>
                  <a href="/kontak" className="px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Pesan</a>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-black/5 overflow-hidden shadow-soft reveal">
              <img src="https://picsum.photos/800/500?random=241" alt="Package 2" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">Package 2</h3>
                <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>Tenda + Matras</li>
                  <li>Api unggun</li>
                  <li>Minuman hangat</li>
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold">Rp 450.000</span>
                  <a href="/kontak" className="px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Pesan</a>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-black/5 overflow-hidden shadow-soft reveal">
              <img src="https://picsum.photos/800/500?random=242" alt="Package 3" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">Package 3</h3>
                <ul className="mt-2 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                  <li>Tenda + Matras</li>
                  <li>Api unggun</li>
                  <li>Minuman hangat</li>
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold">Rp 500.000</span>
                  <a href="/kontak" className="px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Pesan</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}