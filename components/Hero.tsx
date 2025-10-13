import React from "react";
import Image from "next/image";

export default function Hero({ children }: { children?: React.ReactNode }) {
  return (
    <section className="relative min-h-[72vh] flex items-center justify-center">
      <Image src="https://picsum.photos/1600/900?random=111" alt="Camping Hero" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/10 dark:from-black/60"></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <h1 className="font-display text-5xl md:text-7xl font-semibold text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]">Experience the Beauty of Nature</h1>
        <p className="mt-4 text-white/90">Calm, scenic, and memorable camping above the clouds.</p>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  );
}