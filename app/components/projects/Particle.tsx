'use client';

import { motion } from 'framer-motion';
import { ParticleProps } from './types';

/**
 * Particle component for floating effects around featured projects
 * Creates smooth floating animations with opacity and scale transitions
 */
export const Particle = ({ x, y, delay }: ParticleProps) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-purple-primary rounded-full opacity-60"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -100, 0],
        opacity: [0, 1, 0],
        scale: [0, 1, 0]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};
