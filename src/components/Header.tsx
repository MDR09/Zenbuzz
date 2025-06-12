import React, { useState, useEffect } from 'react';
import { Menu, X, Headphones } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#blogs', label: 'Blogs' },
    { href: '#podcasts', label: 'Podcasts' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-zen-beige-80 shadow-lg transition-all duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <img
              src="/assets/logo.jpg"
              alt="ZenBuzz Media Logo"
              className="w-24 h-12 object-contain"
            />
            {/* <span className="text-2xl font-display font-bold text-black transition-colors duration-300">
              ZenBuzz Media
            </span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative transition-colors duration-300 hover:text-zen-beige-500 group text-black"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zen-beige-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg transition-colors duration-300 text-black hover:bg-zen-brown-50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-black hover:text-zen-beige-500 hover:bg-zen-brown-50 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;