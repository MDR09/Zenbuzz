import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Zap, Users, Award, Target, Heart, Lightbulb, Globe, Star } from 'lucide-react';

const About: React.FC = () => {
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

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'We pour our heart into every project, ensuring authentic and meaningful content creation.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Constantly exploring new technologies and creative approaches to stay ahead of trends.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Understanding diverse audiences and creating content that resonates across cultures.'
    },
    {
      icon: Star,
      title: 'Excellence Standard',
      description: 'Maintaining the highest quality standards in every aspect of our creative process.'
    }
  ];

  const team = [
    {
      name: 'Arjun Sharma',
      role: 'Founder & Creative Director',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '10+ years in digital media with expertise in podcast production and brand storytelling.'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Content Strategy',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Social media strategist with a passion for creating viral content and community building.'
    },
    {
      name: 'Rahul Kumar',
      role: 'Audio Engineer',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning audio engineer specializing in podcast production and sound design.'
    },
    {
      name: 'Sneha Gupta',
      role: 'Video Producer',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative video producer with expertise in storytelling and visual content creation.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-zen-light-gradient">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-zen-brown mb-6">
            About ZenBuzz Media
          </h1>
          <p className="text-xl text-zen-brown/70 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of creators, storytellers, and digital innovators dedicated to 
            helping brands find their unique voice in the digital landscape.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold text-zen-brown mb-6">
                  Our Story
                </h2>
                <p className="text-zen-brown/70 leading-relaxed mb-6">
                  Founded in 2019, ZenBuzz Media emerged from a simple belief: every brand has a unique story 
                  worth telling. What started as a small podcast production studio has evolved into a 
                  comprehensive digital media agency serving clients across India and beyond.
                </p>
                <p className="text-zen-brown/70 leading-relaxed mb-6">
                  Our journey began when our founder, Arjun Sharma, recognized the growing need for authentic, 
                  high-quality digital content in an increasingly crowded online space. With a background in 
                  audio engineering and a passion for storytelling, he set out to create a company that would 
                  bridge the gap between technical excellence and creative vision.
                </p>
                <p className="text-zen-brown/70 leading-relaxed">
                  Today, we're proud to be Mumbai's leading creative digital agency, having produced over 1000 
                  podcast episodes, managed social media for 500+ brands, and created viral content that has 
                  reached millions of people worldwide.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="ZenBuzz Media team"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-zen-rose rounded-full rotating-image flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-zen-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-zen-brown mb-6">
              Our Values
            </h2>
            <p className="text-xl text-zen-brown/70 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-zen-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-zen-brown mb-4">
                  {value.title}
                </h3>
                <p className="text-zen-brown/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-zen-brown mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-zen-brown/70 max-w-3xl mx-auto">
              The creative minds behind ZenBuzz Media
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-2xl mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-zen-gradient/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-display font-semibold text-zen-brown mb-2">
                  {member.name}
                </h3>
                <p className="text-zen-rose font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-zen-brown/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-zen-brown text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-zen-cream/80 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-zen-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zen-cream/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;