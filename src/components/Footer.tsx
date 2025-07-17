import React from 'react';
import { Zap, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-light-cream to-cream text-dark-brown">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-primary-400" />
              <span className="text-xl sm:text-2xl font-display font-bold text-dark-brown">
                ZenBuzz Media
              </span>
            </div>
            <p className="text-dark-brown/70 mb-6 leading-relaxed max-w-md text-sm sm:text-base">
              We create digital experiences that captivate audiences and drive meaningful engagement. 
              Your trusted partner for creative digital marketing solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-dark-brown/70">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:Info@zenbuzzmedia.in" className="hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base break-all">
                  Info@zenbuzzmedia.in
                </a>
              </div>
              <div className="flex items-center space-x-3 text-dark-brown/70">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+918920898158" className="hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base">
                  +91 8920898158
                </a>
              </div>
              <div className="flex items-start space-x-3 text-dark-brown/70">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.google.com/?q=Bhamashah+Techno+Hub+302017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Bhamashah Techno Hub,302017
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-dark-brown mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Contact', href: '/contact' },
                { label: 'Podcast', href: '/content' },
                { label: 'Careers', href: 'mailto:Info@zenbuzzmedia.in?subject=Career Opportunity' }
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('mailto:') ? (
                    <a
                      href={link.href}
                      className="text-dark-brown/70 hover:text-primary-400 transition-colors duration-300 hover:underline text-sm sm:text-base block"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-dark-brown/70 hover:text-primary-400 transition-colors duration-300 hover:underline text-left text-sm sm:text-base block w-full"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-dark-brown mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'Creative Design', href: '/services#creative-design' },
                { name: 'Digital Marketing', href: '/services#digital-marketing' },
                { name: 'Web Development', href: '/services#web-development' },
                { name: 'Analytics & Strategy', href: '/services#analytics-strategy' },
                { name: 'Mobile Marketing', href: '/services#mobile-marketing' },
                { name: 'Performance Marketing', href: '/services#performance-marketing' }
              ].map((service) => (
                <li key={service.name}>
                  <button 
                    onClick={() => handleNavigation(service.href)}
                    className="text-dark-brown/70 hover:text-primary-400 transition-colors duration-300 cursor-pointer text-left text-sm sm:text-base block w-full"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-200/50 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            <div className="w-full lg:w-auto">
              <h3 className="text-base sm:text-lg font-semibold text-dark-brown mb-2">Stay Updated</h3>
              <p className="text-dark-brown/70 text-sm sm:text-base">Subscribe to our newsletter for the latest insights and trends.</p>
            </div>
            <div className="w-full lg:w-auto lg:max-w-md">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 sm:min-w-0 px-4 py-3 bg-white border border-primary-200 rounded-lg text-dark-brown placeholder-dark-brown/50 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
                <button className="bg-primary-400 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-200/50 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <div className="flex items-center space-x-2 text-dark-brown/70 text-xs sm:text-sm">
              <span>&copy; {currentYear} ZenBuzz Media. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-dark-brown/70 text-xs sm:text-sm order-last sm:order-none">
              <span>Made with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary-400" />
              <span>in India</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 order-2 sm:order-last">
              <a 
                href="/privacy-policy" 
                className="text-dark-brown/70 hover:text-primary-400 transition-colors duration-300 text-xs sm:text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Privacy Policy page is under construction. Please contact us for more information.');
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="text-dark-brown/70 hover:text-primary-400 transition-colors duration-300 text-xs sm:text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Terms of Service page is under construction. Please contact us for more information.');
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;