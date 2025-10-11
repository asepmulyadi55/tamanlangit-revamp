export default function AboutIntro() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <img src="https://picsum.photos/900/650?random=201" alt="Tentang Kami" className="w-full h-80 object-cover rounded-2xl shadow-soft reveal" />
        <div className="reveal">
          <h1 className="font-display text-4xl md:text-5xl font-semibold">Tentang Kami</h1>
          <p className="mt-4 text-slate-700 dark:text-slate-300">Kami menghadirkan pengalaman camping yang nyaman, aman, dan ramah keluarga di Pangalengan. Visi kami adalah membuat setiap tamu merasakan ketenangan alam dan pulang membawa cerita baru.</p>
          <ul className="mt-6 list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
            <li>Lokasi strategis dengan view pegunungan</li>
            <li>Fasilitas lengkap dan bersih</li>
            <li>Tim ramah dan siap membantu</li>
          </ul>
        </div>
      </div>
    </section>
  );
}