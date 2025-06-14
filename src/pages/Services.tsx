import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mic, Camera, Edit3, Megaphone, TrendingUp, Headphones, Play, CheckCircle } from 'lucide-react';

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
      features: ['Studio Recording', 'Audio Editing', 'Show Notes', 'Distribution', 'Branding', 'Analytics'],
      price: 'Starting from ₹25,000/episode',
      popular: true
    },
    {
      icon: Camera,
      title: 'Video Content',
      description: 'Engaging video content for social media platforms, promotional materials, and brand storytelling.',
      features: ['Video Production', 'Motion Graphics', 'Color Grading', 'Optimization', 'Thumbnails', 'Subtitles'],
      price: 'Starting from ₹15,000/video',
      popular: false
    },
    {
      icon: Edit3,
      title: 'Content Creation',
      description: 'Creative content development for blogs, social media, and marketing campaigns that resonate with your audience.',
      features: ['Blog Writing', 'Social Posts', 'Copywriting', 'SEO Content', 'Graphics', 'Scheduling'],
      price: 'Starting from ₹8,000/month',
      popular: false
    },
    {
      icon: Megaphone,
      title: 'Social Media Management',
      description: 'Strategic social media management to build brand awareness and engage with your target audience effectively.',
      features: ['Strategy Planning', 'Content Scheduling', 'Community Management', 'Analytics', 'Advertising', 'Reporting'],
      price: 'Starting from ₹20,000/month',
      popular: true
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive measurable results.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Email Marketing', 'Analytics', 'Lead Generation', 'Conversion Optimization'],
      price: 'Starting from ₹30,000/month',
      popular: false
    },
    {
      icon: Headphones,
      title: 'Audio Branding',
      description: 'Custom audio branding solutions including jingles, sound effects, and brand voice development.',
      features: ['Brand Jingles', 'Sound Design', 'Voice Overs', 'Audio Logos', 'Music Production', 'Audio Guidelines'],
      price: 'Starting from ₹12,000/project',
      popular: false
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your brand, goals, and target audience to create a tailored strategy.'
    },
    {
      step: '02',
      title: 'Creative Development',
      description: 'Our team develops creative concepts and content that align with your brand voice and objectives.'
    },
    {
      step: '03',
      title: 'Production & Execution',
      description: 'We bring your content to life using state-of-the-art equipment and professional techniques.'
    },
    {
      step: '04',
      title: 'Review & Optimization',
      description: 'We analyze performance metrics and continuously optimize for better results and engagement.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-zen-light-gradient">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-zen-brown mb-6">
            Our Services
          </h1>
          <p className="text-xl text-zen-brown/70 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to elevate your brand and connect with your audience
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`card-shadow bg-white rounded-2xl p-8 group hover:bg-zen-gradient hover:text-white transition-all duration-500 relative ${
                    service.popular ? 'ring-2 ring-zen-rose' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-zen-rose text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-zen-gradient group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-white group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-semibold text-zen-brown group-hover:text-white mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-zen-brown/70 group-hover:text-zen-cream mb-6 leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zen-brown/70 group-hover:text-zen-cream transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-zen-rose group-hover:text-white mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-zen-brown/10 group-hover:border-white/20 pt-6 transition-colors duration-300">
                    <p className="text-zen-rose group-hover:text-white font-semibold text-lg mb-4 transition-colors duration-300">
                      {service.price}
                    </p>
                    <button className="fizzy-button w-full bg-zen-brown group-hover:bg-white text-white group-hover:text-zen-brown py-3 rounded-xl font-semibold transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-zen-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-zen-brown mb-6">
              Our Process
            </h2>
            <p className="text-xl text-zen-brown/70 max-w-3xl mx-auto">
              How we bring your vision to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-zen-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-zen-brown mb-4">
                  {step.title}
                </h3>
                <p className="text-zen-brown/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zen-brown text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zen-cream/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="fizzy-button bg-zen-rose text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">
              Start Your Project
            </button>
            <button className="fizzy-button border-2 border-zen-cream text-zen-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-zen-cream hover:text-zen-brown transition-all duration-300 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>View Portfolio</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;