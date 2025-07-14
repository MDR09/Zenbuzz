import React, { useState, useEffect, useRef } from 'react';
import { Award, Heart, Target, Users, Zap, TrendingUp } from 'lucide-react';

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
    <span className="text-4xl font-bold text-white mb-2">
      {count}{suffix}
    </span>
  );
};

const About = () => {
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-light-cream to-tan">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <Heart className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-dark-brown">About ZenBuzz Media</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark-brown mb-6 leading-tight">
              We Create Digital 
              <span className="text-primary-400 block">Experiences That Matter</span>
            </h1>
            
            <p className="text-xl text-dark-brown/80 max-w-4xl mx-auto leading-relaxed">
              At ZenBuzz Media, we believe in the power of authentic storytelling and strategic innovation. 
              Our passionate team combines creativity with data-driven insights to deliver campaigns that 
              not only look stunning but also drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-slide-in-left">
              <div className="relative">
                <img 
                  src="team.jpg" 
                  alt="Team brainstorming session" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/20 to-transparent rounded-2xl"></div>
                
                {/* Floating Achievement Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl animate-float">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-primary-400" />
                    <div>
                      <div className="text-xl font-bold text-dark-brown">Award Winner</div>
                      <div className="text-sm text-dark-brown/70">Digital Excellence 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-display font-bold text-dark-brown mb-6 leading-tight">
                Our Journey Started with a 
                <span className="text-primary-400 block">Simple Belief</span>
              </h2>

              <p className="text-lg text-dark-brown/80 mb-8 leading-relaxed">
                Founded in 2019, ZenBuzz Media emerged from a vision to bridge the gap between creative 
                excellence and strategic marketing. We started as a small team of passionate creatives 
                and have grown into a full-service digital agency that serves clients across industries.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                    <Target className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-brown mb-2">Strategic Approach</h3>
                    <p className="text-dark-brown/70">Every campaign starts with understanding your unique goals and audience insights.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                    <Users className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-brown mb-2">Collaborative Partnership</h3>
                    <p className="text-dark-brown/70">We work alongside you as an extended team, ensuring transparency and alignment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-light-cream to-cream">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-dark-brown mb-6">
              Our Core <span className="text-primary-400">Values</span>
            </h2>
            <p className="text-lg text-dark-brown/80 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We stay ahead of digital trends to keep your brand at the forefront of innovation.",
                icon: "🚀"
              },
              {
                title: "Results Driven",
                description: "Every strategy is designed with measurable outcomes and ROI in mind.",
                icon: "📈"
              },
              {
                title: "Client Focused",
                description: "Your success is our success. We're committed to exceeding your expectations.",
                icon: "🎯"
              }
            ].map((value, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border border-white/20" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-xl font-semibold text-dark-brown mb-3">{value.title}</h3>
                <p className="text-dark-brown/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-dark-brown mb-6">
              Meet Our <span className="text-primary-400">Creative Team</span>
            </h2>
            <p className="text-lg text-dark-brown/80 max-w-3xl mx-auto">
              The talented individuals behind every successful campaign
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {[
              {
                name: "Sumit Dutt ",
                role: "CEO",
                image: "Founder.jpg",
                bio: "10+ years in creative strategy and brand development. Passionate about building brands that make a difference."
              },
              {
                name: "Ruchika Gupta",
                role: "Director",
                image: "co-founder.jpg",
                bio: "Expert in performance marketing and analytics. Data-driven strategist with a creative mindset."
              }
            ].map((member, index) => (
              <div key={index} className="group text-center bg-gradient-to-br from-primary-50 to-light-cream p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                <div className="relative mb-6 mx-auto w-40 h-40">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-primary-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-semibold text-dark-brown mb-2 group-hover:text-primary-500 transition-colors duration-300">{member.name}</h3>
                <p className="text-primary-400 font-medium mb-4 text-lg">{member.role}</p>
                <p className="text-dark-brown/70 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-400 to-primary-500">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Our Impact in Numbers
            </h2>
          </div>

          <div ref={statsRef} className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: 250, suffix: "+", label: "Projects Completed", icon: TrendingUp },
              { number: 150, suffix: "+", label: "Happy Clients", icon: Users },
              { number: 5, suffix: "+", label: "Years Experience", icon: Zap },
              { number: 98, suffix: "%", label: "Client Satisfaction", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="block">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} isVisible={statsVisible} />
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;