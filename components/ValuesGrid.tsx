export default function ValuesGrid() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-center">Nilai Kami</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border p-6 shadow-soft reveal">
            <h3 className="font-semibold">Keamanan</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Prosedur dan standar yang jelas untuk kenyamanan tamu.</p>
          </div>
          <div className="rounded-2xl border p-6 shadow-soft reveal">
            <h3 className="font-semibold">Kebersihan</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Area selalu terjaga bersih dan rapi.</p>
          </div>
          <div className="rounded-2xl border p-6 shadow-soft reveal">
            <h3 className="font-semibold">Keaslian Alam</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Menjaga harmoni dengan alam sekitar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}