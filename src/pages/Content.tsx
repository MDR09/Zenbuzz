import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Play, Clock, Users, Calendar, Volume2, Filter, Search, Headphones } from 'lucide-react';

const Content: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const podcastCategories = ['All', 'Inspiration', 'Travel', 'Life Lessons'];

  const podcasts = [
    {
      id: 1,
      title: 'Journey to Success: From Dreams to Reality',
      thumbnail: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'Inspiring Stories',
      duration: '42:15',
      views: '18.2K',
      date: 'June 25, 2025',
      description: 'Discover incredible stories of perseverance and success from ordinary people who achieved extraordinary things.',
      category: 'Inspiration',
      season: 'Season 1',
      episode: 'Episode 3',
      youtubeUrl: 'https://www.youtube.com/watch?v=kV62xGVRKoU'
    },
    {
      id: 2,
      title: 'Travel Adventures: Exploring Hidden Gems',
      thumbnail: 'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'Adventure Seekers',
      duration: '35:48',
      views: '14.7K',
      date: 'June 20, 2025',
      description: 'Join us as we explore breathtaking destinations and uncover the stories behind hidden travel gems.',
      category: 'Travel',
      season: 'Season 1',
      episode: 'Episode 2',
      youtubeUrl: 'https://www.youtube.com/watch?v=cK1vLwG9H6w&t=1s'
    },
    {
      id: 3,
      title: 'Life Lessons: Wisdom from Experience',
      thumbnail: 'p1.webp',
      guest: 'Life Mentors',
      duration: '48:22',
      views: '21.5K',
      date: 'June 15, 2025',
      description: 'Learn valuable life lessons and wisdom from experienced mentors who share their journey of growth.',
      category: 'Life Lessons',
      season: 'Season 1',
      episode: 'Episode 1',
      youtubeUrl: 'https://www.youtube.com/watch?v=UbM0RyRoGSw&t=74s'
    }
  ];

  const filteredPodcasts = podcasts.filter(podcast => {
    const matchesCategory = selectedCategory === 'All' || podcast.category === selectedCategory;
    const matchesSearch = podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         podcast.guest?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePlayVideo = (youtubeUrl: string) => {
    window.open(youtubeUrl, '_blank');
  };

  const featuredPodcast = podcasts[0];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-light-cream to-tan">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
            <Headphones className="h-4 w-4 text-primary-400" />
            <span className="text-sm font-medium text-dark-brown">SAFAR Podcast</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-dark-brown mb-6 leading-tight">
            Stories of Journey &
            <span className="text-primary-400 block">Life Adventures</span>
          </h1>
          
          <p className="text-xl text-dark-brown/80 max-w-4xl mx-auto leading-relaxed">
            Join us on SAFAR as we explore inspiring stories, travel adventures, and life lessons. 
            Discover the journeys that shape us and the wisdom gained along the way.
          </p>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-light-cream">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-brown mb-6">
              Featured <span className="text-primary-400">Episode</span>
            </h2>
            <p className="text-lg text-dark-brown/80 max-w-3xl mx-auto">
              Don't miss our latest inspiring stories and adventures
            </p>
          </div>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-white/20">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative group">
                <img
                  src={featuredPodcast.thumbnail}
                  alt={featuredPodcast.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark-brown/40 group-hover:bg-dark-brown/60 transition-colors duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handlePlayVideo(featuredPodcast.youtubeUrl)}
                    className="w-20 h-20 bg-primary-400 hover:bg-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-400 text-white text-sm font-medium rounded-full">
                    Latest Episode
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-400 text-sm font-medium rounded-full">
                    {featuredPodcast.category}
                  </span>
                </div>
                
                <h2 className="text-3xl font-display font-bold text-dark-brown mb-4">
                  {featuredPodcast.title}
                </h2>
                
                <p className="text-dark-brown/70 mb-6 leading-relaxed">
                  {featuredPodcast.description}
                </p>

                <div className="flex items-center space-x-6 text-dark-brown/60 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>with {featuredPodcast.guest}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPodcast.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-4 h-4" />
                    <span>{featuredPodcast.views} views</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => handlePlayVideo(featuredPodcast.youtubeUrl)}
                    className="bg-primary-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Listen Now
                  </button>
                  <button className="border-2 border-primary-200 text-dark-brown px-6 py-3 rounded-full font-semibold hover:border-primary-400 hover:bg-primary-50 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-br from-light-cream to-cream">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-brown/50" />
              <input
                type="text"
                placeholder="Search episodes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-dark-brown/50" />
              <div className="flex flex-wrap gap-2">
                {podcastCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-primary-400 text-white shadow-lg'
                        : 'bg-white/80 backdrop-blur-sm text-dark-brown hover:bg-primary-100 shadow-lg'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Episodes Grid */}
      <section className="py-20 bg-white">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPodcasts.map((podcast, index) => (
                <div
                  key={podcast.id}
                  className="group bg-gradient-to-br from-primary-50 to-light-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border border-white/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={podcast.thumbnail}
                      alt={podcast.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-dark-brown/40 group-hover:bg-dark-brown/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <button
                        onClick={() => handlePlayVideo(podcast.youtubeUrl)}
                        className="w-12 h-12 bg-primary-400 hover:bg-primary-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </button>
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-primary-400 text-white text-xs font-medium rounded-full">
                        {podcast.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-1 bg-dark-brown/70 text-white text-xs font-medium rounded">
                        {podcast.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-dark-brown/60 mb-2">
                      <span>{podcast.season}</span>
                      <span>{podcast.episode}</span>
                    </div>
                    
                    <h3 className="text-lg font-display font-semibold text-dark-brown mb-2 group-hover:text-primary-500 transition-colors duration-300">
                      {podcast.title}
                    </h3>
                    
                    <p className="text-dark-brown/70 text-sm mb-4 leading-relaxed">
                      {podcast.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-dark-brown/60 mb-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{podcast.guest}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{podcast.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-dark-brown/60">
                        <Volume2 className="w-3 h-3" />
                        <span>{podcast.views}</span>
                      </div>
                      <button 
                        onClick={() => handlePlayVideo(podcast.youtubeUrl)}
                        className="bg-primary-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        Listen
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPodcasts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-dark-brown/70 text-lg">
                  No episodes found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-gradient-to-br from-primary-400 to-primary-500">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Never Miss an Episode
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to SAFAR on YouTube and get notified when new episodes are released
          </p>
          
          <div className="flex justify-center">
            <button 
              onClick={() => window.open('https://www.youtube.com/@SAFAR_1-j9c', '_blank')}
              className="bg-white text-primary-400 px-12 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
            >
              Subscribe on YouTube
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
