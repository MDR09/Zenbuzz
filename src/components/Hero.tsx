import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-light-cream to-tan">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-warm-tan/20 rounded-full animate-float blur-lg" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-primary-300/10 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <Zap className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-dark-brown">Creative Digital Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-dark-brown leading-tight mb-6">
              Amplify Your 
              <span className="text-primary-400 block">Digital Buzz</span>
            </h1>
            
            <p className="text-lg md:text-xl text-dark-brown/80 mb-8 max-w-2xl">
              We craft compelling digital experiences that captivate audiences and drive meaningful engagement. 
              From strategy to execution, we're your creative digital marketing partner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group bg-primary-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white/80 backdrop-blur-sm text-dark-brown px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center lg:text-left">
              <div className="group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <TrendingUp className="h-6 w-6 text-primary-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-2xl font-bold text-dark-brown">250+</span>
                </div>
                <p className="text-sm text-dark-brown/70">Projects Completed</p>
              </div>
              
              <div className="group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="h-6 w-6 text-primary-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-2xl font-bold text-dark-brown">150+</span>
                </div>
                <p className="text-sm text-dark-brown/70">Happy Clients</p>
              </div>
              
              <div className="group">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Zap className="h-6 w-6 text-primary-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-2xl font-bold text-dark-brown">5+</span>
                </div>
                <p className="text-sm text-dark-brown/70">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Creative team collaboration" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-xl animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium text-dark-brown">Campaign Live</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-primary-400 text-white rounded-xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold">+47%</div>
                  <div className="text-xs opacity-90">Growth Rate</div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-primary-200/30 to-warm-tan/30 rounded-3xl blur-sm"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dark-brown/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-dark-brown/30 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;