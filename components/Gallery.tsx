import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop", w: 800, h: 600 },
    { src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop", w: 800, h: 600 },
    { src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop", w: 800, h: 600 },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img, i) => (
        <div key={i} className="overflow-hidden rounded-2xl">
          <Image src={img.src} alt="Gallery image" width={img.w} height={img.h} className="w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  );
}