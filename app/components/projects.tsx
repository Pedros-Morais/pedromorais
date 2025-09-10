'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { ProjectCard3D, mockProjects } from './projects/index';

/**
 * Projects section component with 3D card effects and particle systems
 * Features clean architecture with separated components for maintainability
 */
export default function Projects() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 via-transparent to-purple-accent/5 pointer-events-none" />
      
      {/* Section Header */}
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-accent to-white bg-clip-text text-transparent"
          whileHover={{ scale: 1.02 }}
        >
          {t('projects.title')}
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          whileHover={{ scale: 1.01 }}
        >
          {t('projects.subtitle')}
        </motion.p>
        
        {/* Animated underline with glow */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-purple-primary via-purple-accent to-purple-primary mx-auto mt-8 rounded-full shadow-lg shadow-purple-primary/50"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 128, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* 3D Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
        {mockProjects.map((project, index) => (
          <ProjectCard3D key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* View All Projects Button */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-primary to-purple-accent hover:from-purple-accent hover:to-purple-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-primary/25 transition-all duration-300 group"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px -10px rgba(147, 51, 234, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://github.com/Pedros-Morais?tab=repositories', '_blank')}
        >
          <span>{t('projects.buttons.viewAll')}</span>
          <motion.div
            className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
            whileHover={{ rotate: 12 }}
          >
            →
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
