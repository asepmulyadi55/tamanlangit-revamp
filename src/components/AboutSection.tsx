export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Mengapa Memilih Taman Langit?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan keajaiban alam di destinasi camping premium dengan fasilitas terlengkap dan pemandangan yang tak terlupakan
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="text-center group hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-nature-green to-forest-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12L8 10l2-2 2 2-2 2zM4.93 4.93l1.41 1.41L10 2.69l3.66 3.65 1.41-1.41L10 0 4.93 4.93z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Panorama View 360°</h3>
            <p className="text-gray-600 leading-relaxed">
              Sejauh mata memandang, Anda akan disajikan pemandangan alam perbatasan Bandung Selatan & Garut Selatan yang memukau
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="text-center group hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-mountain-blue to-nature-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2l8 0 2 4-2 4-8 0-2-4 2-4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Ketinggian 1.670 Mdpl</h3>
            <p className="text-gray-600 leading-relaxed">
              Berkemah di ketinggian yang menawan akan memberikan pengalaman yang tidak biasa dan udara segar pegunungan
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="text-center group hover-lift">
            <div className="w-16 h-16 bg-gradient-to-br from-sage-green to-forest-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">Udara Sejuk</h3>
            <p className="text-gray-600 leading-relaxed">
              Nikmati udara sejuk ditemani secangkir kopi panas, dan lupakan rutinitas Anda untuk sejenak di alam bebas
            </p>
          </div>
        </div>
        
        {/* Facilities */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">Fasilitas Umum</h3>
            <p className="text-gray-600 text-lg">Berkemah menjadi lebih mudah dan seru dengan fasilitas lengkap kami</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <svg className="w-6 h-6 text-nature-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p className="text-gray-700 font-medium">Warung</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <svg className="w-6 h-6 text-nature-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p className="text-gray-700 font-medium">Toilet</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <svg className="w-6 h-6 text-nature-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p className="text-gray-700 font-medium">Parkir</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                <svg className="w-6 h-6 text-nature-green" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p className="text-gray-700 font-medium">Instagramable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
