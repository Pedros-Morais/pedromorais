'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
}

interface ParticleEffectProps {
  isActive: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const colors = ['#6366f1', '#8b5cf6', '#a855f7', '#c084fc', '#e879f9'];

export default function ParticleEffect({ isActive, containerRef }: ParticleEffectProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!isActive) {
      setParticles([]);
      return;
    }

    const createParticle = (): Particle => ({
      id: Math.random(),
      x: Math.random() * 200,
      y: Math.random() * 60,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
      },
    });

    // Create initial particles
    const initialParticles = Array.from({ length: 15 }, createParticle);
    setParticles(initialParticles);

    // Animation loop
    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: particle.x + particle.velocity.x,
          y: particle.y + particle.velocity.y,
          velocity: {
            x: particle.velocity.x * 0.99,
            y: particle.velocity.y * 0.99,
          },
        })).filter(particle => 
          particle.x > -10 && particle.x < 210 && 
          particle.y > -10 && particle.y < 70
        )
      );
    }, 16);

    // Add new particles periodically
    const particleInterval = setInterval(() => {
      if (isActive) {
        setParticles(prev => [...prev, createParticle()]);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(particleInterval);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 2,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
