// Types for Projects section components

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'completed' | 'in-progress';
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  image?: string;
  isPrivateRepo?: boolean;
}

export interface ParticleProps {
  x: string;
  y: string;
  delay: number;
}

export interface ProjectCard3DProps {
  project: Project;
  index: number;
}

export interface FeaturedBadgeProps {
  className?: string;
}
