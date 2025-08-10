'use client';

import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface ProjectStatusProps {
  status: 'completed' | 'in-progress';
}

/**
 * Project status badge component
 * Displays completion status with appropriate colors and icons
 */
export const ProjectStatus = ({ status }: ProjectStatusProps) => {
  const { t } = useTranslation();

  const statusConfig = {
    completed: {
      className: 'bg-green-500/20 text-green-400 border border-green-500/30',
      icon: Star,
    },
    'in-progress': {
      className: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
      icon: Clock,
    }
  };

  const config = statusConfig[status];
  const IconComponent = config.icon;

  return (
    <motion.div
      className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.className}`}
      whileHover={{ scale: 1.05 }}
    >
      <IconComponent className="w-3 h-3 fill-current" />
      {t(`projects.status.${status}`)}
    </motion.div>
  );
};
