import React, { useState } from 'react';
import { Instagram, Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "5 Digital Marketing Trends That Will Dominate 2024",
      excerpt: "Discover the latest trends shaping the digital marketing landscape and how to leverage them for your brand's success.",
      content: "The digital marketing landscape is constantly evolving, and staying ahead of the curve is crucial for business success...",
      author: "Priya Sharma",
      date: "December 15, 2024",
      category: "Digital Marketing",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Trends", "Digital Marketing", "2024", "Strategy"],
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Brand Identity in the Digital Age",
      excerpt: "How to create a memorable brand that resonates with your audience across all digital touchpoints.",
      content: "In today's digital-first world, building a strong brand identity requires more than just a logo and color scheme...",
      author: "Arjun Patel",
      date: "December 10, 2024",
      category: "Branding",
      image: "https://images.pexels.com/photos/3184350/pexels-photo-3184350.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Branding", "Identity", "Digital", "Design"],
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Power of Visual Storytelling on Instagram",
      excerpt: "Learn how to craft compelling visual narratives that engage your Instagram audience and drive meaningful connections.",
      content: "Instagram has become the ultimate platform for visual storytelling, with over 2 billion active users...",
      author: "Sneha Reddy",
      date: "December 5, 2024",
      category: "Social Media",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Instagram", "Visual", "Storytelling", "Social Media"],
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "ROI-Driven Performance Marketing Strategies",
      excerpt: "Maximize your marketing budget with proven performance marketing tactics that deliver measurable results.",
      content: "Performance marketing is all about accountability and measurable results. Unlike traditional marketing...",
      author: "Priya Sharma",
      date: "November 28, 2024",
      category: "Performance Marketing",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["ROI", "Performance", "Marketing", "Analytics"],
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "UX Design Principles for Better Conversions",
      excerpt: "Essential UX design principles that can significantly improve your website's conversion rates and user satisfaction.",
      content: "User experience design is not just about making things look pretty – it's about creating intuitive...",
      author: "Sneha Reddy",
      date: "November 20, 2024",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["UX", "Design", "Conversion", "User Experience"],
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Content Marketing That Actually Converts",
      excerpt: "Create content that not only engages your audience but also drives them to take meaningful action.",
      content: "Content marketing has evolved far beyond just creating blog posts and hoping for the best...",
      author: "Arjun Patel",
      date: "November 15, 2024",
      category: "Content Marketing",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Content", "Marketing", "Conversion", "Strategy"],
      readTime: "7 min read"
    }
  ];

  const categories = [
    'all',
    'Digital Marketing',
    'Branding',
    'Social Media',
    'Performance Marketing',
    'Design',
    'Content Marketing'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream via-light-cream to-tan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <Instagram className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-dark-brown">ZenBuzz Blog</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-dark-brown mb-6 leading-tight">
              Digital Marketing 
              <span className="text-primary-400 block">Insights & Tips</span>
            </h1>
            
            <p className="text-xl text-dark-brown/80 max-w-4xl mx-auto leading-relaxed">
              Stay ahead of the curve with our latest insights, trends, and actionable tips 
              for digital marketing success. Learn from our experts and industry leaders.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-dark-brown/40" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-dark-brown mb-8">Featured Article</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-primary-50 to-light-cream rounded-3xl p-8 lg:p-12">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-primary-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-dark-brown/60 text-sm">{blogPosts[0].readTime}</span>
                </div>
                
                <h3 className="text-3xl font-display font-bold text-dark-brown mb-4">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-lg text-dark-brown/80 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-primary-400" />
                    <span className="text-sm text-dark-brown/70">{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary-400" />
                    <span className="text-sm text-dark-brown/70">{blogPosts[0].date}</span>
                  </div>
                </div>
                
                <button className="bg-primary-400 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              
              <div className="relative">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-light-cream to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-bold text-dark-brown">
              Latest Articles
            </h2>
            <div className="text-sm text-dark-brown/70">
              Showing {filteredPosts.length} articles
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <article 
                key={post.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border border-white/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-dark-brown/60">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-dark-brown mb-3 group-hover:text-primary-500 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-dark-brown/70 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="inline-flex items-center space-x-1 text-xs bg-primary-50 text-primary-400 px-2 py-1 rounded-full">
                        <Tag className="h-2 w-2" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-dark-brown/60">{post.readTime}</span>
                    <button className="text-primary-400 hover:text-primary-500 font-medium text-sm transition-colors duration-300 inline-flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary-400 to-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest digital marketing tips, trends, and strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <button className="bg-white text-primary-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;