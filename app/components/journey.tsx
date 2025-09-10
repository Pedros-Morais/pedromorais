'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { 
  Calendar,
  MapPin,
  Briefcase,
  Users,
  Code,
  ChevronRight,
  Building,
  Zap,
  Star,
  Award,
  GitBranch,
  Rocket,
  Target,
  Settings
} from 'lucide-react';

// Professional experience data based on your career
const experienceData = [
  {
    id: 1,
    type: 'work',
    title: 'Tech-Lead Front-End and Back-End',
    company: 'BeautyRightBack',
    location: 'New York',
    period: 'Dec 2024 - Present',
    description: 'Leading the most critical phases of the project and aligning business and technical objectives through regular meetings with the CEO. Define architectural patterns and tackle complex tasks in both Next.js (with full SSR and TypeScript, following Clean Code principles) and NestJS.',
    responsibilities: [
      'Leading critical project phases and business-technical alignment',
      'Defining architectural patterns for Next.js and NestJS',
      'Mentoring team of 10 front-end and 5 back-end developers',
      'Managing CI/CD pipeline with GitHub Actions and ArgoCD',
      'Coordinating tasks using Jira and running daily stand-ups'
    ],
    skills: ['Next.js', 'TypeScript', 'NestJS', 'GitHub Actions', 'ArgoCD', 'Jira', 'SSR', 'Clean Code'],
    achievements: [
      'Leading team of 15 developers',
      'Implementing enterprise-level architecture',
      'Setting up robust CI/CD pipeline'
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
    description: 'Application development in SwiftUI and websites in ReactJS with focus on testing and DevOps practices.',
    responsibilities: [
      'SwiftUI application development',
      'ReactJS website development',
      'Test-Driven Development (TDD) implementation',
      'App DevOps for Apple Store deployment',
      'CI/CD management with Jenkins'
    ],
    skills: ['SwiftUI', 'ReactJS', 'TDD', 'Jenkins', 'Apple Store', 'Scrum'],
    achievements: [
      'Successful iOS app deployments',
      'Implemented comprehensive testing strategy',
      'Streamlined CI/CD processes'
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
    description: 'Full-stack development including application, CRM and backend development with mobile DevOps responsibilities.',
    responsibilities: [
      'Application, CRM and Backend development',
      'DevOps for Apple Store and Google Play',
      'UI/UX production assistance',
      'Code management and commit reviews',
      'Team code review in Git'
    ],
    skills: ['Full-Stack', 'CRM', 'Backend', 'Apple Store', 'Google Play', 'UI/UX', 'Git', 'Scrum'],
    achievements: [
      'Multi-platform app deployments',
      'Improved code quality through reviews',
      'Enhanced UI/UX processes'
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
    description: 'Independent consulting providing full-stack development services, team management, and cloud infrastructure setup.',
    responsibilities: [
      'Applications, websites and backends (APIs) development',
      'Team Management',
      'DevOps for Apple Store and Google Play',
      'CI/CD Configuration',
      'Azure and AWS Configuration',
      'UI and UX production assistance'
    ],
    skills: ['Full-Stack', 'APIs', 'Azure', 'AWS', 'CI/CD', 'Team Management', 'UI/UX', 'Scrum'],
    achievements: [
      'Successfully managed multiple client projects',
      'Implemented cloud infrastructure solutions',
      'Built comprehensive development pipelines'
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
    description: 'CRM and API development for enterprise clients with focus on e-commerce solutions and testing practices.',
    responsibilities: [
      'CRM and API development for IBHASES company',
      'E-commerce application and website creation',
      'Testing implementation (Jest - TDD)',
      'Version control and product deployments'
    ],
    skills: ['CRM', 'API', 'E-commerce', 'Jest', 'TDD', 'Version Control', 'Kanban'],
    achievements: [
      'Delivered enterprise CRM solution',
      'Built Brazilian e-commerce platform',
      'Implemented comprehensive testing suite'
    ],
    icon: Target,
    color: 'from-pink-500 to-rose-600'
  }
];

const ExperienceCard = ({ 
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
      className="relative flex items-start group cursor-pointer"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      {/* Timeline Line */}
      {index < experienceData.length - 1 && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-purple-primary/50 to-transparent" />
      )}
      
      {/* Timeline Node */}
      <motion.div
        className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-r ' + item.color + ' border-white shadow-lg shadow-purple-primary/50' 
            : item.current
            ? 'bg-gradient-to-r from-purple-primary to-purple-accent border-purple-primary shadow-md shadow-purple-primary/30'
            : 'bg-gray-800 border-gray-600 group-hover:border-purple-primary'
        }`}
        whileHover={{ scale: 1.1 }}
        animate={{
          boxShadow: isActive 
            ? "0 0 30px rgba(139, 92, 246, 0.6)" 
            : item.current
            ? "0 0 20px rgba(139, 92, 246, 0.4)"
            : "0 0 0px rgba(139, 92, 246, 0)"
        }}
      >
        <Icon className={`w-6 h-6 ${isActive || item.current ? 'text-white' : 'text-gray-400 group-hover:text-purple-primary'}`} />
      </motion.div>
      
      {/* Timeline Content */}
      <motion.div
        className={`ml-6 p-6 rounded-xl border transition-all duration-300 w-full ${
          isActive 
            ? 'bg-gradient-to-r from-purple-primary/10 to-purple-accent/10 border-purple-primary/30' 
            : item.current
            ? 'bg-gradient-to-r from-purple-primary/5 to-purple-accent/5 border-purple-primary/20'
            : 'bg-gray-900/50 border-gray-700/50 group-hover:border-purple-primary/30'
        }`}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <h3 className={`text-xl font-bold ${isActive || item.current ? 'text-white' : 'text-gray-300'}`}>
            {item.title}
          </h3>
          {item.current && (
            <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full font-medium">
              Current
            </span>
          )}
        </div>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Building className="w-4 h-4" />
            <span className="font-medium">{item.company}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {item.location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {item.period}
          </div>
        </div>
        
        <p className="text-gray-300 leading-relaxed mb-4">
          {item.description}
        </p>
        
        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.skills.slice(0, 6).map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-3 py-1 bg-purple-primary/20 text-purple-accent text-sm rounded-full border border-purple-primary/30 font-medium"
            >
              {skill}
            </span>
          ))}
          {item.skills.length > 6 && (
            <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-sm rounded-full">
              +{item.skills.length - 6} more
            </span>
          )}
        </div>
        
        {/* Achievements */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-700/50 pt-4 mt-4"
          >
            <h4 className="text-purple-accent font-semibold mb-2 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {item.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                  <Star className="w-3 h-3 text-purple-primary mt-1 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
            
            <h4 className="text-purple-accent font-semibold mb-2 mt-4 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Responsibilities
            </h4>
            <ul className="space-y-2">
              {item.responsibilities.slice(0, 3).map((responsibility, respIndex) => (
                <li key={respIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                  <ChevronRight className="w-3 h-3 text-purple-primary mt-1 flex-shrink-0" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
        
        {/* View Details Button */}
        {!isActive && (
          <motion.div
            className="flex items-center gap-1 text-purple-primary text-sm font-medium group-hover:gap-2 transition-all duration-300 mt-2"
            whileHover={{ x: 5 }}
          >
            <span>View Details</span>
            <ChevronRight className="w-3 h-3" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function Journey() {
  const { t } = useTranslation();
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-primary/5 via-transparent to-transparent" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-primary/10 rounded-full border border-purple-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-5 h-5 text-purple-primary" />
            <span className="text-purple-accent font-medium">Professional Journey</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Career <span className="bg-gradient-to-r from-purple-primary to-purple-accent bg-clip-text text-transparent">Timeline</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From freelance consulting to tech leadership, here's my professional journey through the world of software development and team management.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              item={experience}
              index={index}
              isActive={activeExperience === experience.id}
              onClick={() => setActiveExperience(
                activeExperience === experience.id ? null : experience.id
              )}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-primary mb-2">2+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-accent mb-2">5</div>
            <div className="text-gray-400 text-sm">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-primary mb-2">15+</div>
            <div className="text-gray-400 text-sm">Team Members Led</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-accent mb-2">50+</div>
            <div className="text-gray-400 text-sm">Projects Delivered</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
