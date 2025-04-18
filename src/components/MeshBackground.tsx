import { motion } from 'framer-motion';

interface MeshBackgroundProps {
  className?: string;
  opacity?: number;
}

const MeshBackground = ({ className = '', opacity = 0.1 }: MeshBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base gradient background */}
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1),transparent_70%)]"></div>
      
      {/* Dynamic Mesh Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,166,0,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(0,0,128,0.1),transparent_50%)]"></div>
      </div>

      {/* Animated Lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent"
          style={{
            top: `${(i + 1) * 12.5}%`,
            transform: `rotate(${Math.random() * 10 - 5}deg)`,
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Animated Grid Pattern */}
      <div className={`absolute inset-0 opacity-[${opacity}]`}>
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              className="h-full w-full border border-brand-navy/10 rounded-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-brand-orange/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-brand-navy/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
    </div>
  );
};

export default MeshBackground; 