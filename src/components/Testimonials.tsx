export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sony Fatkhurohman",
      initial: "S",
      rating: 5,
      text: "Untuk orang daerah bandung disarankan lebih baik menginap untuk akhir pekan agar bisa melihat matahari terbit dan merasakan suasana pagi hari di ketinggian gunung.",
      bgGradient: "from-nature-green to-forest-green"
    },
    {
      id: 2,
      name: "Noer Hidayat",
      initial: "N",
      rating: 5,
      text: "Mantap, ga nyesel pagi sampai sana, apalagi yang glamping recommended. Area piknik yang sejuk dan pemandangan yang luar biasa.",
      bgGradient: "from-mountain-blue to-nature-green"
    },
    {
      id: 3,
      name: "Yulia Lestari",
      initial: "Y",
      rating: 5,
      text: "Untuk yang suka mengejar sunrise, tempat ini cocok banget! Ga perlu terlalu jauh dari Jakarta. Fasilitas lengkap dan nyaman untuk keluarga.",
      bgGradient: "from-sunset-orange to-morning-gold"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Ini Kata Mereka!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman nyata dari para pengunjung yang telah merasakan keajaiban Taman Langit Pangalengan
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.bgGradient} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
