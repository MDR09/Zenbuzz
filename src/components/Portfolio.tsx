import React, { useState } from 'react';
import { ExternalLink, Heart, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "EcoLife Brand Identity",
      category: "branding",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete brand identity and digital presence for sustainable lifestyle brand",
      client: "EcoLife Solutions",
      year: "2024"
    },
    {
      id: 2,
      title: "TechStart Mobile App",
      category: "development",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Modern mobile app design and development for fintech startup",
      client: "TechStart Inc.",
      year: "2024"
    },
    {
      id: 3,
      title: "Fashion Forward Campaign",
      category: "marketing",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Multi-channel digital marketing campaign for fashion retailer",
      client: "Fashion Forward",
      year: "2023"
    },
    {
      id: 4,
      title: "Restaurant Chain Website",
      category: "development",
      image: "https://images.pexels.com/photos/3184350/pexels-photo-3184350.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "E-commerce website with online ordering system",
      client: "Gourmet Bites",
      year: "2023"
    },
    {
      id: 5,
      title: "Health & Wellness Rebrand",
      category: "branding",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete rebranding and digital transformation",
      client: "Wellness Hub",
      year: "2024"
    },
    {
      id: 6,
      title: "Social Media Mastery",
      category: "marketing",
      image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive social media strategy and content creation",
      client: "Social Sphere",
      year: "2023"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'development', label: 'Development' },
    { id: 'marketing', label: 'Marketing' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-primary-400" />
            <span className="text-sm font-medium text-dark-brown">Our Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-brown mb-6 leading-tight">
            Featured Projects &
            <span className="text-primary-400 block">Success Stories</span>
          </h2>
          
          <p className="text-lg text-dark-brown/80 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful campaigns and digital transformations 
            that have helped brands achieve remarkable growth and engagement.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-primary-400 text-white shadow-lg'
                  : 'bg-primary-50 text-dark-brown hover:bg-primary-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg">
                      <Eye className="h-5 w-5 text-dark-brown" />
                    </button>
                    <button className="w-12 h-12 bg-primary-400 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 shadow-lg">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-xs text-dark-brown/60">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-dark-brown mb-2 group-hover:text-primary-500 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-dark-brown/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-dark-brown/60">
                    {project.client}
                  </span>
                  <button className="text-primary-400 hover:text-primary-500 font-medium text-sm transition-colors duration-300">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-slide-up">
          <h3 className="text-3xl font-display font-bold text-dark-brown mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-lg text-dark-brown/80 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next project and create digital experiences that drive results.
          </p>
          <button className="bg-primary-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;