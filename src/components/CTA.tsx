export default function CTA() {
  const contactInfo = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      ),
      title: "Email",
      info: "info@tamanlangitpangalengan.com"
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      ),
      title: "WhatsApp",
      info: "+62 811-2131-220"
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
        </svg>
      ),
      title: "Lokasi",
      info: "Kp. Puncak Mulya, Pangalengan, Bandung"
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-gradient-to-r from-nature-green via-forest-green to-sage-green cta-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mountain-pattern opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
          Siap untuk Petualangan Anda?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Jangan tunggu lagi! Rasakan pengalaman camping yang tak terlupakan di Taman Langit Pangalengan. Book sekarang dan dapatkan harga terbaik.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <button className="bg-white text-nature-green px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Pesan Sekarang
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-nature-green transition-all duration-300">
            Hubungi Kami
          </button>
        </div>
        
        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 text-white">
          {contactInfo.map((contact) => (
            <div key={contact.id} className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                {contact.icon}
              </div>
              <h4 className="font-semibold mb-2">{contact.title}</h4>
              <p className="text-white/80">{contact.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
