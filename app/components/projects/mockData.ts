import { Project } from './types';

/**
 * Mock project data for demonstration purposes
 * Replace with real project data from your portfolio
 */
export const mockProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js and TypeScript, featuring real-time inventory management and secure payment processing.",
    category: "Web Development",
    status: "completed",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/pedros-morais/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.pedros-morais.dev",
    featured: true
  },
  {
    id: 2,
    title: "AI Task Manager",
    description: "An intelligent task management application that uses machine learning to prioritize tasks and optimize productivity workflows.",
    category: "AI & Machine Learning",
    status: "in-progress",
    technologies: ["React", "Python", "FastAPI", "TensorFlow", "MongoDB"],
    githubUrl: "https://github.com/pedros-morais/ai-task-manager",
    liveUrl: "https://tasks.pedros-morais.dev",
    featured: false
  },
  {
    id: 3,
    title: "Real-time Chat App",
    description: "A scalable real-time messaging application with end-to-end encryption, file sharing, and video calling capabilities.",
    category: "Full Stack",
    status: "completed",
    technologies: ["Node.js", "Socket.io", "React", "WebRTC", "Redis", "Docker"],
    githubUrl: "https://github.com/pedros-morais/realtime-chat",
    liveUrl: "https://chat.pedros-morais.dev",
    featured: true
  }
];
