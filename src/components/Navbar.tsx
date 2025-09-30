'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle smooth scrolling for navigation links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      closeMobileMenu();
    }
  };

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        if (window.scrollY > 100) {
          nav.classList.add('bg-white/95');
          nav.classList.remove('bg-white/90');
        } else {
          nav.classList.add('bg-white/90');
          nav.classList.remove('bg-white/95');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-nature-green to-forest-green rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12L8 10l2-2 2 2-2 2zM4.93 4.93l1.41 1.41L10 2.69l3.66 3.65 1.41-1.41L10 0 4.93 4.93z"/>
              </svg>
            </div>
            <h1 className="text-xl font-playfair font-bold text-nature-green">Taman Langit</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beranda" onClick={(e) => handleNavClick(e, '#beranda')} className="text-gray-700 hover:text-nature-green transition-colors font-medium">Beranda</a>
            <a href="#tentang" onClick={(e) => handleNavClick(e, '#tentang')} className="text-gray-700 hover:text-nature-green transition-colors font-medium">Tentang</a>
            <a href="#paket" onClick={(e) => handleNavClick(e, '#paket')} className="text-gray-700 hover:text-nature-green transition-colors font-medium">Paket Wisata</a>
            <a href="#galeri" onClick={(e) => handleNavClick(e, '#galeri')} className="text-gray-700 hover:text-nature-green transition-colors font-medium">Galeri</a>
            <a href="#kontak" onClick={(e) => handleNavClick(e, '#kontak')} className="text-gray-700 hover:text-nature-green transition-colors font-medium">Kontak</a>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Responsive Pesan Sekarang Button */}
            <button className="bg-gradient-to-r from-nature-green to-forest-green text-white text-sm px-4 py-2 sm:text-base sm:px-6 sm:py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Pesan Sekarang
            </button>
            {/* Mobile Menu Button */}
            <button onClick={toggleMobileMenu} className="md:hidden p-2">
              <svg className={`w-6 h-6 text-gray-700 ${isMobileMenuOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg className={`w-6 h-6 text-gray-700 ${isMobileMenuOpen ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-green/95 border-t border-gray-300">
            <a href="#beranda" onClick={(e) => handleNavClick(e, '#beranda')} className="block px-3 py-2 text-gray-700 hover:text-nature-green hover:bg-gray-50 rounded-md transition-colors font-medium">Beranda</a>
            <a href="#tentang" onClick={(e) => handleNavClick(e, '#tentang')} className="block px-3 py-2 text-gray-700 hover:text-nature-green hover:bg-gray-50 rounded-md transition-colors font-medium">Tentang</a>
            <a href="#paket" onClick={(e) => handleNavClick(e, '#paket')} className="block px-3 py-2 text-gray-700 hover:text-nature-green hover:bg-gray-50 rounded-md transition-colors font-medium">Paket Wisata</a>
            <a href="#galeri" onClick={(e) => handleNavClick(e, '#galeri')} className="block px-3 py-2 text-gray-700 hover:text-nature-green hover:bg-gray-50 rounded-md transition-colors font-medium">Galeri</a>
            <a href="#kontak" onClick={(e) => handleNavClick(e, '#kontak')} className="block px-3 py-2 text-gray-700 hover:text-nature-green hover:bg-gray-50 rounded-md transition-colors font-medium">Kontak</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
