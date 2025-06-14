import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Zap, Users, Award, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeAbout: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Target, value: '1000+', label: 'Projects Completed' },
    { icon: Zap, value: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-brown mb-6">
              About ZenBuzz Media
            </h2>
            <p className="text-xl text-zen-brown/70 max-w-3xl mx-auto leading-relaxed">
              We're a creative digital agency specializing in podcast production, social media content, 
              and brand storytelling that resonates with your audience.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-semibold text-zen-brown">
                Crafting Stories That Connect
              </h3>
              <p className="text-zen-brown/70 leading-relaxed">
                At ZenBuzz Media, we believe in the power of authentic storytelling. Our team of creative 
                professionals combines technical expertise with artistic vision to deliver content that 
                not only looks great but also drives meaningful engagement.
              </p>
              <p className="text-zen-brown/70 leading-relaxed">
                From podcast production to Instagram content creation, we help brands find their unique 
                voice in the digital landscape.
              </p>
              
              <Link 
                to="/about"
                className="inline-flex items-center space-x-2 text-zen-rose font-semibold hover:text-zen-brown transition-colors duration-300"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Image with Mask Effect */}
            <div className="relative group">
              <div className="image-mask w-full h-96 bg-zen-gradient rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Creative team at work"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-zen-rose rounded-full rotating-image flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-zen-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-zen-brown mb-2">{stat.value}</div>
                <div className="text-zen-brown/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;