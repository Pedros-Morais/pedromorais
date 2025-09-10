'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Palette, 
  Wrench,
  Star,
  TrendingUp,
  Zap,
  Heart
} from 'lucide-react';

// Technology categories with Pedro's actual skills and experience levels
const techStacks = {
  frontend: {
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 98, experience: '6+ years' },
      { name: 'Next.js', level: 95, experience: '5+ years' },
      { name: 'JavaScript', level: 98, experience: '6+ years' },
      { name: 'TypeScript', level: 95, experience: '5+ years' },
      { name: 'Tailwind CSS', level: 98, experience: '6+ years' },
      { name: 'Three.js', level: 85, experience: '2+ years' }
    ]
  },
  backend: {
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 95, experience: '5+ years' },
      { name: 'Express.js', level: 95, experience: '5+ years' },
      { name: 'NestJS', level: 90, experience: '4+ years' },
      { name: 'Python', level: 90, experience: '4+ years' },
      { name: 'PostgreSQL', level: 95, experience: '5+ years' },
      { name: 'MongoDB', level: 90, experience: '4+ years' },
      { name: 'Prisma', level: 90, experience: '4+ years' },
      { name: 'Go', level: 80, experience: '3+ years' },
      { name: 'Java', level: 75, experience: '2+ years' }
    ]
  },
  mobile: {
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React Native', level: 98, experience: '6+ years' },
      { name: 'Expo', level: 98, experience: '6+ years' },
      { name: 'Flutter', level: 85, experience: '2+ years' },
      { name: 'Swift', level: 85, experience: '2+ years' }
    ]
  },
  tools: {
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git', level: 98, experience: '6+ years' },
      { name: 'Docker', level: 90, experience: '4+ years' },
      { name: 'AWS', level: 90, experience: '4+ years' },
      { name: 'Vercel', level: 98, experience: '6+ years' },
      { name: 'Figma', level: 98, experience: '6+ years' },
      { name: 'Scrum', level: 98, experience: '6+ years' }
    ]
  }
};

// Skill Card Component
const SkillCard = ({ skill, index, categoryColor }: { 
  skill: { name: string; level: number; experience: string }; 
  index: number;
  categoryColor: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-purple-primary/50 transition-all duration-300"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 10px 30px -5px rgba(147, 51, 234, 0.3)"
        }}
      >
        {/* Skill Header */}
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-semibold text-sm">{skill.name}</h4>
          <motion.div
            className="flex items-center gap-1 text-xs text-gray-400"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          >
            <TrendingUp className="w-3 h-3" />
            {skill.level}%
          </motion.div>
        </div>
        
        {/* Progress Bar */}
        <div className="relative mb-2">
          <div className="w-full bg-gray-700/50 rounded-full h-2">
            <motion.div
              className={`h-2 rounded-full bg-gradient-to-r ${categoryColor}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            />
          </div>
          
          {/* Glow effect */}
          <motion.div
            className={`absolute top-0 h-2 rounded-full bg-gradient-to-r ${categoryColor} opacity-50 blur-sm`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
          />
        </div>
        
        {/* Experience */}
        <motion.p
          className="text-xs text-gray-400"
          animate={isHovered ? { opacity: 1 } : { opacity: 0.7 }}
        >
          {skill.experience}
        </motion.p>
        
        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-primary/10 to-transparent rounded-xl opacity-0 pointer-events-none"
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

// Category Section Component
const CategorySection = ({ 
  categoryKey, 
  category, 
  index 
}: { 
  categoryKey: string; 
  category: typeof techStacks.frontend;
  index: number;
}) => {
  const { t } = useTranslation();
  const Icon = category.icon;
  
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Category Header */}
      <motion.div
        className="flex items-center gap-4 mb-6"
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            boxShadow: "0 15px 35px -5px rgba(147, 51, 234, 0.4)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        
        <div>
          <motion.h3
            className="text-2xl font-bold text-white mb-1"
            whileHover={{ scale: 1.02 }}
          >
            {t(`stacks.categories.${categoryKey}.title`)}
          </motion.h3>
          <motion.p
            className="text-gray-400 text-sm"
            whileHover={{ scale: 1.01 }}
          >
            {t(`stacks.categories.${categoryKey}.description`)}
          </motion.p>
        </div>
      </motion.div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={skillIndex}
            categoryColor={category.color}
          />
        ))}
      </div>
    </motion.div>
  );
};

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4
  }));
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-purple-primary/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default function StackBox() {
  const { t } = useTranslation();
  
  return (
    <motion.section
      id="stacks"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 via-transparent to-purple-accent/5" />
      <FloatingParticles />
      
      {/* Section Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="w-8 h-8 text-purple-primary" />
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white bg-gradient-to-r from-white via-purple-accent to-white bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            {t('stacks.title')}
          </motion.h2>
          
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Heart className="w-8 h-8 text-purple-accent" />
          </motion.div>
        </motion.div>
        
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          whileHover={{ scale: 1.01 }}
        >
          {t('stacks.subtitle')}
        </motion.p>
        
        {/* Animated underline */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-purple-primary via-purple-accent to-purple-primary mx-auto rounded-full shadow-lg shadow-purple-primary/50"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 128, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
      
      {/* Technology Categories */}
      <div className="space-y-16">
        {Object.entries(techStacks).map(([categoryKey, category], index) => (
          <CategorySection
            key={categoryKey}
            categoryKey={categoryKey}
            category={category}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}