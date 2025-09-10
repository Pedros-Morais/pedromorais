'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { ProjectCard3DProps } from './types';
import { Particle } from './Particle';
import { FeaturedBadge } from './FeaturedBadge';
import { ProjectImage } from './ProjectImage';
import { ProjectStatus } from './ProjectStatus';
import { TechnologyTags } from './TechnologyTags';
import { ProjectActions } from './ProjectActions';

/**
 * 3D Project Card Component with interactive hover effects
 * Features mouse-tracking 3D rotation, particle effects, and glassmorphism design
 */
export const ProjectCard3D = ({ project, index }: ProjectCard3DProps) => {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smooth movement
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]));
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };
  
  // Generate particles for featured projects
  const particles = project.featured ? Array.from({ length: 8 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.3
  })) : [];
  
  return (
    <motion.div
      ref={cardRef}
      className="relative group perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* Particle Effects for Featured Projects */}
      {project.featured && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((particle, i) => (
            <Particle key={i} x={`${particle.x}%`} y={`${particle.y}%`} delay={particle.delay} />
          ))}
        </div>
      )}
      
      {/* 3D Card Container */}
      <motion.div
        className="relative h-full transform-gpu"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        whileHover={{ z: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Card Background with Glassmorphism */}
        <motion.div
          className="relative h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl"
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(147, 51, 234, 0.25)",
            borderColor: "rgba(147, 51, 234, 0.5)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Featured Badge */}
          {project.featured && <FeaturedBadge />}
          
          {/* Holographic Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-primary/10 via-transparent to-purple-accent/10 opacity-0"
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Project Image */}
          <ProjectImage 
            category={project.category} 
            isHovered={isHovered} 
            image={project.image}
            title={project.title}
          />
          
          {/* Card Content */}
          <div className="p-6 space-y-4">
            {/* Title and Status */}
            <div className="flex items-start justify-between">
              <motion.h3
                className="text-xl font-bold text-white group-hover:text-purple-primary transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {project.title}
              </motion.h3>
              <ProjectStatus status={project.status} />
            </div>
            
            {/* Description */}
            <motion.p
              className="text-gray-300 text-sm leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              {project.description}
            </motion.p>
            
            {/* Technologies */}
            <TechnologyTags technologies={project.technologies} />
            
            {/* Action Buttons */}
            <ProjectActions 
              githubUrl={project.githubUrl} 
              liveUrl={project.liveUrl} 
              isPrivateRepo={project.isPrivateRepo}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
