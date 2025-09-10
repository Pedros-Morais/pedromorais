'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { 
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Users,
  Rocket,
  Star,
  ChevronRight,
  Building,
  Zap
} from 'lucide-react';

const experienceData = [
  {
    id: 1,
    type: 'work',
    title: 'Tech-Lead Front-End and Back-End',
    company: 'BeautyRightBack',
    location: 'New York',
    period: 'Dec 2024 - Present',
    description: 'Leading the most critical phases of the project and aligning business and technical objectives through regular meetings with the CEO. Define architectural patterns and tackle complex tasks in both Next.js (with full SSR and TypeScript, following Clean Code principles) and NestJS.',
    skills: ['Next.js', 'TypeScript', 'NestJS', 'GitHub Actions', 'ArgoCD', 'Jira', 'SSR', 'Clean Code'],
    achievements: [
      'Leading team of 15 developers (10 front-end, 5 back-end)',
      'Implementing enterprise-level architecture patterns',
      'Setting up robust CI/CD pipeline with GitHub Actions and ArgoCD',
      'Coordinating daily stand-ups and sprint planning sessions'
    ],
    icon: Rocket,
    color: 'from-purple-500 to-indigo-600',
    current: true
  },
  {
    id: 2,
    type: 'work',
    title: 'Front End Developer (Contract)',
    company: 'Superior Digital',
    location: 'U.S (Remote)',
    period: 'Apr 2024 - Dec 2024',
    description: 'Application development in SwiftUI and websites in ReactJS with focus on testing and DevOps practices for mobile deployment.',
    skills: ['SwiftUI', 'ReactJS', 'TDD', 'Jenkins', 'Apple Store', 'Scrum'],
    achievements: [
      'Successful iOS app deployments to Apple Store',
      'Implemented comprehensive TDD testing strategy',
      'Streamlined CI/CD processes with Jenkins',
      'Enhanced mobile DevOps workflows'
    ],
    icon: Code,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 3,
    type: 'work',
    title: 'Front End Developer (Contract)',
    company: 'MeuCurso',
    location: 'Brazil',
    period: 'May 2023 - Apr 2024',
    description: 'Full-stack development including application, CRM and backend development with mobile DevOps responsibilities for both Apple Store and Google Play.',
    skills: ['Full-Stack', 'CRM', 'Backend', 'Apple Store', 'Google Play', 'UI/UX', 'Git', 'Scrum'],
    achievements: [
      'Multi-platform app deployments (iOS & Android)',
      'Improved code quality through systematic reviews',
      'Enhanced UI/UX production processes',
      'Managed version control and deployment workflows'
    ],
    icon: Building,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 4,
    type: 'work',
    title: 'FullStack Developer (Freelance)',
    company: 'Pedro Consulting',
    location: 'Brazil and U.S',
    period: 'Aug 2022 - May 2023',
    description: 'Independent consulting providing full-stack development services, team management, and cloud infrastructure setup across multiple client projects.',
    skills: ['Full-Stack', 'APIs', 'Azure', 'AWS', 'CI/CD', 'Team Management', 'UI/UX', 'Scrum'],
    achievements: [
      'Successfully managed multiple international client projects',
      'Implemented comprehensive cloud infrastructure solutions',
      'Built end-to-end development pipelines',
      'Provided team leadership and technical mentoring'
    ],
    icon: Users,
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 5,
    type: 'work',
    title: 'Front-End Developer (Contract)',
    company: 'Sip Digital',
    location: 'Brazil',
    period: 'Oct - Dec 2022',
    description: 'CRM and API development for enterprise clients with focus on e-commerce solutions and comprehensive testing practices.',
    skills: ['CRM', 'API', 'E-commerce', 'Jest', 'TDD', 'Version Control', 'Kanban'],
    achievements: [
      'Delivered enterprise CRM solution for IBHASES company',
      'Built comprehensive Brazilian e-commerce platform',
      'Implemented robust testing suite with Jest (TDD)',
      'Managed version control and production deployments'
    ],
    icon: Briefcase,
    color: 'from-pink-500 to-rose-600'
  }
];

const TimelineItem = ({ 
  item, 
  index, 
  isActive, 
  onClick 
}: { 
  item: typeof experienceData[0]; 
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      className="relative flex items-center group cursor-pointer"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      {/* Timeline Line */}
      <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-purple-primary/50 to-transparent" />
      
      {/* Timeline Node */}
      <motion.div
        className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-r ' + item.color + ' border-white shadow-lg shadow-purple-primary/50' 
            : 'bg-gray-800 border-gray-600 group-hover:border-purple-primary'
        }`}
        whileHover={{ scale: 1.1 }}
        animate={{
          boxShadow: isActive 
            ? "0 0 30px rgba(139, 92, 246, 0.6)" 
            : "0 0 0px rgba(139, 92, 246, 0)"
        }}
      >
        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-purple-primary'}`} />
      </motion.div>
      
      {/* Timeline Content */}
      <motion.div
        className={`ml-6 p-4 rounded-xl border transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-r from-purple-primary/10 to-purple-accent/10 border-purple-primary/30' 
            : 'bg-gray-900/50 border-gray-700/50 group-hover:border-purple-primary/30'
        }`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <h3 className={`text-lg font-semibold ${isActive ? 'text-white' : 'text-gray-300'}`}>
            {item.title}
          </h3>
          {item.type === 'work' && <Building className="w-4 h-4 text-purple-primary" />}
          {item.type === 'education' && <GraduationCap className="w-4 h-4 text-purple-accent" />}
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
          <div className="flex items-center gap-1">
            <Briefcase className="w-3 h-3" />
            {item.company}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {item.location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {item.period}
          </div>
        </div>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-3">
          {item.description}
        </p>
        
        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {item.skills.slice(0, 3).map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-2 py-1 bg-purple-primary/20 text-purple-accent text-xs rounded-full border border-purple-primary/30"
            >
              {skill}
            </span>
          ))}
          {item.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full">
              +{item.skills.length - 3} more
            </span>
          )}
        </div>
        
        {/* View Details Button */}
        <motion.div
          className="flex items-center gap-1 text-purple-primary text-sm font-medium group-hover:gap-2 transition-all duration-300"
          whileHover={{ x: 5 }}
        >
          <span>View Details</span>
          <ChevronRight className="w-3 h-3" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Detailed View Component
const DetailedView = ({ 
  item, 
  onClose 
}: { 
  item: typeof experienceData[0]; 
  onClose: () => void;
}) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-gray-700/50"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.color}`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{item.title}</h2>
            <p className="text-purple-accent font-semibold">{item.company}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {item.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {item.period}
              </div>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
          <p className="text-gray-300 leading-relaxed">{item.description}</p>
        </div>
        
        {/* Skills */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h3>
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-3 py-2 bg-gradient-to-r from-purple-primary/20 to-purple-accent/20 text-purple-accent rounded-lg border border-purple-primary/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
          <div className="space-y-2">
            {item.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="w-full py-3 bg-gradient-to-r from-purple-primary to-purple-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-primary/25 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Close Details
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

// Main About Component
export default function About() {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [detailedView, setDetailedView] = useState<typeof experienceData[0] | null>(null);

  return (
    <motion.section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 via-transparent to-purple-accent/5" />
      
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
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Users className="w-8 h-8 text-purple-primary" />
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white bg-gradient-to-r from-white via-purple-accent to-white bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            {t('about.title')}
          </motion.h2>
          
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
            <Zap className="w-8 h-8 text-purple-accent" />
          </motion.div>
        </motion.div>
        
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          whileHover={{ scale: 1.01 }}
        >
          {t('about.subtitle')}
        </motion.p>
        
        {/* Animated underline */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-purple-primary via-purple-accent to-purple-primary mx-auto mt-8 rounded-full shadow-lg shadow-purple-primary/50"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 128, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isActive={activeItem === item.id}
              onClick={() => {
                setActiveItem(activeItem === item.id ? null : item.id);
                setDetailedView(item);
              }}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {[
          { label: t('about.stats.experience'), value: '6+', icon: Calendar },
          { label: t('about.stats.technologies'), value: '25+', icon: Code },
          { label: t('about.stats.companies'), value: '4+', icon: Users },
          { label: t('about.stats.contributions'), value: '1000+', icon: Award }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="text-center p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <stat.icon className="w-8 h-8 text-purple-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Detailed View Modal */}
      <AnimatePresence>
        {detailedView && (
          <DetailedView
            item={detailedView}
            onClose={() => setDetailedView(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
