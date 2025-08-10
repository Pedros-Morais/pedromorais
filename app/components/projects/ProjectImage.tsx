'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface ProjectImageProps {
  category: string;
  isHovered: boolean;
}

/**
 * Project image placeholder component with animated grid pattern
 * Features gradient backgrounds and category display
 */
export const ProjectImage = ({ category, isHovered }: ProjectImageProps) => {
  return (
    <motion.div
      className="h-48 bg-gradient-to-br from-purple-primary/20 to-purple-accent/20 relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/30 to-transparent" />
      
      {/* Category Display */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2 text-white/80">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-medium">{category}</span>
        </div>
      </div>
      
      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '20px 20px']
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  );
};
