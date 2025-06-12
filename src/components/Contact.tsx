import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@zenbuzzmedia.com',
      action: 'mailto:hello@zenbuzzmedia.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Jaipur, Rajasthan, India',
      action: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-zen-brown-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 border border-zen-beige-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-zen-beige-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Let's Create Together
            </h2>
            <p className="text-xl text-zen-beige-200 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Get in touch and let's start a conversation about your next project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-3xl font-display font-bold text-zen-beige-300 mb-8">
                Get In Touch
              </h3>

              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="block group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4 p-6 bg-zen-brown-800/50 rounded-2xl hover:bg-zen-brown-700/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                    <div className="w-14 h-14 bg-zen-gradient rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-zen-beige-300 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-zen-beige-200">
                        {info.details}
                      </p>
                    </div>
                  </div>
                </a>
              ))}

              {/* Additional Info */}
              <div className="bg-zen-brown-800/30 rounded-2xl p-8 mt-12">
                <h4 className="text-2xl font-display font-bold text-zen-beige-300 mb-4">
                  Why Choose ZenBuzz Media?
                </h4>
                <ul className="space-y-3 text-zen-beige-200">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-zen-beige-400 rounded-full"></div>
                    <span>Award-winning creative team</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-zen-beige-400 rounded-full"></div>
                    <span>5+ years of industry experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-zen-beige-400 rounded-full"></div>
                    <span>500+ successful projects delivered</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-zen-beige-400 rounded-full"></div>
                    <span>24/7 dedicated support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 text-zen-brown-800">
              <div className="flex items-center space-x-3 mb-8">
                <MessageSquare className="w-8 h-8 text-zen-brown-700" />
                <h3 className="text-3xl font-display font-bold">
                  Send Us a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zen-brown-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-zen-beige-50 border border-zen-beige-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zen-beige-400 focus:border-zen-beige-400 transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zen-brown-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-zen-beige-50 border border-zen-beige-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zen-beige-400 focus:border-zen-beige-400 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-4 bg-zen-beige-50 border border-zen-beige-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zen-beige-400 focus:border-zen-beige-400 transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-zen-beige-50 border border-zen-beige-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zen-beige-400 focus:border-zen-beige-400 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="fizzy-button w-full bg-zen-gradient text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;