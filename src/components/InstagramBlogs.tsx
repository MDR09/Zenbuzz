import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, MessageCircle, Share2, Bookmark, ExternalLink } from 'lucide-react';

const InstagramBlogs: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: '5 Podcast Tips for Beginners',
      excerpt: 'Starting your podcasting journey? Here are essential tips to get you started on the right track.',
      likes: 234,
      comments: 45,
      date: '2 days ago',
      category: 'Podcasting',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Social Media Trends 2025',
      excerpt: 'Discover the latest social media trends that will dominate 2025 and how to leverage them.',
      likes: 189,
      comments: 32,
      date: '4 days ago',
      category: 'Social Media',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Content Creation Workflow',
      excerpt: 'Streamline your content creation process with our proven workflow system.',
      likes: 156,
      comments: 28,
      date: '1 week ago',
      category: 'Content',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Brand Voice Development',
      excerpt: 'Learn how to develop a unique brand voice that resonates with your target audience.',
      likes: 287,
      comments: 53,
      date: '1 week ago',
      category: 'Branding',
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Audio Quality Essentials',
      excerpt: 'Professional audio tips to make your content sound crisp and engaging.',
      likes: 198,
      comments: 37,
      date: '2 weeks ago',
      category: 'Audio',
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Digital Marketing ROI',
      excerpt: 'Measuring and maximizing your digital marketing return on investment.',
      likes: 245,
      comments: 41,
      date: '2 weeks ago',
      category: 'Marketing',
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-brown mb-6">
              Instagram Blogs
            </h2>
            <p className="text-xl text-zen-brown/70 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest insights, tips, and behind-the-scenes content
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="card-shadow bg-white rounded-2xl overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                {/* Image Container with Mask Effect */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-zen-brown/20 group-hover:bg-zen-brown/40 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zen-rose text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Hover Actions */}
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

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-zen-brown mb-3 group-hover:text-zen-brown/80 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-zen-brown/70 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Engagement Metrics */}
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
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="fizzy-button bg-zen-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">
              View All Blog Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramBlogs;