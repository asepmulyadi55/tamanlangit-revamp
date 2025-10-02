'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { directusService, NavigationItem } from '@/lib/directus';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch navigation data from Directus
  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        setIsLoading(true);
        const items = await directusService.getNavigationItems();
        setNavigationItems(items);
        setError(null);
      } catch (err) {
        console.error('Error fetching navigation:', err);
        setError('Failed to load navigation');
        // Fallback to default navigation items
        setNavigationItems([
          { id: 1, status: 'published', sort: null, user_created: '', date_created: '', user_updated: null, date_updated: null, title: 'Beranda', url: '#beranda', url_status: true },
          { id: 2, status: 'published', sort: null, user_created: '', date_created: '', user_updated: null, date_updated: null, title: 'Tentang', url: '#tentang', url_status: true },
          { id: 3, status: 'published', sort: null, user_created: '', date_created: '', user_updated: null, date_updated: null, title: 'Paket Wisata', url: '#paket', url_status: true },
          { id: 4, status: 'published', sort: null, user_created: '', date_created: '', user_updated: null, date_updated: null, title: 'Galeri', url: '#galeri', url_status: true },
          { id: 5, status: 'published', sort: null, user_created: '', date_created: '', user_updated: null, date_updated: null, title: 'Kontak', url: '#kontak', url_status: true },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNavigation();
  }, []);

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

  // Render navigation links based on url_status
  const renderNavLink = (item: NavigationItem) => {
    const linkClasses = "text-gray-700 hover:text-nature-green transition-colors font-medium";
    
    if (item.url_status) {
      // For anchor links (internal navigation)
      return (
        <a 
          href={item.url} 
          onClick={(e) => handleNavClick(e, item.url)} 
          className={linkClasses}
          aria-label={`Navigate to ${item.title}`}
        >
          {item.title}
        </a>
      );
    } else {
      // For external links or page navigation
      return (
        <Link 
          href={item.url} 
          className={linkClasses}
          aria-label={`Navigate to ${item.title}`}
        >
          {item.title}
        </Link>
      );
    }
  };

  // Render mobile navigation links based on url_status
  const renderMobileNavLink = (item: NavigationItem) => {
    const linkClasses = "block px-3 py-2 text-gray-700 hover:text-nature-green hover:bg-gray-50 rounded-md transition-colors font-medium";
    
    if (item.url_status) {
      // For anchor links (internal navigation)
      return (
        <a 
          href={item.url} 
          onClick={(e) => handleNavClick(e, item.url)} 
          className={linkClasses}
          aria-label={`Navigate to ${item.title}`}
        >
          {item.title}
        </a>
      );
    } else {
      // For external links or page navigation
      return (
        <Link 
          href={item.url} 
          className={linkClasses}
          onClick={closeMobileMenu}
          aria-label={`Navigate to ${item.title}`}
        >
          {item.title}
        </Link>
      );
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Taman Langit"
              width={100}
              height={70}
              priority
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-nature-green"></div>
                <span className="text-gray-500">Loading...</span>
              </div>
            ) : (
              navigationItems.map((item) => (
                <div key={item.id}>
                  {renderNavLink(item)}
                </div>
              ))
            )}
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Responsive Pesan Sekarang Button */}
            <button 
              className="bg-gradient-to-r from-nature-green to-forest-green text-white text-sm px-4 py-2 sm:text-base sm:px-6 sm:py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              aria-label="Pesan Sekarang"
            >
              Pesan Sekarang
            </button>
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu} 
              className="md:hidden p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
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
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-300">
            {isLoading ? (
              <div className="flex items-center space-x-2 px-3 py-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-nature-green"></div>
                <span className="text-gray-500">Loading...</span>
              </div>
            ) : (
              navigationItems.map((item) => (
                <div key={item.id}>
                  {renderMobileNavLink(item)}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
