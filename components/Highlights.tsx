export default function Highlights() {
  return (
    <>
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <img src="https://picsum.photos/800/600?random=121" alt="About Image" className="w-full h-72 object-cover rounded-2xl shadow-soft reveal" />
          <div className="reveal">
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Tentang Kami</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Taman Langit Pangalengan menghadirkan pengalaman camping yang tenang dengan panorama pegunungan dan udara sejuk.</p>
            <a href="/tentang-kami" className="inline-block mt-6 px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Pelajari Lebih Lanjut</a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-center">Paket Wisata Unggulan</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <article className="rounded-3xl border border-black/5 overflow-hidden shadow-soft reveal">
              <img src="https://picsum.photos/800/500?random=141" alt="Family Package" className="h-44 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">Family Package</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Tenda keluarga + sarapan sederhana.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold">Rp 400.000</span>
                  <a href="/paket-wisata" className="px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Lihat</a>
                </div>
              </div>
            </article>
            <article className="rounded-3xl border border-black/5 overflow-hidden shadow-soft reveal">
              <img src="https://picsum.photos/800/500?random=142" alt="Adventure Package" className="h-44 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">Adventure Package</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Trekking + api unggun + minuman hangat.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold">Rp 600.000</span>
                  <a href="/paket-wisata" className="px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Lihat</a>
                </div>
              </div>
            </article>
            <article className="rounded-3xl border border-black/5 overflow-hidden shadow-soft reveal">
              <img src="https://picsum.photos/800/500?random=143" alt="Romantic Package" className="h-44 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">Romantic Package</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Tenda couple + dekorasi light string.</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold">Rp 550.000</span>
                  <a href="/paket-wisata" className="px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Lihat</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}