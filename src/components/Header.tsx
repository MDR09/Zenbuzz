import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Content', href: '/content' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <img 
                src="/ZENBUZZ logo.png" 
                alt="ZenBuzz Media Logo" 
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-display font-bold text-dark-brown group-hover:text-primary-400 transition-colors duration-300">
              ZenBuzz Media
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className={`font-medium transition-colors duration-300 relative group ${
                  location.pathname === item.href 
                    ? 'text-primary-400' 
                    : 'text-dark-brown hover:text-primary-400'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-400 transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            <button 
              onClick={() => handleNavigation('/contact')}
              className="bg-primary-400 text-white px-6 py-2 rounded-full hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-dark-brown" />
            ) : (
              <Menu className="h-6 w-6 text-dark-brown" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className={`block w-full text-left font-medium transition-colors duration-300 py-2 ${
                  location.pathname === item.href 
                    ? 'text-primary-400' 
                    : 'text-dark-brown hover:text-primary-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavigation('/contact')}
              className="block w-full bg-primary-400 text-white px-6 py-3 rounded-full hover:bg-primary-500 transition-all duration-300 mt-4 text-center"
            >
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;