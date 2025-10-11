"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const pref = localStorage.getItem("theme");
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = pref ? pref === "dark" : systemDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('theme');
      if (!stored) {
        const nextDark = e.matches;
        setDark(nextDark);
        document.documentElement.classList.toggle('dark', nextDark);
      }
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-black/10 dark:border-white/10 text-theme">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-theme">
        <Link href="/" className="font-semibold text-theme">Taman Langit</Link>
        <nav className="hidden md:flex items-center gap-6 text-theme">
          <Link href="/tentang-kami" className="hover:underline">Tentang Kami</Link>
          <Link href="/paket-wisata" className="hover:underline">Paket Wisata</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/kontak" className="hover:underline">Kontak</Link>
        </nav>
        <button onClick={toggleDark} aria-label="Toggle dark mode" className="rounded-xl px-3 py-2 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-theme">
          {dark ? "☾" : "☼"}
        </button>
      </div>
    </header>
  );
}