import React, { useState, useEffect } from 'react';
import { Menu, X, Headphones } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/podcasts', label: 'Podcasts' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zen-cream/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Headphones className={`w-8 h-8 transition-colors duration-300 ${
                isScrolled ? 'text-zen-brown' : 'text-zen-brown'
              }`} />
              <div className="absolute inset-0 rounded-full bg-zen-rose/20 animate-pulse"></div>
            </div>
            <span className={`text-2xl font-display font-bold transition-colors duration-300 ${
              isScrolled ? 'text-zen-brown' : 'text-zen-brown'
            }`}>
              ZenBuzz Media
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative transition-colors duration-300 hover:text-zen-rose group ${
                  location.pathname === item.href 
                    ? 'text-zen-rose' 
                    : isScrolled ? 'text-zen-brown' : 'text-zen-brown'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-zen-rose transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-zen-brown hover:bg-zen-light' : 'text-zen-brown hover:bg-zen-light/50'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-zen-cream/95 backdrop-blur-md rounded-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-zen-rose bg-zen-light'
                    : 'text-zen-brown hover:text-zen-rose hover:bg-zen-light'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;