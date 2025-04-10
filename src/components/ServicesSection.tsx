
import { useState } from 'react';
import { ArrowRight, Globe, Palette, MessageSquare, Camera, Video, Smartphone, BadgePercent } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    id: 'web',
    title: 'Web Design & Development',
    icon: <Globe className="h-6 w-6 text-brand-orange" />,
    description: 'Creative web design, development, copywriting, and e-commerce solutions.',
    items: ['Creative Web Design', 'Web Development', 'Copywriting', 'E-Commerce'],
  },
  {
    id: 'branding',
    title: 'Branding',
    icon: <Palette className="h-6 w-6 text-brand-orange" />,
    description: 'Comprehensive brand strategy, tone of voice, and visual identity development.',
    items: ['Brand Strategy', 'Tone of Voice', 'Visual Identity'],
  },
  {
    id: 'digital',
    title: 'Digital Marketing',
    icon: <BadgePercent className="h-6 w-6 text-brand-orange" />,
    description: 'Creative campaigns and ongoing marketing support to grow your brand.',
    items: ['Creative Campaigns', 'Marketing Support'],
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    icon: <MessageSquare className="h-6 w-6 text-brand-orange" />,
    description: 'Strategic content creation and social media account management.',
    items: ['Content Strategy', 'Social Media Account Management'],
  },
  {
    id: 'product',
    title: 'Product Shoot',
    icon: <Camera className="h-6 w-6 text-brand-orange" />,
    description: 'Professional product photography to showcase your offerings.',
    items: ['Product Photography'],
  },
  {
    id: 'video',
    title: 'Videography',
    icon: <Video className="h-6 w-6 text-brand-orange" />,
    description: 'Dynamic video content for your brand and marketing campaigns.',
    items: ['Video Production', 'Video Editing'],
  },
  {
    id: 'app',
    title: 'App Development',
    icon: <Smartphone className="h-6 w-6 text-brand-orange" />,
    description: 'Custom Android and iOS application development.',
    items: ['Android Development', 'iOS Development'],
  },
  {
    id: 'advertising',
    title: 'Advertising',
    icon: <BadgePercent className="h-6 w-6 text-brand-orange" />,
    description: 'Strategic advertising campaigns to boost your brand visibility.',
    items: ['Paid Advertising', 'Campaign Management'],
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Our Services</h2>
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
            We offer a comprehensive range of services to elevate your brand's digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`overflow-hidden transition-all duration-300 h-full ${
                activeService === service.id 
                  ? 'ring-2 ring-brand-orange shadow-lg' 
                  : 'hover:shadow-md'
              }`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  {service.icon}
                  <CardTitle className="text-xl text-brand-navy">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription>{service.description}</CardDescription>
                <ul className="space-y-1">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange"></span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-brand-orange hover:underline mt-2"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
