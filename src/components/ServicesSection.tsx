import { useState } from 'react';
import { ArrowRight, Globe, Palette, MessageSquare, Camera, Video, Smartphone, BadgePercent } from 'lucide-react';
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 md:py-24 relative perspective-1000">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Services We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                p-6 rounded-xl 
                backdrop-blur-lg 
                transform-gpu
                hover:transform-gpu
                hover:-translate-y-2
                hover:rotate-2
                ${hoveredIndex === index 
                  ? 'bg-white/80 shadow-xl border-t-4 border-brand-orange translate-z-12' 
                  : 'bg-white/40 hover:bg-white/60 hover:shadow-2xl'
                }
                transition-all duration-300 ease-out
                preserve-3d
              `}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="flex items-center gap-3 mb-4 transform-gpu translate-z-20">
                <div className={`p-2 rounded-lg transform-gpu hover:scale-110 transition-transform ${
                  hoveredIndex === index 
                  ? 'bg-brand-orange/10 text-brand-orange shadow-lg' 
                  : 'bg-white/50 text-gray-600'
                }`}>
                  {service.icon}
                </div>
                <h3 className="font-semibold text-brand-navy">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 transform-gpu translate-z-10">{service.description}</p>
              <ul className="space-y-2 transform-gpu translate-z-10">
                {service.items.map((item, i) => (
                  <li key={i} className="text-sm flex items-center gap-2 text-gray-600">
                    <ArrowRight className="h-4 w-4 text-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
