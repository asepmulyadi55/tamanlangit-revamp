import Image from "next/image"

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Panoramic Night View with Camping Tent",
      className: "w-full h-[400px] lg:h-[500px]"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Orange Camping Tent",
      className: "w-full h-[190px] lg:h-[240px]"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Misty Forest Path",
      className: "w-full h-[190px] lg:h-[240px]"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Mountain Sunrise View",
      className: "w-full h-[190px] lg:h-[240px]"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Cozy Campfire Evening",
      className: "w-full h-[190px] lg:h-[240px]"
    }
  ];

  return (
    <section id="galeri" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Galeri Taman Langit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Saksikan keindahan alam dan momen berharga para pengunjung di destinasi camping terbaik di Pangalengan
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Left Column - Large Image */}
          <div className="w-full">
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className={`${galleryImages[0].className} object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}
              width={1000}
              height={600}
            />
          </div>
          
          {/* Right Column - Grid of Smaller Images */}
          <div className="grid grid-cols-2 gap-4 h-[400px] lg:h-[500px]">
            {/* Top Row */}
            <div className="h-full">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className={`${galleryImages[1].className} object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}
                width={1000}
                height={600}
              />
            </div>
            <div className="h-full">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className={`${galleryImages[2].className} object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}
                width={1000}
                height={600}
              />
            </div>
            
            {/* Bottom Row */}
            <div className="h-full">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className={`${galleryImages[3].className} object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}
                width={1000}
                height={600}
              />
            </div>
            <div className="h-full">
              <Image
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                className={`${galleryImages[4].className} object-cover rounded-2xl hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg`}
                width={1000}
                height={600}
              />
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-gradient-to-r from-nature-green to-forest-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Lihat Galeri Lengkap
          </button>
        </div>
      </div>
    </section>
  );
}
