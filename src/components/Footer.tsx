import React from 'react';
import { Zap, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-primary-300" />
              <span className="text-2xl font-display font-bold text-white">
                ZenBuzz Media
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              We create digital experiences that captivate audiences and drive meaningful engagement. 
              Your trusted partner for creative digital marketing solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-primary-300" />
                <span>hello@zenbuzzmedia.in</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-primary-300" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-primary-300" />
                <span>Mumbai, Maharashtra 400001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Contact', href: '#contact' },
                { label: 'Blog', href: '#' },
                { label: 'Careers', href: '#' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'Creative Design',
                'Digital Marketing',
                'Web Development',
                'Analytics & Strategy',
                'Mobile Marketing',
                'Performance Marketing'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-primary-300 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300">Subscribe to our newsletter for the latest insights and trends.</p>
            </div>
            <div className="flex space-x-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-primary-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>&copy; {currentYear} ZenBuzz Media. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>in India</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-300 transition-colors duration-300 text-sm">
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