import Section from "../../components/Section";

export default function KontakPage() {
  return (
    <Section title="Kontak" description="Hubungi kami untuk pemesanan dan informasi.">
      <form className="card-base max-w-xl">
        <div className="grid gap-4">
          <div>
            <label htmlFor="nama" className="block text-sm font-medium mb-1">Nama</label>
            <input id="nama" className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-slate-800" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input id="email" type="email" className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-slate-800" />
          </div>
          <div>
            <label htmlFor="pesan" className="block text-sm font-medium mb-1">Pesan</label>
            <textarea id="pesan" rows={4} className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-slate-800" />
          </div>
          <button className="btn-brand" type="button">Kirim</button>
        </div>
      </form>
    </Section>
  );
}