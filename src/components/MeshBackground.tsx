import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MeshBackgroundProps {
  className?: string;
  opacity?: number;
}

const MeshBackground = ({ className = '', opacity = 0.1 }: MeshBackgroundProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base gradient background */}
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1),transparent_70%)]"></div>
      
      {/* Dynamic Mesh Gradient - Simplified for mobile */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,166,0,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,0,128,0.1),transparent_50%)]"></div>
      </div>

      {/* Reduced number of animated lines for mobile */}
      {!isMobile && [...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent"
          style={{
            top: `${(i + 1) * 25}%`,
            transform: `rotate(${Math.random() * 10 - 5}deg)`,
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: i * 2,
          }}
        />
      ))}

      {/* Simplified grid pattern for mobile */}
      {!isMobile && (
        <div className={`absolute inset-0 opacity-[${opacity}]`}>
          <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 gap-4">
            {[...Array(72)].map((_, i) => (
              <motion.div
                key={i}
                className="h-full w-full border border-brand-navy/10 rounded-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Simplified gradient orbs with reduced animation complexity */}
      <motion.div 
        className="absolute -top-1/4 -right-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-brand-orange/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute -bottom-1/4 -left-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-brand-navy/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
      />
    </div>
  );
};

export default MeshBackground;