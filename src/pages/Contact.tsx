import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Youtube, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-light-cream to-tan">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <MessageCircle className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-dark-brown">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark-brown mb-6 leading-tight">
              Let's Start Your 
              <span className="text-primary-400 block">Digital Journey</span>
            </h1>
            
            <p className="text-xl text-dark-brown/80 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your digital presence? We'd love to hear about your project 
              and discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-br from-primary-50 to-light-cream rounded-3xl p-8 shadow-xl border border-white/20 mb-8">
                <h3 className="text-2xl font-semibold text-dark-brown mb-8">
                  Let's Connect
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                      <Phone className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-brown mb-1">Phone</h4>
                      <p className="text-dark-brown/70">+91 89208 98158</p>
                      <p className="text-dark-brown/70">+91 83849 35940</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                      <Mail className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-brown mb-1">Email</h4>
                      <p className="text-dark-brown/70">Info@zenbuzzmedia.in</p>
                      {/* <p className="text-dark-brown/70">projects@zenbuzzmedia.in</p>   */}
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                      <MapPin className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-brown mb-1">Office</h4>
                      <p className="text-dark-brown/70">Bhamashah Techno Hub,<br />Jaipur, Rajasthan 302017</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                      <Clock className="h-6 w-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-brown mb-1">Working Hours</h4>
                      <p className="text-dark-brown/70">Mon - Fri: 10:00 AM - 6:00 PM</p>
                      {/* <p className="text-dark-brown/70">Sat: 10:00 AM - 4:00 PM</p> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-primary-50 to-light-cream rounded-3xl p-8 shadow-xl border border-white/20">
                <h3 className="text-xl font-semibold text-dark-brown mb-6">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://youtube.com/@safar_1-j9c?si=SvgE5VaCQfSQPgCY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg group"
                    title="YouTube"
                  >
                    <Youtube className="h-5 w-5 group-hover:text-white" />
                  </a>
                  <a
                    href="http://www.linkedin.com/in/ruchika-gupta-95344114a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg group"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 group-hover:text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/zenbuzzmedia/profilecard/?igsh=MTlhZzZ0andrZDFkMA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg group"
                    title="Instagram"
                  >
                    <Instagram className="h-5 w-5 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-primary-50 to-light-cream rounded-3xl p-8 shadow-xl border border-white/20">
                <h3 className="text-2xl font-semibold text-dark-brown mb-8">
                  Start Your Project
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-brown mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 bg-white/70"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-brown mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 bg-white/70"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark-brown mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 bg-white/70"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-dark-brown mb-2">
                        Service Interested
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 bg-white/70"
                      >
                        <option value="">Select a service</option>
                        <option value="branding">Creative Design</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="development">Web Development</option>
                        <option value="strategy">Analytics & Strategy</option>
                        <option value="mobile">Mobile Marketing</option>
                        <option value="performance">Performance Marketing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-brown mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300 bg-white/70 resize-none"
                      placeholder="Tell us about your project, goals, and how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-400 text-white py-4 px-8 rounded-lg font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-light-cream to-cream">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-dark-brown mb-6">
              Frequently Asked <span className="text-primary-400">Questions</span>
            </h2>
            <p className="text-lg text-dark-brown/80">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What services do you offer?",
                answer: "We offer comprehensive digital marketing services including creative design, digital marketing, web development, analytics & strategy, mobile marketing, and performance marketing."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on scope and complexity. Simple projects may take 2-4 weeks, while comprehensive campaigns can take 2-3 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our services are scalable and can be tailored to fit your budget and requirements."
              },
              {
                question: "What's your pricing structure?",
                answer: "Our pricing varies based on the specific services and project scope. We offer both project-based pricing and monthly retainer options. Contact us for a customized quote based on your needs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <h3 className="text-lg font-semibold text-dark-brown mb-3">{faq.question}</h3>
                <p className="text-dark-brown/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;