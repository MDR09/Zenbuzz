import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mic, Camera, Edit3, Megaphone, TrendingUp, Headphones } from 'lucide-react';

const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Mic,
      title: 'Podcast Production',
      description: 'End-to-end podcast creation from concept to distribution, with professional audio engineering and post-production.',
      features: ['Studio Recording', 'Audio Editing', 'Show Notes', 'Distribution'],
    },
    {
      icon: Camera,
      title: 'Video Content',
      description: 'Engaging video content for social media platforms, promotional materials, and brand storytelling.',
      features: ['Video Production', 'Motion Graphics', 'Color Grading', 'Optimization'],
    },
    {
      icon: Edit3,
      title: 'Content Creation',
      description: 'Creative content development for blogs, social media, and marketing campaigns that resonate with your audience.',
      features: ['Blog Writing', 'Social Posts', 'Copywriting', 'SEO Content'],
    },
    {
      icon: Megaphone,
      title: 'Social Media Management',
      description: 'Strategic social media management to build brand awareness and engage with your target audience effectively.',
      features: ['Strategy Planning', 'Content Scheduling', 'Community Management', 'Analytics'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive measurable results.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Email Marketing', 'Analytics'],
    },
    {
      icon: Headphones,
      title: 'Audio Branding',
      description: 'Custom audio branding solutions including jingles, sound effects, and brand voice development.',
      features: ['Brand Jingles', 'Sound Design', 'Voice Overs', 'Audio Logos'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-zen-beige-50">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-brown-800 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-zen-brown-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to elevate your brand and connect with your audience
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-shadow bg-white rounded-2xl p-8 group hover:bg-zen-gradient hover:text-white transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-zen-gradient group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-zen-brown-800 group-hover:text-white mb-4 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-zen-brown-600 group-hover:text-zen-beige-100 mb-6 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zen-brown-600 group-hover:text-zen-beige-100 transition-colors duration-300">
                      <div className="w-2 h-2 bg-zen-beige-500 group-hover:bg-white rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="fizzy-button mt-6 text-zen-brown-700 group-hover:text-white font-semibold transition-colors duration-300 hover:underline">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;