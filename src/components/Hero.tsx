import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, Headphones, Mic, Camera, Edit3 } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zen-light-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div 
          className="absolute w-64 h-64 bg-zen-rose/20 rounded-full blur-3xl animate-float"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-zen-beige/20 rounded-full blur-3xl animate-float"
          style={{
            top: '60%',
            right: '10%',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
          }}
        />
        <div 
          className="absolute w-48 h-48 bg-zen-brown/10 rounded-full blur-2xl animate-float"
          style={{
            bottom: '20%',
            left: '20%',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Logo Animation */}
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-zen-gradient rounded-full mb-6 animate-pulse-glow">
              <Headphones className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-zen-brown mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            ZenBuzz
            <span className="block text-zen-rose">Media</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-zen-brown/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Creative Digital Solutions for Modern Brands
          </p>

          {/* Description */}
          <p className="text-lg text-zen-brown/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            We craft compelling podcasts, engaging social media content, and innovative digital experiences 
            that connect brands with their audiences in meaningful ways.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button className="fizzy-button bg-zen-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Our Work</span>
            </button>
            <button className="fizzy-button border-2 border-zen-brown text-zen-brown px-8 py-4 rounded-full text-lg font-semibold hover:bg-zen-brown hover:text-white transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Service Icons */}
          <div className="flex justify-center space-x-8 mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            {[
              { icon: Mic, label: 'Podcasts' },
              { icon: Camera, label: 'Video' },
              { icon: Edit3, label: 'Content' },
            ].map((service, index) => (
              <div
                key={service.label}
                className="flex flex-col items-center group cursor-pointer"
                style={{ animationDelay: `${1.2 + index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 group-hover:bg-zen-gradient group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-zen-brown group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-zen-brown/70 text-sm font-medium">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-zen-brown/60 hover:text-zen-brown transition-colors duration-300 group"
        >
          <span className="text-sm font-medium mb-2 group-hover:translate-y-1 transition-transform duration-300">
            Scroll Down
          </span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-zen-rose rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-zen-beige rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-zen-brown rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-32 w-4 h-4 bg-zen-rose/50 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default Hero;