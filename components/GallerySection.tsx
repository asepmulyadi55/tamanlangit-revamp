"use client";
import React from "react";
import Image from "next/image";

export default function GallerySection() {
  const galleryImages = [
    { src: "/images/gallery 1.jpg", alt: "Galeri 1" },
    { src: "/images/gallery 2.jpg", alt: "Galeri 2" },
    { src: "/images/gallery 3.jpg", alt: "Galeri 3" },
    { src: "/images/gallery 4.jpg", alt: "Galeri 4" }
  ];

  return (
    <section id="gallery" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-center">Galeri</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={600}
              height={600}
              className="h-40 md:h-48 w-full object-cover rounded-2xl reveal"
            />
          ))}
        </div>
      </div>
    </section>
  );
}