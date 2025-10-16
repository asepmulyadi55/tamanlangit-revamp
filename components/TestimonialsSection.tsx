"use client";
import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Tempatnya adem dan pemandangannya keren. Anak-anak senang!",
      author: "Rina, Bandung"
    },
    {
      quote: "Api unggunnya romantis, langit malamnya luar biasa.",
      author: "Dimas, Jakarta"
    },
    {
      quote: "Fasilitas rapi, staf ramah. Pasti balik lagi.",
      author: "Vina, Cimahi"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-center">Testimoni</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <blockquote key={index} className="rounded-2xl border p-6 shadow-soft reveal">
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                — {testimonial.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}