import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Play, Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePodcastPreview: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const podcasts = [
    {
      id: 1,
      title: 'The Future of Digital Marketing',
      thumbnail: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'Sarah Johnson',
      duration: '45:32',
      views: '12.5K',
      category: 'Marketing',
    },
    {
      id: 2,
      title: 'Podcast Production Mastery',
      thumbnail: 'https://images.pexels.com/photos/3184319/pexels-photo-3184319.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'Mike Chen',
      duration: '38:15',
      views: '8.9K',
      category: 'Production',
    },
    {
      id: 3,
      title: 'Building Your Brand Voice',
      thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'Emily Rodriguez',
      duration: '52:08',
      views: '15.2K',
      category: 'Branding',
    },
  ];

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
              Conversations that matter with industry leaders
            </p>
          </div>

          {/* Podcast Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {podcasts.map((podcast, index) => (
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
                    <button className="fizzy-button w-12 h-12 bg-zen-rose hover:bg-zen-brown rounded-full flex items-center justify-center">
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
                  
                  <div className="flex items-center justify-between text-sm text-zen-brown/60">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{podcast.guest}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{podcast.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/podcasts"
              className="inline-flex items-center space-x-2 bg-zen-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 fizzy-button"
            >
              <span>View All Episodes</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePodcastPreview;