import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, MessageCircle, Share2, Bookmark, ExternalLink, Search, Filter } from 'lucide-react';

const Blogs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Podcasting', 'Social Media', 'Content', 'Branding', 'Audio', 'Marketing'];

  const blogPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: '5 Podcast Tips for Beginners',
      excerpt: 'Starting your podcasting journey? Here are essential tips to get you started on the right track.',
      content: 'Podcasting has become one of the most powerful mediums for storytelling and brand building...',
      likes: 234,
      comments: 45,
      date: '2 days ago',
      category: 'Podcasting',
      readTime: '5 min read',
      author: 'Arjun Sharma'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Social Media Trends 2025',
      excerpt: 'Discover the latest social media trends that will dominate 2025 and how to leverage them.',
      content: 'The social media landscape is constantly evolving, and staying ahead of trends is crucial...',
      likes: 189,
      comments: 32,
      date: '4 days ago',
      category: 'Social Media',
      readTime: '7 min read',
      author: 'Priya Patel'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Content Creation Workflow',
      excerpt: 'Streamline your content creation process with our proven workflow system.',
      content: 'Creating consistent, high-quality content requires a systematic approach...',
      likes: 156,
      comments: 28,
      date: '1 week ago',
      category: 'Content',
      readTime: '6 min read',
      author: 'Sneha Gupta'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Brand Voice Development',
      excerpt: 'Learn how to develop a unique brand voice that resonates with your target audience.',
      content: 'Your brand voice is more than just the words you use – it\'s the personality...',
      likes: 287,
      comments: 53,
      date: '1 week ago',
      category: 'Branding',
      readTime: '8 min read',
      author: 'Arjun Sharma'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Audio Quality Essentials',
      excerpt: 'Professional audio tips to make your content sound crisp and engaging.',
      content: 'Good audio quality can make or break your podcast or video content...',
      likes: 198,
      comments: 37,
      date: '2 weeks ago',
      category: 'Audio',
      readTime: '4 min read',
      author: 'Rahul Kumar'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Digital Marketing ROI',
      excerpt: 'Measuring and maximizing your digital marketing return on investment.',
      content: 'Understanding and optimizing your marketing ROI is crucial for business growth...',
      likes: 245,
      comments: 41,
      date: '2 weeks ago',
      category: 'Marketing',
      readTime: '9 min read',
      author: 'Priya Patel'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Building Podcast Communities',
      excerpt: 'How to create and nurture engaged communities around your podcast content.',
      content: 'Community building is essential for podcast growth and listener retention...',
      likes: 167,
      comments: 29,
      date: '3 weeks ago',
      category: 'Podcasting',
      readTime: '6 min read',
      author: 'Arjun Sharma'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Instagram Reels Strategy',
      excerpt: 'Master the art of creating viral Instagram Reels that boost engagement.',
      content: 'Instagram Reels have become a powerful tool for reaching new audiences...',
      likes: 312,
      comments: 67,
      date: '3 weeks ago',
      category: 'Social Media',
      readTime: '5 min read',
      author: 'Sneha Gupta'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-zen-light-gradient">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-zen-brown mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-zen-brown/70 max-w-3xl mx-auto leading-relaxed">
            Insights, tips, and stories from the world of digital media and content creation
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="card-shadow bg-white rounded-3xl overflow-hidden mb-16">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative group">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-zen-brown/20 group-hover:bg-zen-brown/40 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-zen-rose text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-zen-light text-zen-brown text-sm font-medium rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl font-display font-bold text-zen-brown mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-zen-brown/70 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-zen-brown/60 mb-6">
                  <div className="flex items-center space-x-4">
                    <span>By {featuredPost.author}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <span>{featuredPost.date}</span>
                </div>
                <button className="fizzy-button bg-zen-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 self-start">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10 bg-zen-light">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zen-brown/50" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-zen-beige rounded-xl focus:outline-none focus:ring-2 focus:ring-zen-rose focus:border-zen-rose transition-all duration-300"
              />
            </div>

            {/* Categories */}
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

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post, index) => (
                <article
                  key={post.id}
                  className="card-shadow bg-white rounded-2xl overflow-hidden group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-zen-brown/20 group-hover:bg-zen-brown/40 transition-colors duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-zen-rose text-white text-sm font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                    {hoveredPost === post.id && (
                      <div className="absolute top-4 right-4 flex space-x-2 animate-fade-in">
                        <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                          <Bookmark className="w-4 h-4 text-zen-brown" />
                        </button>
                        <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                          <ExternalLink className="w-4 h-4 text-zen-brown" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-zen-brown mb-3 group-hover:text-zen-brown/80 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-zen-brown/70 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-zen-brown/60 mb-4">
                      <div className="flex items-center space-x-2">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-zen-brown/60">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share2 className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-zen-brown/70 text-lg">
                  No articles found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-zen-brown text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-zen-cream/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights and tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-zen-brown focus:outline-none focus:ring-2 focus:ring-zen-rose"
            />
            <button className="fizzy-button bg-zen-rose text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;