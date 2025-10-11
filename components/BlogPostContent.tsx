export default function BlogPostContent() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="font-display text-4xl md:text-5xl font-semibold">Judul Artikel Blog</h1>
        <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">12 Sept 2025</div>
        <img src="https://picsum.photos/1200/700?random=401" alt="cover" className="rounded-2xl shadow-soft mt-6" />
        <div className="prose dark:prose-invert mt-6 max-w-none">
          <p>Ini adalah contoh artikel blog tentang pengalaman camping di Taman Langit. Tulisan ini hanya dummy untuk demonstrasi layout.</p>
          <p>Kamu bisa memecah artikel menjadi beberapa subjudul, daftar poin, dan gambar pendukung lainnya.</p>
          <h2>Peralatan Wajib</h2>
          <ul>
            <li>Tenda dan matras</li>
            <li>Senter atau headlamp</li>
            <li>Jaket hangat</li>
          </ul>
          <h2>Tips</h2>
          <p>Datang lebih awal untuk memilih spot tenda terbaik, dan selalu jaga kebersihan.</p>
        </div>
      </div>
    </section>
  );
}