'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Lock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface ProjectActionsProps {
  githubUrl: string;
  liveUrl: string;
  isPrivateRepo?: boolean;
}

/**
 * Project action buttons component
 * Provides links to GitHub repository and live demo with hover animations
 */
export const ProjectActions = ({ githubUrl, liveUrl, isPrivateRepo }: ProjectActionsProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex gap-3 pt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Code Button - Different behavior for private repos */}
      {isPrivateRepo ? (
        <motion.div
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-400 rounded-lg text-sm font-medium border border-gray-600/30 cursor-not-allowed"
          whileHover={{
            scale: 1.02
          }}
          title="Private Repository"
        >
          <Lock className="w-4 h-4" />
          {t('projects.buttons.code')}
        </motion.div>
      ) : (
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-lg text-sm font-medium transition-all duration-300 border border-gray-600/50 hover:border-purple-primary/50 group/btn"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
          {t('projects.buttons.code')}
        </motion.a>
      )}
      
      <motion.a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-primary to-purple-accent hover:from-purple-accent hover:to-purple-primary text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-primary/25 group/btn"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
        {t('projects.buttons.demo')}
      </motion.a>
    </motion.div>
  );
};
