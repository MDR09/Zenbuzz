import React from 'react';
import { Brush, BarChart3, Megaphone, Smartphone, Globe, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brush,
      title: "Creative Design",
      description: "Stunning visual identities and designs that capture your brand essence and engage your audience.",
      features: ["Brand Identity", "UI/UX Design", "Print Design", "Packaging Design"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic campaigns across all digital channels to maximize your reach and conversions.",
      features: ["Social Media Marketing", "Content Marketing", "Email Campaigns", "Influencer Marketing"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Strategy",
      description: "Data-driven insights and strategic planning to optimize your marketing performance.",
      features: ["Performance Analytics", "Market Research", "Strategy Consulting", "ROI Optimization"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that deliver exceptional user experiences and drive results.",
      features: ["Custom Websites", "E-commerce", "Mobile Apps", "CMS Solutions"]
    },
    {
      icon: Smartphone,
      title: "Mobile Marketing",
      description: "Targeted mobile strategies to reach your audience wherever they are, whenever they're active.",
      features: ["App Marketing", "Mobile Ads", "SMS Marketing", "Location-Based Marketing"]
    },
    {
      icon: Zap,
      title: "Performance Marketing",
      description: "Results-focused campaigns with measurable outcomes and optimized spending efficiency.",
      features: ["PPC Management", "Conversion Optimization", "A/B Testing", "Lead Generation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-light-cream via-cream to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
            <Zap className="h-4 w-4 text-primary-400" />
            <span className="text-sm font-medium text-dark-brown">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-brown mb-6 leading-tight">
            Comprehensive Digital 
            <span className="text-primary-400 block">Solutions for Growth</span>
          </h2>
          
          <p className="text-lg text-dark-brown/80 max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we offer end-to-end digital marketing services 
            designed to elevate your brand and drive measurable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-up border border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-primary-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-dark-brown mb-4 group-hover:text-primary-500 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-dark-brown/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-dark-brown/70">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full bg-primary-100 text-dark-brown py-3 rounded-full font-medium hover:bg-primary-200 transition-all duration-300 group-hover:bg-primary-400 group-hover:text-white transform group-hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-dark-brown mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-lg text-dark-brown/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive digital solutions can help you achieve your business goals and stand out in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Free Consultation
              </button>
              <button className="border-2 border-primary-200 text-dark-brown px-8 py-4 rounded-full font-semibold hover:border-primary-400 hover:bg-primary-50 transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;