import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let playedOnce = false;

    const handleEnded = () => {
      playedOnce = true;
      video.currentTime = 3;
      video.play();
    };

    const handleLoadedMetadata = () => {
      playedOnce = false;
      video.currentTime = 0;
      video.play();
    };

    video.loop = false;
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="/background.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        style={{ transition: 'opacity 0.5s' }}
      />

      {/* Parallax Background Overlay */}
      <div 
        // className="absolute inset-0 bg-gradient-to-br from-zen-brown-900 via-zen-brown-700 to-zen-beige-600 mix-blend-multiply"
        // style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Animated Background Circles */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zen-beige-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-zen-brown-300/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-zen-beige-300/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-slide-up">
          {/* <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6">
            ZenBuzz
            <span className="block text-zen-beige-300">Media</span>
          </h1> */}
          
          {/* <p className="text-xl md:text-2xl text-zen-beige-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Creating captivating digital experiences through innovative storytelling, 
            podcast production, and social media mastery.
          </p> */}

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="fizzy-button group bg-zen-beige-500 hover:bg-zen-beige-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Our Story</span>
            </button>
            
            <button className="fizzy-button group border-2 border-white hover:bg-white hover:text-zen-brown-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2">
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-zen-beige-300" />
        </div>
      </div>

      {/* Decorative Gradient Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
