import React from 'react';
import { Headphones, Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Podcast Production', href: '/services' },
      { name: 'Video Content', href: '/services' },
      { name: 'Social Media Management', href: '/services' },
      { name: 'Digital Marketing', href: '/services' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Careers', href: '/contact' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Blog', href: '/blogs' },
      { name: 'Podcasts', href: '/podcasts' },
      { name: 'Case Studies', href: '#' },
      { name: 'Resources', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-zen-brown text-zen-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Headphones className="w-8 h-8 text-zen-rose" />
                <div className="absolute inset-0 rounded-full bg-zen-rose/20 animate-pulse"></div>
              </div>
              <span className="text-2xl font-display font-bold text-zen-cream">
                ZenBuzz Media
              </span>
            </Link>
            
            <p className="text-zen-cream/80 mb-6 leading-relaxed">
              Creating captivating digital experiences through innovative storytelling, 
              podcast production, and social media mastery.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zen-cream/80">
                <Mail className="w-4 h-4 text-zen-rose" />
                <span>hello@zenbuzzmedia.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zen-cream/80">
                <Phone className="w-4 h-4 text-zen-rose" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-zen-cream/80">
                <MapPin className="w-4 h-4 text-zen-rose" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-display font-semibold text-zen-cream mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zen-cream/80 hover:text-zen-rose transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-display font-semibold text-zen-cream mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zen-cream/80 hover:text-zen-rose transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-display font-semibold text-zen-cream mb-6">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zen-cream/80 hover:text-zen-rose transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-zen-cream mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-zen-brown/50 hover:bg-zen-gradient rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-zen-cream/80" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zen-brown/50 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-zen-cream/70 text-sm mb-4 md:mb-0">
              © {currentYear} ZenBuzz Media. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-zen-cream/70 hover:text-zen-cream transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-zen-cream/70 hover:text-zen-cream transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-zen-cream/70 hover:text-zen-cream transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;