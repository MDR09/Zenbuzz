import React, { useState } from 'react';
import { Headphones, Play, Pause, Calendar, Clock, Download, Share2, Heart } from 'lucide-react';

const Podcast = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);

  const podcastEpisodes = [
    {
      id: 1,
      title: "The Future of Digital Marketing with AI",
      description: "Join us as we explore how artificial intelligence is revolutionizing digital marketing strategies and what it means for businesses in 2024.",
      guest: "Dr. Sarah Johnson",
      guestTitle: "AI Marketing Expert",
      duration: "45:32",
      date: "December 18, 2024",
      category: "AI & Technology",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: true,
      listens: "12.5K",
      tags: ["AI", "Digital Marketing", "Future Trends"]
    },
    {
      id: 2,
      title: "Building Authentic Brand Stories",
      description: "Discover the art of storytelling in branding and how to create narratives that resonate with your audience on a deeper level.",
      guest: "Michael Chen",
      guestTitle: "Brand Strategist",
      duration: "38:15",
      date: "December 11, 2024",
      category: "Branding",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: false,
      listens: "9.8K",
      tags: ["Branding", "Storytelling", "Strategy"]
    },
    {
      id: 3,
      title: "Social Media Trends That Actually Work",
      description: "Cut through the noise and learn about the social media trends that are driving real engagement and conversions in 2024.",
      guest: "Emma Rodriguez",
      guestTitle: "Social Media Director",
      duration: "42:18",
      date: "December 4, 2024",
      category: "Social Media",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: false,
      listens: "11.2K",
      tags: ["Social Media", "Trends", "Engagement"]
    },
    {
      id: 4,
      title: "Performance Marketing Mastery",
      description: "Learn advanced performance marketing techniques that deliver measurable ROI and drive sustainable business growth.",
      guest: "David Park",
      guestTitle: "Performance Marketing Lead",
      duration: "51:45",
      date: "November 27, 2024",
      category: "Performance Marketing",
      image: "https://images.pexels.com/photos/3184350/pexels-photo-3184350.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: false,
      listens: "8.7K",
      tags: ["Performance Marketing", "ROI", "Analytics"]
    },
    {
      id: 5,
      title: "The Psychology of User Experience",
      description: "Dive deep into the psychological principles that drive user behavior and how to apply them in UX design for better conversions.",
      guest: "Lisa Thompson",
      guestTitle: "UX Psychology Expert",
      duration: "39:22",
      date: "November 20, 2024",
      category: "UX Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: false,
      listens: "7.9K",
      tags: ["UX Design", "Psychology", "Conversion"]
    },
    {
      id: 6,
      title: "Content Marketing That Converts",
      description: "Master the art of creating content that not only engages your audience but also drives them to take meaningful action.",
      guest: "Alex Kumar",
      guestTitle: "Content Strategy Expert",
      duration: "44:33",
      date: "November 13, 2024",
      category: "Content Marketing",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      featured: false,
      listens: "10.1K",
      tags: ["Content Marketing", "Strategy", "Conversion"]
    }
  ];

  const categories = [
    'All Episodes',
    'AI & Technology',
    'Branding',
    'Social Media',
    'Performance Marketing',
    'UX Design',
    'Content Marketing'
  ];

  const handlePlayPause = (episodeId: number) => {
    if (currentlyPlaying === episodeId) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(episodeId);
    }
  };

  const featuredEpisode = podcastEpisodes.find(episode => episode.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-light-cream to-tan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <Headphones className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-dark-brown">ZenBuzz Podcast</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark-brown mb-6 leading-tight">
              Digital Marketing 
              <span className="text-primary-400 block">Conversations</span>
            </h1>
            
            <p className="text-xl text-dark-brown/80 max-w-4xl mx-auto leading-relaxed">
              Join industry experts and thought leaders as we dive deep into the latest trends, 
              strategies, and insights that are shaping the future of digital marketing.
            </p>
          </div>

          {/* Podcast Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Episodes" },
              { number: "100K+", label: "Total Listens" },
              { number: "25+", label: "Expert Guests" },
              { number: "4.9", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-primary-400 mb-2">{stat.number}</div>
                <div className="text-dark-brown/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      {featuredEpisode && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold text-dark-brown mb-8">Featured Episode</h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-primary-50 to-light-cream rounded-3xl p-8 lg:p-12">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredEpisode.category}
                    </span>
                    <span className="text-dark-brown/60 text-sm flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{featuredEpisode.duration}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-dark-brown mb-4">
                    {featuredEpisode.title}
                  </h3>
                  
                  <p className="text-lg text-dark-brown/80 mb-6 leading-relaxed">
                    {featuredEpisode.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-sm text-dark-brown/70">
                      <span className="font-medium">Guest: </span>
                      {featuredEpisode.guest} - {featuredEpisode.guestTitle}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-dark-brown/60">
                      <Calendar className="h-4 w-4 text-primary-400" />
                      <span>{featuredEpisode.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-dark-brown/60">
                      <Headphones className="h-4 w-4 text-primary-400" />
                      <span>{featuredEpisode.listens} listens</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => handlePlayPause(featuredEpisode.id)}
                      className="bg-primary-400 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
                    >
                      {currentlyPlaying === featuredEpisode.id ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                      <span>{currentlyPlaying === featuredEpisode.id ? 'Pause' : 'Play Now'}</span>
                    </button>
                    
                    <button className="border-2 border-primary-200 text-dark-brown px-6 py-3 rounded-full font-medium hover:border-primary-400 hover:bg-primary-50 transition-all duration-300 inline-flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src={featuredEpisode.image} 
                    alt={featuredEpisode.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/20 to-transparent rounded-2xl"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => handlePlayPause(featuredEpisode.id)}
                      className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-xl"
                    >
                      {currentlyPlaying === featuredEpisode.id ? (
                        <Pause className="h-8 w-8 text-primary-400" />
                      ) : (
                        <Play className="h-8 w-8 text-primary-400 ml-1" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Episodes List */}
      <section className="py-20 bg-gradient-to-br from-light-cream to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-bold text-dark-brown">
              All Episodes
            </h2>
            <div className="text-sm text-dark-brown/70">
              {podcastEpisodes.length} episodes available
            </div>
          </div>

          <div className="space-y-6">
            {podcastEpisodes.filter(ep => !ep.featured).map((episode, index) => (
              <div 
                key={episode.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-slide-up border border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="relative">
                    <img 
                      src={episode.image} 
                      alt={episode.title}
                      className="w-full h-32 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => handlePlayPause(episode.id)}
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        {currentlyPlaying === episode.id ? (
                          <Pause className="h-5 w-5 text-primary-400" />
                        ) : (
                          <Play className="h-5 w-5 text-primary-400 ml-0.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="bg-primary-100 text-primary-400 px-2 py-1 rounded-full text-xs font-medium">
                        {episode.category}
                      </span>
                      <span className="text-dark-brown/60 text-xs flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{episode.duration}</span>
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-dark-brown mb-2 group-hover:text-primary-500 transition-colors duration-300">
                      {episode.title}
                    </h3>
                    
                    <p className="text-dark-brown/70 text-sm mb-3 leading-relaxed line-clamp-2">
                      {episode.description}
                    </p>

                    <div className="text-sm text-dark-brown/60">
                      <span className="font-medium">Guest: </span>
                      {episode.guest} - {episode.guestTitle}
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-3">
                    <div className="flex items-center space-x-4 text-sm text-dark-brown/60">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{episode.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Headphones className="h-3 w-3" />
                        <span>{episode.listens}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="p-2 bg-primary-100 text-primary-400 rounded-full hover:bg-primary-200 transition-colors duration-300">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-primary-100 text-primary-400 rounded-full hover:bg-primary-200 transition-colors duration-300">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-primary-100 text-primary-400 rounded-full hover:bg-primary-200 transition-colors duration-300">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-gradient-to-br from-primary-400 to-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Headphones className="h-16 w-16 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Never Miss an Episode
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to ZenBuzz Podcast and get notified when new episodes are released. 
              Available on all major podcast platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {['Apple Podcasts', 'Spotify', 'Google Podcasts'].map((platform) => (
              <button 
                key={platform}
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;