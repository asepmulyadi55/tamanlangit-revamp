import SearchPanel from "../components/SearchPanel";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <main className="pt-16">
        <Hero>
          <SearchPanel />
        </Hero>

        <Highlights />

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center reveal">
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Dari Blog</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Tips camping, peralatan, dan cerita perjalanan.</p>
            <Link href="/blog" className="inline-block mt-6 px-4 py-2 rounded-xl bg-tlp-forest text-white hover:opacity-90">Baca Blog</Link>
          </div>
        </section>
      </main>
      {/* HomeSearch is now included within SearchPanel to retain behavior */}
    </main>
  );
}
