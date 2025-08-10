'use client';

import { motion } from 'framer-motion';

interface TechnologyTagsProps {
  technologies: string[];
  maxVisible?: number;
}

/**
 * Technology tags component with animated hover effects
 * Displays project technologies with overflow indicator
 */
export const TechnologyTags = ({ technologies, maxVisible = 4 }: TechnologyTagsProps) => {
  const visibleTechs = technologies.slice(0, maxVisible);
  const remainingCount = technologies.length - maxVisible;

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {visibleTechs.map((tech: string, techIndex: number) => (
          <motion.span
            key={tech}
            className="px-2 py-1 bg-purple-primary/20 text-purple-accent text-xs rounded-md border border-purple-primary/30 font-medium"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(147, 51, 234, 0.3)",
              borderColor: "rgba(147, 51, 234, 0.6)"
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: techIndex * 0.1 }}
          >
            {tech}
          </motion.span>
        ))}
        {remainingCount > 0 && (
          <motion.span
            className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md font-medium"
            whileHover={{ scale: 1.1 }}
          >
            +{remainingCount}
          </motion.span>
        )}
      </div>
    </div>
  );
};
