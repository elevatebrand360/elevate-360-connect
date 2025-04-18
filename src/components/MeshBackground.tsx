import { motion } from 'framer-motion';

interface MeshBackgroundProps {
  className?: string;
  opacity?: number;
}

const MeshBackground = ({ className = '', opacity = 0.1 }: MeshBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-orange/5 to-brand-navy/5"></div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px]">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-brand-navy/10 to-transparent"></div>
      </div>

      {/* Subtle glass highlights */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>
    </div>
  );
};

export default MeshBackground;