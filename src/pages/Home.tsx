import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Zap, Brush, BarChart3, Megaphone, ExternalLink, Headphones, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

// Animated Counter Component
const AnimatedCounter: React.FC<{ 
  end: number; 
  duration?: number; 
  suffix?: string; 
  isVisible: boolean;
}> = ({ end, duration = 2000, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number;
      const startValue = 0;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isVisible, hasAnimated, end, duration]);

  return (
    <span className="text-2xl font-bold text-dark-brown">
      {count}{suffix}
    </span>
  );
};

const Home = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-light-cream to-tan">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400/10 rounded-full animate-float blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-warm-tan/20 rounded-full animate-float blur-lg" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-primary-300/10 rounded-full animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 w-[90%] mx-auto px-4 sm:px-6 lg:px-8 pt-20">
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
                <Link 
                  to="/contact"
                  className="group bg-primary-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link 
                  to="/about"
                  className="group bg-white/80 backdrop-blur-sm text-dark-brown px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Play className="h-5 w-5" />
                  <span>Watch Our Story</span>
                </Link>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-3 gap-6 text-center lg:text-left">
                <div className="group">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <TrendingUp className="h-6 w-6 text-primary-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <AnimatedCounter end={250} suffix="+" isVisible={statsVisible} />
                  </div>
                  <p className="text-sm text-dark-brown/70">Projects Completed</p>
                </div>
                
                <div className="group">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Users className="h-6 w-6 text-primary-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <AnimatedCounter end={150} suffix="+" isVisible={statsVisible} />
                  </div>
                  <p className="text-sm text-dark-brown/70">Happy Clients</p>
                </div>
                
                <div className="group">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Zap className="h-6 w-6 text-primary-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <AnimatedCounter end={5} suffix="+" isVisible={statsVisible} />
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

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-brown mb-6">
              Our Core <span className="text-primary-400">Services</span>
            </h2>
            <p className="text-lg text-dark-brown/80 max-w-3xl mx-auto">
              Comprehensive digital solutions to elevate your brand
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Brush,
                title: "Creative Design",
                description: "Stunning visual identities that capture your brand essence",
                link: "/services"
              },
              {
                icon: Megaphone,
                title: "Digital Marketing",
                description: "Strategic campaigns across all digital channels",
                link: "/services"
              },
              {
                icon: BarChart3,
                title: "Analytics & Strategy",
                description: "Data-driven insights to optimize performance",
                link: "/services"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-primary-50 to-light-cream p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <service.icon className="h-12 w-12 text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-dark-brown mb-3">{service.title}</h3>
                <p className="text-dark-brown/70 mb-4">{service.description}</p>
                <Link to={service.link} className="text-primary-400 hover:text-primary-500 font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services"
              className="bg-primary-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-gradient-to-br from-light-cream to-cream">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-brown mb-6">
              Featured <span className="text-primary-400">Work</span>
            </h2>
            <p className="text-lg text-dark-brown/80 max-w-3xl mx-auto">
              Showcasing our latest creative projects and success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "EcoLife Brand Identity",
                category: "Branding",
                image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "TechStart Mobile App",
                category: "Development",
                image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((project, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 shadow-lg">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-medium text-primary-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-dark-brown mt-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/portfolio"
              className="bg-primary-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span>View Portfolio</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog & Podcast Preview */}
      <section className="py-20 bg-white">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Blog Preview */}
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <Instagram className="h-6 w-6 text-primary-400" />
                <h2 className="text-3xl font-display font-bold text-dark-brown">
                  Latest <span className="text-primary-400">Insights</span>
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Transform your vision into reality with Zenbuzz Media – creative minds. proven results.",
                    excerpt: "",
                    date: "8 weeks ago",
                    image: "I1.png",
                    link: "https://www.instagram.com/p/DJJGz3ySs06/"
                  },
                  {
                    title: "Want to Know what we do ?🤔Come here and just visit our page🙄",
                    excerpt: "From minimalist aesthetics to bold color choices, discover what's driving conversions in modern design...",
                    date: "7 weeks ago",
                    image: "I2.png",
                    link: "https://www.instagram.com/zenbuzzmedia/"
                  }
                ].map((post, index) => (
                  <a 
                    key={index}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex space-x-4 group cursor-pointer"
                  >
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-dark-brown group-hover:text-primary-400 transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-sm text-dark-brown/70 mt-1">{post.excerpt}</p>
                      <span className="text-xs text-primary-400 mt-2 block">{post.date}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <a 
                  href="https://www.instagram.com/zenbuzzmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-500 font-medium inline-flex items-center space-x-2"
                >
                  <span>Follow on Instagram</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Podcast Preview */}
            <div>
              <div className="flex items-center space-x-2 mb-8">
                <Headphones className="h-6 w-6 text-primary-400" />
                <h2 className="text-3xl font-display font-bold text-dark-brown">
                  ZenBuzz <span className="text-primary-400">Podcast</span>
                </h2>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-light-cream p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary-400 rounded-full flex items-center justify-center">
                    <Headphones className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-brown">Latest Episode</h3>
                    <p className="text-dark-brown/70">SAFAR II THE UNFOLDING STARTUP STORY II Episode 02</p>
                  </div>
                </div>

                <p className="text-dark-brown/80 mb-6">
                   We dive deep into the real journeys of entrepreneurs, dreamers, and changemakers who dared to start from scratch. Join us as we explore the hustle, challenges, and raw stories behind the scenes that no one talks about.
                </p>

                <div className="flex space-x-4">
                  <a 
                    href="https://www.youtube.com/watch?v=cK1vLwG9H6w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-400 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-500 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>Watch Now</span>
                  </a>
                  <Link 
                    to="/content"
                    className="border-2 border-primary-200 text-dark-brown px-6 py-3 rounded-full font-medium hover:border-primary-400 hover:bg-primary-50 transition-all duration-300"
                  >
                    All Episodes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-400 to-primary-500">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project and create digital experiences that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-primary-400 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <Link 
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-400 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;