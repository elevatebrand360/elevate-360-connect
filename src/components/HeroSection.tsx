import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import MeshBackground from './MeshBackground';

interface HeroSectionProps {
  heroImage?: string;
}

const HeroSection = ({ heroImage = "/images/hero-marketing.jpg" }: HeroSectionProps) => {
  return (
    <section className="w-full py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <MeshBackground opacity={0.1} />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            className="text-center lg:text-left space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block">
              <motion.div 
                className="bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 text-brand-orange text-sm font-medium inline-flex items-center gap-2 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                </span>
                Your 360° Marketing Partner
                <ChevronRight className="h-4 w-4" />
              </motion.div>
            </div>

            <div className="space-y-4">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-navy leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                We <motion.span 
                  className="text-brand-orange relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Elevate
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-2 bg-brand-orange/20"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  ></motion.span>
                </motion.span> Your Brand to New Heights
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Full-service digital marketing agency helping brands make powerful connections in the digital world.
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              {[
                { icon: "🚀", title: "150%", subtitle: "Avg. Growth", color: "orange" },
                { icon: "🎯", title: "100%", subtitle: "Success Rate", color: "navy" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/30 backdrop-blur-xl p-3 sm:p-4 rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-brand-${item.color}/20 flex items-center justify-center`}>
                      <span className="text-lg sm:text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy text-sm sm:text-base">{item.title}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="pt-4 sm:pt-6"
            >
              <Button 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2 rounded-full text-sm sm:text-base"
                onClick={() => window.location.href = '#contact'}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative lg:ml-auto order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.div 
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {heroImage ? (
                <motion.img
                  src={heroImage}
                  alt="Digital Marketing Excellence"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <p className="text-gray-500">Add your hero image</p>
                </div>
              )}
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"
              ></motion.div>

              <motion.div 
                className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-orange/20 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-brand-navy/20 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2] 
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
