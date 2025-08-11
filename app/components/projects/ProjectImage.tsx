'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface ProjectImageProps {
  category: string;
  isHovered: boolean;
  image?: string;
  title?: string;
}


export const ProjectImage = ({ category, isHovered, image, title }: ProjectImageProps) => {
  return (
    <motion.div
      className="h-48 bg-gradient-to-br from-purple-primary/20 to-purple-accent/20 relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image or Gradient Background */}
      {image ? (
        <>
          <img
            src={image}
            alt={title || category}
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/30 to-transparent" />
          
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
        </>
      )}
      
      {/* Category Display */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center gap-2 text-white/90">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-medium">{category}</span>
        </div>
      </div>
    </motion.div>
  );
};
