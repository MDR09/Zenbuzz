import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeBlogPreview: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: '5 Podcast Tips for Beginners',
      excerpt: 'Starting your podcasting journey? Here are essential tips to get you started.',
      likes: 234,
      comments: 45,
      date: '2 days ago',
      category: 'Podcasting',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Social Media Trends 2025',
      excerpt: 'Discover the latest social media trends that will dominate 2025.',
      likes: 189,
      comments: 32,
      date: '4 days ago',
      category: 'Social Media',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Content Creation Workflow',
      excerpt: 'Streamline your content creation process with our proven workflow.',
      likes: 156,
      comments: 28,
      date: '1 week ago',
      category: 'Content',
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-brown mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-zen-brown/70 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest insights and tips
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="card-shadow bg-white rounded-2xl overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
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
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-zen-brown mb-3 group-hover:text-zen-brown/80 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-zen-brown/70 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

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
                    </div>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/blogs"
              className="inline-flex items-center space-x-2 bg-zen-gradient text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 fizzy-button"
            >
              <span>Read All Articles</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogPreview;