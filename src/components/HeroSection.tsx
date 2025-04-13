import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  heroImage?: string;
}

const HeroSection = ({ heroImage = "/images/your-hero-image.jpg" }: HeroSectionProps) => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4 animate-fade-in">
            <div className="inline-block rounded-lg bg-brand-orange/10 px-3 py-1 text-sm text-brand-orange">
              Your 360° Marketing Partner
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-brand-navy">
              We <span className="text-brand-orange">Elevate</span> Your Brand to New Heights
            </h1>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Full-service digital marketing agency helping brands make powerful connections in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-brand-navy hover:bg-brand-orange text-white">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy/10">
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="relative lg:ml-auto animate-fade-in">
            <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden bg-gradient-to-br from-brand-navy/5 to-brand-orange/5 border border-gray-200">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt="Hero Image"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center p-6">
                    <p className="text-brand-navy">Hero Image</p>
                    <p className="text-sm">(Add your creative showcase image here)</p>
                  </div>
                </div>
              )}
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-orange/20 blur-xl"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand-navy/20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
