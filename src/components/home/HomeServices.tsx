import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mic, Camera, Edit3, Megaphone, TrendingUp, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeServices: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Mic,
      title: 'Podcast Production',
      description: 'End-to-end podcast creation from concept to distribution.',
    },
    {
      icon: Camera,
      title: 'Video Content',
      description: 'Engaging video content for social media and marketing.',
    },
    {
      icon: Edit3,
      title: 'Content Creation',
      description: 'Creative content for blogs, social media, and campaigns.',
    },
    {
      icon: Megaphone,
      title: 'Social Media Management',
      description: 'Strategic social media management and community building.',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive strategies to boost your online presence.',
    },
    {
      icon: Headphones,
      title: 'Audio Branding',
      description: 'Custom audio solutions and brand voice development.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-zen-light">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-brown mb-6">
              Our Services
            </h2>
            <p className="text-xl text-zen-brown/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to elevate your brand
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-shadow bg-white rounded-2xl p-8 group hover:bg-zen-gradient hover:text-white transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-zen-gradient group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-zen-brown group-hover:text-white mb-4 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-zen-brown/70 group-hover:text-zen-cream leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/services"
              className="inline-flex items-center space-x-2 bg-zen-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 fizzy-button"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;