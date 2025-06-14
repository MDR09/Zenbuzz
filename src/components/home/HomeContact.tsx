import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeContact: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@zenbuzzmedia.com',
      action: 'mailto:hello@zenbuzzmedia.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mumbai, Maharashtra, India',
      action: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-zen-brown text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 border border-zen-rose rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-zen-rose rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Let's Create Together
            </h2>
            <p className="text-xl text-zen-cream max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Get in touch with us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-3xl font-display font-bold text-zen-cream mb-8">
                Get In Touch
              </h3>

              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="block group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4 p-6 bg-zen-brown/50 rounded-2xl hover:bg-zen-brown/70 transition-all duration-300 group-hover:transform group-hover:scale-105">
                    <div className="w-14 h-14 bg-zen-gradient rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-zen-cream mb-1">
                        {info.title}
                      </h4>
                      <p className="text-zen-cream/80">
                        {info.details}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-display font-bold text-zen-cream mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-zen-cream/80 mb-8 leading-relaxed">
                Whether you need podcast production, social media management, or complete digital marketing solutions, 
                we're here to help you achieve your goals.
              </p>
              
              <div className="space-y-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-zen-rose text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 fizzy-button"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <div className="text-zen-cream/60 text-sm">
                  Free consultation • Quick response • Professional service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;