export default function Page() {
  return (
    <main className="pt-16">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-start">
          <div className="reveal">
            <h1 className="font-display text-4xl md:text-5xl font-semibold">Kontak</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Hubungi kami untuk reservasi atau informasi lebih lanjut.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>Email: info@tamanlangitpangalengan.com</li>
              <li>WhatsApp: 08xx-xxxx-xxxx</li>
              <li>Alamat: Pangalengan, Bandung</li>
            </ul>
          </div>
          <form className="reveal rounded-2xl border p-6 shadow-soft">
            <label className="block text-sm">Nama
              <input type="text" className="mt-1 w-full rounded-lg border bg-transparent p-2" placeholder="Nama Anda" />
            </label>
            <label className="block text-sm mt-4">Email
              <input type="email" className="mt-1 w-full rounded-lg border bg-transparent p-2" placeholder="email@contoh.com" />
            </label>
            <label className="block text-sm mt-4">Pesan
              <textarea className="mt-1 w-full rounded-lg border bg-transparent p-2" rows={4} placeholder="Saya ingin tanya mengenai..."></textarea>
            </label>
            <button type="button" className="mt-4 px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Kirim</button>
          </form>
        </div>
      </section>
    </main>
  );
}