import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-green-200/40 via-teal-100/40 to-emerald-200/40 pointer-events-none" />
      <Image
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop"
        alt="Camping at Taman Langit"
        width={1920}
        height={1080}
        priority
        className="w-full h-[60vh] md:h-[70vh] object-cover"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-4">
          {/* Keep white background in both themes and force dark text for contrast */}
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 md:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-w-xl text-[var(--tlp-slate)]">
            <h1 className="text-5xl md:text-6xl font-bold">Nikmati Camping di Pangalengan</h1>
            <p className="mt-3 text-base leading-relaxed">Suasana tenang, pemandangan indah, paket wisata menarik.</p>
            <div className="mt-6">
              <Link href="#search" className="btn-brand">Mulai Cari</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}