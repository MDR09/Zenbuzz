import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Play, Clock, Users, Calendar, Volume2 } from 'lucide-react';

const PodcastVideos: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const podcasts = [
    {
      id: 1,
      title: 'The Future of Digital Marketing',
      thumbnail: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'Sarah Johnson',
      duration: '45:32',
      views: '12.5K',
      date: 'Dec 15, 2024',
      description: 'Join us as we explore the latest trends in digital marketing with industry expert Sarah Johnson.',
      category: 'Marketing',
    },
    {
      id: 2,
      title: 'Podcast Production Mastery',
      thumbnail: 'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'Mike Chen',
      duration: '38:15',
      views: '8.9K',
      date: 'Dec 12, 2024',
      description: 'Learn the secrets of professional podcast production from award-winning producer Mike Chen.',
      category: 'Production',
    },
    {
      id: 3,
      title: 'Building Your Brand Voice',
      thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'Emily Rodriguez',
      duration: '52:08',
      views: '15.2K',
      date: 'Dec 10, 2024',
      description: 'Discover how to develop a unique brand voice that resonates with your target audience.',
      category: 'Branding',
    },
    {
      id: 4,
      title: 'Social Media Strategy 2025',
      thumbnail: 'https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'David Kim',
      duration: '41:27',
      views: '9.8K',
      date: 'Dec 8, 2024',
      description: 'Get ahead of the curve with next year\'s social media strategies and emerging platforms.',
      category: 'Social Media',
    },
    {
      id: 5,
      title: 'Content Creation Workflow',
      thumbnail: 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'Lisa Thompson',
      duration: '36:44',
      views: '11.3K',
      date: 'Dec 5, 2024',
      description: 'Streamline your content creation process with proven workflows and automation tools.',
      category: 'Content',
    },
    {
      id: 6,
      title: 'Audio Engineering Basics',
      thumbnail: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'Alex Martinez',
      duration: '44:19',
      views: '7.6K',
      date: 'Dec 3, 2024',
      description: 'Master the fundamentals of audio engineering for professional-quality podcast production.',
      category: 'Audio',
    },
  ];

  const handlePlayVideo = (id: number) => {
    setPlayingVideo(playingVideo === id ? null : id);
  };

  return (
    <section id="podcasts" className="py-20 bg-zen-cream relative overflow-hidden">
      {/* Fixed Background Effect */}
      <div className="fixed-bg-box absolute inset-0 opacity-5" 
           style={{ backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-brown mb-6">
              Featured Podcasts
            </h2>
            <p className="text-xl text-zen-brown/70 max-w-3xl mx-auto leading-relaxed">
              Dive deep into conversations that matter with industry leaders and creative minds
            </p>
          </div>

          {/* Featured Podcast */}
          <div className="mb-16">
            <div className="card-shadow bg-white rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video Section */}
                <div className="relative group">
                  <img
                    src={podcasts[0].thumbnail}
                    alt={podcasts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-zen-brown/40 group-hover:bg-zen-brown/60 transition-colors duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handlePlayVideo(podcasts[0].id)}
                      className="fizzy-button w-20 h-20 bg-zen-rose hover:bg-zen-brown rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-zen-gradient text-white text-sm font-medium rounded-full">
                      {podcasts[0].category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-display font-bold text-zen-brown mb-4">
                    {podcasts[0].title}
                  </h3>
                  
                  <p className="text-zen-brown/70 mb-6 leading-relaxed">
                    {podcasts[0].description}
                  </p>

                  <div className="flex items-center space-x-6 text-zen-brown/60 mb-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>with {podcasts[0].guest}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{podcasts[0].duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Volume2 className="w-4 h-4" />
                      <span>{podcasts[0].views} views</span>
                    </div>
                  </div>

                  <button className="fizzy-button bg-zen-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 self-start">
                    Listen Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Podcast Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.slice(1).map((podcast, index) => (
              <div
                key={podcast.id}
                className="card-shadow bg-white rounded-2xl overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={podcast.thumbnail}
                    alt={podcast.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-zen-brown/40 group-hover:bg-zen-brown/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => handlePlayVideo(podcast.id)}
                      className="fizzy-button w-12 h-12 bg-zen-rose hover:bg-zen-brown rounded-full flex items-center justify-center"
                    >
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-zen-gradient text-white text-xs font-medium rounded-full">
                      {podcast.category}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                      {podcast.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-display font-semibold text-zen-brown mb-2 group-hover:text-zen-brown/80 transition-colors duration-300">
                    {podcast.title}
                  </h3>
                  
                  <p className="text-zen-brown/70 text-sm mb-4 leading-relaxed">
                    {podcast.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-zen-brown/60">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{podcast.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Volume2 className="w-3 h-3" />
                      <span>{podcast.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="fizzy-button bg-zen-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">
              View All Episodes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastVideos;