import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Play, Clock, Users, Calendar, Volume2, Filter, Search } from 'lucide-react';

const Podcasts: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Marketing', 'Production', 'Branding', 'Social Media', 'Content', 'Audio'];

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
      season: 'Season 2',
      episode: 'Episode 15'
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
      season: 'Season 2',
      episode: 'Episode 14'
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
      season: 'Season 2',
      episode: 'Episode 13'
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
      season: 'Season 2',
      episode: 'Episode 12'
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
      season: 'Season 2',
      episode: 'Episode 11'
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
      season: 'Season 2',
      episode: 'Episode 10'
    },
    {
      id: 7,
      title: 'Monetizing Your Podcast',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'Rachel Green',
      duration: '49:15',
      views: '13.7K',
      date: 'Nov 28, 2024',
      description: 'Explore various monetization strategies for your podcast and build sustainable revenue streams.',
      category: 'Marketing',
      season: 'Season 2',
      episode: 'Episode 9'
    },
    {
      id: 8,
      title: 'The Art of Storytelling',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      guest: 'James Wilson',
      duration: '55:22',
      views: '16.4K',
      date: 'Nov 25, 2024',
      description: 'Learn the fundamentals of compelling storytelling that keeps your audience engaged.',
      category: 'Content',
      season: 'Season 2',
      episode: 'Episode 8'
    }
  ];

  const filteredPodcasts = podcasts.filter(podcast => {
    const matchesCategory = selectedCategory === 'All' || podcast.category === selectedCategory;
    const matchesSearch = podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         podcast.guest.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePlayVideo = (id: number) => {
    setPlayingVideo(playingVideo === id ? null : id);
  };

  const featuredPodcast = podcasts[0];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-zen-light-gradient">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-zen-brown mb-6">
            ZenBuzz Podcast
          </h1>
          <p className="text-xl text-zen-brown/70 max-w-3xl mx-auto leading-relaxed">
            Dive deep into conversations that matter with industry leaders and creative minds
          </p>
        </div>
      </section>

      {/* Featured Podcast */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="card-shadow bg-white rounded-3xl overflow-hidden mb-16">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative group">
                <img
                  src={featuredPodcast.thumbnail}
                  alt={featuredPodcast.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-zen-brown/40 group-hover:bg-zen-brown/60 transition-colors duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handlePlayVideo(featuredPodcast.id)}
                    className="fizzy-button w-20 h-20 bg-zen-rose hover:bg-zen-brown rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-zen-rose text-white text-sm font-medium rounded-full">
                    Latest Episode
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-zen-light text-zen-brown text-sm font-medium rounded-full">
                    {featuredPodcast.category}
                  </span>
                </div>
                
                <h2 className="text-3xl font-display font-bold text-zen-brown mb-4">
                  {featuredPodcast.title}
                </h2>
                
                <p className="text-zen-brown/70 mb-6 leading-relaxed">
                  {featuredPodcast.description}
                </p>

                <div className="flex items-center space-x-6 text-zen-brown/60 mb-6">
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
                  <button className="fizzy-button bg-zen-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                    Listen Now
                  </button>
                  <button className="fizzy-button border-2 border-zen-brown text-zen-brown px-6 py-3 rounded-full font-semibold hover:bg-zen-brown hover:text-white transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10 bg-zen-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zen-brown/50" />
              <input
                type="text"
                placeholder="Search episodes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-zen-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-zen-rose focus:border-zen-rose transition-all duration-300"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-zen-brown/50" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-zen-gradient text-white'
                        : 'bg-white text-zen-brown hover:bg-zen-rose hover:text-white'
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

      {/* Podcast Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPodcasts.slice(1).map((podcast, index) => (
                <div
                  key={podcast.id}
                  className="card-shadow bg-white rounded-2xl overflow-hidden group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
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

                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-zen-gradient text-white text-xs font-medium rounded-full">
                        {podcast.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                        {podcast.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-zen-brown/60 mb-2">
                      <span>{podcast.season}</span>
                      <span>{podcast.episode}</span>
                    </div>
                    
                    <h3 className="text-lg font-display font-semibold text-zen-brown mb-2 group-hover:text-zen-brown/80 transition-colors duration-300">
                      {podcast.title}
                    </h3>
                    
                    <p className="text-zen-brown/70 text-sm mb-4 leading-relaxed">
                      {podcast.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-zen-brown/60 mb-4">
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
                      <div className="flex items-center space-x-1 text-xs text-zen-brown/60">
                        <Volume2 className="w-3 h-3" />
                        <span>{podcast.views}</span>
                      </div>
                      <button className="fizzy-button bg-zen-rose text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zen-brown transition-all duration-300">
                        Listen
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPodcasts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-zen-brown/70 text-lg">
                  No episodes found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-zen-brown text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Never Miss an Episode
          </h2>
          <p className="text-xl text-zen-cream/80 mb-8 max-w-2xl mx-auto">
            Subscribe to ZenBuzz Podcast and get notified when new episodes are released
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="fizzy-button bg-zen-rose text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">
              Subscribe on Spotify
            </button>
            <button className="fizzy-button border-2 border-zen-cream text-zen-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-zen-cream hover:text-zen-brown transition-all duration-300">
              Subscribe on Apple Podcasts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcasts;