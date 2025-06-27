import React from 'react';
import { Brush, BarChart3, Megaphone, Smartphone, Globe, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Brush,
      title: "Creative Design",
      description: "Stunning visual identities and designs that capture your brand essence and engage your audience.",
      features: ["Brand Identity Design", "Logo & Visual Assets", "UI/UX Design", "Print Design", "Packaging Design", "Social Media Graphics"],
      price: "Starting from ₹25,000"
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic campaigns across all digital channels to maximize your reach and conversions.",
      features: ["Social Media Marketing", "Content Marketing", "Email Campaigns", "Influencer Marketing", "SEO Optimization", "Online Advertising"],
      price: "Starting from ₹15,000/month"
    },
    {
      icon: BarChart3,
      title: "Analytics & Strategy",
      description: "Data-driven insights and strategic planning to optimize your marketing performance.",
      features: ["Performance Analytics", "Market Research", "Strategy Consulting", "ROI Optimization", "Competitor Analysis", "Growth Planning"],
      price: "Starting from ₹20,000"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that deliver exceptional user experiences and drive results.",
      features: ["Custom Websites", "E-commerce Solutions", "Mobile Apps", "CMS Development", "Website Maintenance", "Performance Optimization"],
      price: "Starting from ₹50,000"
    },
    {
      icon: Smartphone,
      title: "Mobile Marketing",
      description: "Targeted mobile strategies to reach your audience wherever they are, whenever they're active.",
      features: ["App Marketing", "Mobile Advertising", "SMS Marketing", "Location-Based Marketing", "Push Notifications", "Mobile Analytics"],
      price: "Starting from ₹12,000/month"
    },
    {
      icon: Zap,
      title: "Performance Marketing",
      description: "Results-focused campaigns with measurable outcomes and optimized spending efficiency.",
      features: ["PPC Management", "Conversion Optimization", "A/B Testing", "Lead Generation", "Retargeting Campaigns", "Performance Tracking"],
      price: "Starting from ₹18,000/month"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-light-cream to-tan">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <Zap className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-dark-brown">Our Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark-brown mb-6 leading-tight">
              Comprehensive Digital 
              <span className="text-primary-400 block">Solutions for Growth</span>
            </h1>
            
            <p className="text-xl text-dark-brown/80 max-w-4xl mx-auto leading-relaxed">
              From strategy to execution, we offer end-to-end digital marketing services 
              designed to elevate your brand and drive measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-primary-50 to-light-cream rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-up border border-white/20"
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
                      <CheckCircle className="w-4 h-4 text-primary-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-lg font-semibold text-primary-400 mb-6">
                  {service.price}
                </div>

                {/* CTA Button */}
                <Link 
                  to="/contact"
                  className="w-full bg-primary-400 text-white py-3 rounded-full font-medium hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-light-cream to-cream">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-dark-brown mb-6">
              Our Proven <span className="text-primary-400">Process</span>
            </h2>
            <p className="text-lg text-dark-brown/80 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into understanding your business, goals, and target audience."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Develop a comprehensive strategy tailored to your specific objectives."
              },
              {
                step: "03",
                title: "Execution",
                description: "Implement the strategy with precision and attention to detail."
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuously monitor, analyze, and optimize for better results."
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-400 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-dark-brown mb-3">{process.title}</h3>
                <p className="text-dark-brown/70">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-400 to-primary-500">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive digital solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary-400 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-400 transition-all duration-300"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;