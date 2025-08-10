'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { FeaturedBadgeProps } from './types';

/**
 * Featured badge component with glow effect and subtle animations
 * Displays a star icon with "Featured" text for highlighted projects
 */
export const FeaturedBadge = ({ className = "" }: FeaturedBadgeProps) => {
  return (
    <motion.div
      className={`absolute top-4 right-4 z-10 ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="flex items-center gap-1 bg-gradient-to-r from-purple-primary to-purple-accent px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg">
        <Star className="w-3 h-3 fill-current" />
        Featured
      </div>
    </motion.div>
  );
};
