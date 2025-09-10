import { Project } from './types';

/**
 * Pedro's actual project portfolio
 * Real projects from professional experience
 */
export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Verticalizado",
    description: "A comprehensive mobile application designed for law students in Brazil, providing study materials, practice tests, and educational resources to help students excel in their legal studies.",
    category: "Mobile Development",
    status: "completed",
    technologies: ["React Native", "Expo", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    githubUrl: "https://github.com/pedros-morais/verticalizado",
    liveUrl: "",
    featured: true,
    image: "/images/projects/verticalizado.jpeg",
    isPrivateRepo: true
  },
  {
    id: 2,
    title: "Next.js Multilanguage Template",
    description: "A production-ready, feature-rich Next.js template designed to kickstart multilingual web applications. Includes complete i18n setup, performance optimizations, form validation with Zod, modern UI foundation with TailwindCSS, and exceptional developer experience with TypeScript, ESLint, and Prettier.",
    category: "Web Development",
    status: "completed",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "i18n", "Zod", "React Hook Form", "ESLint", "Husky"],
    githubUrl: "https://github.com/Pedros-Morais/nextjs-template",
    liveUrl: "",
    featured: true,
    image: "/images/projects/nextjs.png"
  },
  {
    id: 3,
    title: "Embedded Fall Detection System",
    description: "An embedded system for detecting falls in residential environments using computer vision and Arduino. Features real-time video monitoring with MediaPipe Pose detection, Arduino integration for alerts, and noise reduction algorithms to minimize false positives. Specifically designed for elderly care with 20-frame threshold validation.",
    category: "Computer Vision & IoT",
    status: "completed",
    technologies: ["Python", "OpenCV", "MediaPipe", "Arduino", "Computer Vision", "Serial Communication", "IoT"],
    githubUrl: "https://github.com/Pedros-Morais/fall_detector",
    liveUrl: "",
    featured: true,
    image: "/images/projects/falling.jpg"
  }
];
