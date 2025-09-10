'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Code, Sparkles, Phone } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '../../hooks/useTranslation';
import { personalInfo, getMailtoLink } from '../../config/personalInfo';

const profileImages = [
  '/images/profilePic/pfp.jpeg',
  '/images/profilePic/pfp1.jpeg',
  '/images/profilePic/pfp2.jpeg',
  '/images/profilePic/pfp3.jpeg'
];

// Roles will be loaded from translations

const FloatingElement = ({ delay = 0, duration = 4, children }: { delay?: number; duration?: number; children: React.ReactNode }) => (
  <motion.div
    animate={{
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

const TypewriterText = ({ texts, className }: { texts: string[]; className?: string }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-purple-accent"
      >
        |
      </motion.span>
    </span>
  );
};

export default function Hero() {
  const { t, tArray } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  // Get translated roles
  const roles = tArray('hero.roles'); 
  
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-black via-black-medium to-black-soft overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/10 via-transparent to-purple-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-primary/5 to-transparent" />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Greeting */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="flex items-center space-x-3"
            >
              <motion.div
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-2xl"
              >
                👋
              </motion.div>
              <span className="text-lg text-gray-300 font-medium">Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-accent to-purple-primary bg-clip-text text-transparent leading-tight"
            >
              {t('hero.name')}
            </motion.h1>

            {/* Dynamic Role */}
            <motion.div variants={itemVariants} className="text-2xl md:text-3xl text-purple-primary font-semibold">
              <TypewriterText texts={roles} />
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed max-w-lg"
            >
              {t('hero.description')}
            </motion.p>

            {/* Location */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center space-x-2 text-gray-400"
            >
              <MapPin className="w-5 h-5 text-purple-accent" />
              <span>Based in Brazil</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-primary to-purple-accent text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-purple-primary/25 transition-all duration-300 no-underline"
              >
                <Linkedin className="w-5 h-5" />
                <span>Get in Touch</span>
              </motion.a>
              
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-primary text-purple-primary px-8 py-4 rounded-lg font-semibold hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex space-x-6 pt-6"
            >
              {[
                { icon: Github, href: personalInfo.social.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
                { icon: Mail, href: getMailtoLink(), label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-purple-accent transition-colors duration-300 p-3 rounded-lg hover:bg-purple-primary/10"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Images */}
          <motion.div 
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Profile Image Container */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              >
                {/* Rotating Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-primary via-purple-accent to-purple-primary p-1"
                >
                  <div className="w-full h-full rounded-full bg-black" />
                </motion.div>
                
                {/* Profile Images Carousel */}
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={profileImages[currentImageIndex]}
                        alt="Pedro Morais"
                        fill
                        className="object-cover rounded-full"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Floating Elements */}
                <FloatingElement delay={0} duration={3}>
                  <motion.div 
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-primary to-purple-accent p-3 rounded-full shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 180 }}
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.div>
                </FloatingElement>

                <FloatingElement delay={1} duration={4}>
                  <motion.div 
                    className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-accent to-purple-primary p-4 rounded-lg shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -10 }}
                  >
                    <Code className="w-8 h-8 text-white" />
                  </motion.div>
                </FloatingElement>

                <FloatingElement delay={2} duration={5}>
                  <motion.div 
                    className="absolute top-1/2 -right-8 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-purple-primary/30"
                    whileHover={{ scale: 1.2, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                  >
                    <span className="text-2xl">🚀</span>
                  </motion.div>
                </FloatingElement>
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-primary to-purple-accent blur-xl opacity-30 -z-10"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-400 cursor-pointer hover:text-purple-accent transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}