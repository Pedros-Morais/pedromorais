'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { personalInfo } from '../../config/personalInfo';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

// Floating particle component for subtle background effect
const FloatingParticle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-purple-primary/20 rounded-full"
      initial={{ 
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        opacity: 0 
      }}
      animate={{
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        opacity: [0, 0.8, 0]
      }}
      transition={{
        duration: Math.random() * 8 + 6,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
    />
  );
};

export default function FinalCta() {
  const { t } = useTranslation();

  const handleClick = () => {
    const message = encodeURIComponent(
      `Hi Pedro! 👋\n\nI visited your portfolio and I'm impressed! I'm interested in working together.\n\nLet's discuss how we can create something amazing! 🚀`
    );
    window.open(`https://wa.me/5511974710705?text=${message}`, '_blank');
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 via-transparent to-purple-accent/5" />
      
      {/* Subtle floating particles */}
      {[...Array(8)].map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.8} />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Animated Icons */}
        <motion.div
          className="flex items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-12 h-12 text-purple-primary" />
          </motion.div>
          
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Zap className="w-12 h-12 text-purple-accent" />
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-white via-purple-accent to-white bg-clip-text text-transparent">
            {t('finalCta.title')}
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {t('finalCta.subtitle')}
        </motion.p>

        {/* The Amazing Button */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.7,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleClick}
            className="group relative px-12 py-6 bg-gradient-to-r from-purple-primary via-purple-accent to-purple-primary text-white text-xl md:text-2xl font-bold rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl shadow-purple-primary/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(139, 92, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(45deg, #8b5cf6, #a855f7, #8b5cf6)",
              backgroundSize: "200% 200%"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-primary/50 via-purple-accent/50 to-purple-primary/50 blur-xl"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-3">
              {t('finalCta.button')}
              <motion.div
                className="group-hover:translate-x-1 transition-transform duration-300"
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </span>

            {/* Sparkle effects on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity
                  }}
                />
              ))}
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Small note below button */}
        <motion.p
          className="text-sm text-gray-500 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          {t('finalCta.note')}
        </motion.p>
      </div>

      {/* Animated underline decoration */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-purple-primary to-transparent rounded-full"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 256, opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        viewport={{ once: true }}
      />
    </motion.section>
  );
}
