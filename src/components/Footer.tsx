import React from 'react';
import { Zap, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-light-cream to-cream text-dark-brown">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-display font-bold text-dark-brown">
                ZenBuzz Media
              </span>
            </div>
            <p className="text-dark-brown/70 mb-6 leading-relaxed max-w-md">
              We create digital experiences that captivate audiences and drive meaningful engagement. 
              Your trusted partner for creative digital marketing solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-dark-brown/70">
                <Mail className="h-5 w-5 text-primary-400" />
                <a href="mailto:Info@zenbuzzmedia.in" className="hover:text-primary-400 transition-colors duration-300">
                  Info@zenbuzzmedia.in
                </a>
              </div>
              <div className="flex items-center space-x-3 text-dark-brown/70">
                <Phone className="h-5 w-5 text-primary-400" />
                <a href="tel:+917850859204" className="hover:text-primary-400 transition-colors duration-300">
                  +91 7850859204
                </a>
              </div>
              <div className="flex items-center space-x-3 text-dark-brown/70">
                <MapPin className="h-5 w-5 text-primary-400" />
                <a 
                  href="https://maps.google.com/?q=Bhamashah+Techno+Hub+302017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  Bhamashah Techno Hub,302017
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-dark-brown mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Contact', href: '/contact' },
                { label: 'Content', href: '/content' },
                { label: 'Careers', href: 'mailto:Info@zenbuzzmedia.in?subject=Career Opportunity' }
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('mailto:') ? (
                    <a
                      href={link.href}
                      className="text-dark-brown/70 hover:text-primary-400 transition-colors duration-300 hover:underline"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-dark-brown/70 hover:text-primary-400 transition-colors duration-300 hover:underline"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-dark-brown mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Creative Design', href: '/services#creative-design' },
                { name: 'Digital Marketing', href: '/services#digital-marketing' },
                { name: 'Web Development', href: '/services#web-development' },
                { name: 'Analytics & Strategy', href: '/services#analytics-strategy' },
                { name: 'Mobile Marketing', href: '/services#mobile-marketing' },
                { name: 'Performance Marketing', href: '/services#performance-marketing' }
              ].map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-dark-brown/70 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-primary-200/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold text-dark-brown mb-2">Stay Updated</h3>
              <p className="text-dark-brown/70">Subscribe to our newsletter for the latest insights and trends.</p>
            </div>
            <div className="flex space-x-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-white border border-primary-200 rounded-lg text-dark-brown placeholder-dark-brown/50 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-primary-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-200/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-dark-brown/70">
              <span>&copy; {currentYear} ZenBuzz Media. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-dark-brown/70">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-primary-400" />
              <span>in India</span>
            </div>
            <div className="flex space-x-6">
              <a 
                href="/privacy-policy" 
                className="text-dark-brown/70 hover:text-primary-400 transition-colors duration-300 text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Privacy Policy page is under construction. Please contact us for more information.');
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service" 
                className="text-dark-brown/70 hover:text-primary-400 transition-colors duration-300 text-sm"
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