import { ArrowRight, Globe, Palette, MessageSquare, Camera, Video, Smartphone, BadgePercent } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MeshBackground from './MeshBackground';

const services = [
  {
    id: 'web',
    title: 'Web Design & Development',
    icon: <Globe className="h-6 w-6" />,
    description: 'Creative web design, development, copywriting, and e-commerce solutions.',
    items: ['Creative Web Design', 'Web Development', 'Copywriting', 'E-Commerce'],
    bgImage: '/images/services/web-design-bg.jpg'
  },
  {
    id: 'branding',
    title: 'Branding',
    icon: <Palette className="h-6 w-6" />,
    description: 'Comprehensive brand strategy, tone of voice, and visual identity development.',
    items: ['Brand Strategy', 'Tone of Voice', 'Visual Identity'],
    bgImage: '/images/services/branding-bg.jpg'
  },
  {
    id: 'digital',
    title: 'Digital Marketing',
    icon: <BadgePercent className="h-6 w-6" />,
    description: 'Creative campaigns and ongoing marketing support to grow your brand.',
    items: ['Creative Campaigns', 'Marketing Support'],
    bgImage: '/images/services/digital-marketing-bg.jpg'
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    icon: <MessageSquare className="h-6 w-6" />,
    description: 'Strategic content creation and social media account management.',
    items: ['Content Strategy', 'Social Media Account Management'],
    bgImage: '/images/services/social-media-bg.jpg'
  },
  {
    id: 'product',
    title: 'Product Shoot',
    icon: <Camera className="h-6 w-6" />,
    description: 'Professional product photography to showcase your offerings.',
    items: ['Product Photography'],
    bgImage: '/images/services/product-shoot-bg.jpg'
  },
  {
    id: 'video',
    title: 'Videography',
    icon: <Video className="h-6 w-6" />,
    description: 'Dynamic video content for your brand and marketing campaigns.',
    items: ['Video Production', 'Video Editing'],
    bgImage: '/images/services/videography-bg.jpg'
  },
  {
    id: 'app',
    title: 'App Development',
    icon: <Smartphone className="h-6 w-6" />,
    description: 'Custom Android and iOS application development.',
    items: ['Android Development', 'iOS Development'],
    bgImage: '/images/services/app-dev-bg.jpg'
  },
  {
    id: 'advertising',
    title: 'Advertising',
    icon: <BadgePercent className="h-6 w-6" />,
    description: 'Strategic advertising campaigns to boost your brand visibility.',
    items: ['Paid Advertising', 'Campaign Management'],
    bgImage: '/images/services/advertising-bg.jpg'
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full py-20 md:py-32 relative overflow-hidden">
      <MeshBackground opacity={0.15} />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 text-brand-orange text-sm font-medium inline-flex items-center gap-2 border border-white/20 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              Our Services
            </div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Services We Offer
          </h2>
          <p className="text-gray-600 md:text-lg">
            Comprehensive digital solutions to help your brand succeed in the modern marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-2xl transition-all duration-300 h-full overflow-hidden backdrop-blur-lg group-hover:scale-[1.02]">
                {/* Enhanced Glass effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/60 backdrop-blur-xl"></div>
                
                {/* Service background image with enhanced effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img 
                    src={service.bgImage} 
                    alt="" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Enhanced Glass border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"></div>

                {/* Content */}
                <div className="relative p-8">
                  <div className="mb-6">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors border border-white/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-brand-orange">
                        {service.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {service.items.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center gap-2 text-gray-600 bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm rounded-lg px-3 py-1"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-1 h-1 rounded-full bg-brand-orange"></div>
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="mt-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a 
                      href="#contact" 
                      className="inline-flex items-center text-sm font-medium text-brand-orange hover:text-brand-navy transition-colors bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm rounded-lg px-4 py-2"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom Logo */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-white/40 via-white/30 to-white/20 backdrop-blur-xl border border-white/20 shadow-2xl">
            <img 
              src="/lovable-uploads/d14c579e-ba6b-4e43-b9b0-06293dd7f20b.png"
              alt="Elevate Brand 360"
              className="h-16 md:h-20 w-auto opacity-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
