import Image from "next/image"

export default function Activities() {
  const packages = [
    {
      id: 1,
      title: "Medium Camping",
      description: "Pengalaman mendaki dan berkemah di atas bukit dengan fasilitas lengkap dan pemandangan memukau",
      price: "IDR 550,000",
      period: "/per malam",
      badge: "Populer",
      badgeColor: "bg-white/20",
      bgGradient: "from-nature-green to-forest-green",
      maxPeople: "Max. 4 Orang",
      area: "Luas: 5m²",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Medium Camping"
    },
    {
      id: 2,
      title: "Camping Private",
      description: "Eksklusivitas di atas bukit dengan pemandangan privat dan fasilitas premium untuk pengalaman tak terlupakan",
      price: "IDR 700,000",
      period: "/per malam",
      badge: "Premium",
      badgeColor: "bg-white/20",
      bgGradient: "from-mountain-blue to-nature-green",
      maxPeople: "Max. 4 Orang",
      area: "Luas: 5m²",
      image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Private Camping"
    },
    {
      id: 3,
      title: "Sunrise Camping",
      description: "Nikmati keindahan matahari terbit di atas bukit dengan spot terbaik untuk menyaksikan golden hour",
      price: "IDR 650,000",
      period: "/per malam",
      badge: "Sunrise",
      badgeColor: "bg-white/20",
      bgGradient: "from-sunset-orange to-morning-gold",
      maxPeople: "Max. 4 Orang",
      area: "Luas: 5m²",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Sunrise Camping"
    }
  ];

  return (
    <section id="paket" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Paket Wisata Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih pengalaman camping yang sesuai dengan kebutuhan dan budget Anda. Setiap paket dirancang untuk memberikan pengalaman terbaik
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover-lift group">
              <div className={`relative h-64 bg-gradient-to-br ${pkg.bgGradient}`}>
                <Image
                  src={pkg.image} 
                  alt={pkg.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  width={1000}
                  height={600}
                />
                <div className={`absolute top-4 right-4 ${pkg.badgeColor} backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {pkg.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-nature-green">{pkg.price}</div>
                  <div className="text-gray-500">{pkg.period}</div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {pkg.maxPeople}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    {pkg.area}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-nature-green to-forest-green text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-nature-green to-forest-green text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Lihat Semua Paket
          </button>
        </div>
      </div>
    </section>
  );
}
