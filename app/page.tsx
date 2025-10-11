import HomeSearch from "../components/HomeSearch";

export default function Home() {
  return (
    <main>
      <main className="pt-16">
        <section className="relative min-h-[72vh] flex items-center justify-center">
          <img src="https://picsum.photos/1600/900?random=111" alt="Camping Hero" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/10 dark:from-black/60"></div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">Experience the Beauty of Nature</h1>
            <p className="mt-4 text-white/90">Calm, scenic, and memorable camping above the clouds.</p>
            <div className="mt-8">
              <form
                id="searchForm"
                aria-label="Pencarian ketersediaan camping"
                className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-3 md:gap-4 items-end rounded-3xl border border-black/5 bg-white/95 dark:bg-slate-900/95 shadow-soft p-4"
              >
                {/* Check-in */}
                <div className="flex flex-col">
                  <span className="mb-1 text-xs font-medium text-slate-600 dark:text-slate-300">Check-in</span>
                  <div className="group relative flex items-center rounded-full ring-1 ring-black/10 bg-white dark:bg-slate-900 focus-within:ring-2 focus-within:ring-tlp-forest h-12 px-4">
                    <input
                      type="date"
                      id="checkIn"
                      required
                      className="w-full bg-transparent outline-none appearance-none text-sm placeholder:text-slate-400"
                    />
                    <svg className="ml-3 h-5 w-5 text-slate-400 group-focus-within:text-tlp-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M8 2v3m8-3v3M4 9h16M5 6h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1z" />
                    </svg>
                  </div>
                </div>

                {/* Check-out */}
                <div className="flex flex-col">
                  <span className="mb-1 text-xs font-medium text-slate-600 dark:text-slate-300">Check-out</span>
                  <div className="group relative flex items-center rounded-full ring-1 ring-black/10 bg-white dark:bg-slate-900 focus-within:ring-2 focus-within:ring-tlp-forest h-12 px-4">
                    <input
                      type="date"
                      id="checkOut"
                      required
                      className="w-full bg-transparent outline-none appearance-none text-sm placeholder:text-slate-400"
                    />
                    <svg className="ml-3 h-5 w-5 text-slate-400 group-focus-within:text-tlp-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M8 2v3m8-3v3M4 9h16M5 6h14a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1z" />
                    </svg>
                  </div>
                </div>

                {/* Guests */}
                <div className="flex flex-col">
                  <span className="mb-1 text-xs font-medium text-slate-600 dark:text-slate-300">Guests</span>
                  <div className="group relative flex items-center rounded-full ring-1 ring-black/10 bg-white dark:bg-slate-900 focus-within:ring-2 focus-within:ring-tlp-forest h-12 px-4">
                    <input
                      type="number"
                      id="guests"
                      min={1}
                      defaultValue={2}
                      required
                      className="w-full bg-transparent outline-none text-sm"
                    />
                    <svg className="ml-3 h-5 w-5 text-slate-400 group-focus-within:text-tlp-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                    </svg>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="rounded-full bg-tlp-forest text-white font-medium hover:opacity-90 active:opacity-80 h-12 px-6"
                >
                  Search
                </button>
              </form>
              <p id="searchError" className="mt-2 text-sm text-red-200 md:text-red-300"></p>
            </div>
          </div>
        </section>

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

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center reveal">
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Dari Blog</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Tips camping, peralatan, dan cerita perjalanan.</p>
            <a href="/blog" className="inline-block mt-6 px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Baca Blog</a>
          </div>
        </section>
      </main>
      <HomeSearch />
    </main>
  );
}
