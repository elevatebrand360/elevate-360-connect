// Remove motion imports and simplify the component
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ heroImage = "/images/hero-marketing.jpg" }) => {
  return (
    <section className="w-full py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="inline-block">
              <div className="bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 text-brand-orange text-sm font-medium inline-flex items-center gap-2">
                Your 360° Marketing Partner
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-navy leading-tight">
                We <span className="text-brand-orange">Elevate</span> Your Brand to New Heights
              </h1>
              
              <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                Full-service digital marketing agency helping brands make powerful connections in the digital world.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {/* Static stats cards */}
            </div>

            <div className="pt-4 sm:pt-6">
              <Button 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm sm:text-base"
                onClick={() => window.location.href = '#contact'}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative lg:ml-auto order-first lg:order-last">
            <div className="relative aspect-[16/9] w-full max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Digital Marketing Excellence"
                className="w-full h-full object-cover object-center"
                style={{
                  objectPosition: '50% 50%',
                  maxHeight: '600px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
