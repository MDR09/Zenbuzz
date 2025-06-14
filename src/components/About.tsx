import React from 'react';
import { Award, Heart, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team brainstorming session" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl animate-float">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-primary-400" />
                  <div>
                    <div className="text-xl font-bold text-dark-brown">Award Winner</div>
                    <div className="text-sm text-dark-brown/70">Digital Excellence 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-slide-in-right">
            <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-primary-400" />
              <span className="text-sm font-medium text-dark-brown">About ZenBuzz Media</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-brown mb-6 leading-tight">
              We Create Digital 
              <span className="text-primary-400 block">Experiences That Matter</span>
            </h2>

            <p className="text-lg text-dark-brown/80 mb-8 leading-relaxed">
              At ZenBuzz Media, we believe in the power of authentic storytelling and strategic innovation. 
              Our passionate team combines creativity with data-driven insights to deliver campaigns that 
              not only look stunning but also drive real business results.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                  <Target className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-brown mb-2">Strategic Approach</h3>
                  <p className="text-dark-brown/70">Every campaign starts with understanding your unique goals and audience insights.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                  <Users className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-brown mb-2">Collaborative Partnership</h3>
                  <p className="text-dark-brown/70">We work alongside you as an extended team, ensuring transparency and alignment.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn More About Us
              </button>
              <button className="border-2 border-primary-200 text-dark-brown px-8 py-3 rounded-full font-semibold hover:border-primary-400 hover:bg-primary-50 transition-all duration-300">
                View Our Process
              </button>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation First",
              description: "We stay ahead of digital trends to keep your brand at the forefront of innovation.",
              icon: "🚀"
            },
            {
              title: "Results Driven",
              description: "Every strategy is designed with measurable outcomes and ROI in mind.",
              icon: "📈"
            },
            {
              title: "Client Focused",
              description: "Your success is our success. We're committed to exceeding your expectations.",
              icon: "🎯"
            }
          ].map((value, index) => (
            <div key={index} className="group bg-gradient-to-br from-primary-50 to-light-cream p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
              <h3 className="text-xl font-semibold text-dark-brown mb-3">{value.title}</h3>
              <p className="text-dark-brown/70 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;