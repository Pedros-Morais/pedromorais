'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import ParticleEffect from './ParticleEffect';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../../hooks/useTranslation';
import { personalInfo } from '../../config/personalInfo';

export default function Header() {
  const { t } = useTranslation();
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const logoRef = useRef<HTMLDivElement>(null);

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId.replace('#', ''));
    if (element) {
      const headerHeight = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(targetId);
      setIsMenuOpen(false); 
    }
  };

  const navItemsTranslated = [
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#stacks', label: t('nav.skills') },
    { href: '#contact', label: t('nav.contact') },
  ];

  // Scroll spy effect to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItemsTranslated.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection('#' + sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItemsTranslated]);

  return (
    <header className="bg-[#080808] text-white sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name with Animation and Particles */}
          <motion.div
            ref={logoRef}
            className="relative"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0px 0px 8px rgb(139, 92, 246)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            onHoverStart={() => setIsHoveringLogo(true)}
            onHoverEnd={() => setIsHoveringLogo(false)}
          >
            <Link href="/" className="text-2xl font-bold text-white hover:text-purple-accent transition-colors duration-300 relative z-10">
              Pedro Morais
            </Link>
            <ParticleEffect isActive={isHoveringLogo} containerRef={logoRef} />
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItemsTranslated.map((item, index) => (
              <motion.div
                key={item.href}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -2
                }}
              >
                <button
                  onClick={() => smoothScrollTo(item.href)}
                  className={`relative font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:text-white group ${
                    activeSection === item.href ? 'text-white' : 'text-purple-primary'
                  }`}
                >
                  {item.label}
                  
                  {/* Animated Underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-primary to-purple-accent"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-purple-primary/10 rounded-lg -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1,
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </motion.div>
            ))}
            
            {/* LinkedIn Icon with Enhanced Animation */}
            <motion.div
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-primary hover:text-white transition-colors duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-primary/20 to-purple-accent/20 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    boxShadow: "0 0 25px rgba(139, 92, 246, 0.4)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                <svg 
                  className="w-6 h-6 relative z-10" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </motion.div>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </nav>
          
          {/* Mobile Menu Button with Animation */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-primary hover:text-white transition-colors duration-300 p-2 rounded-lg"
              aria-label="Toggle menu"
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(139, 92, 246, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: isMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black-soft/95 backdrop-blur-sm border-t border-purple-primary/20"
          >
            <div className="px-6 py-4 space-y-4">
              {navItemsTranslated.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => smoothScrollTo(item.href)}
                    className={`block w-full text-left transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-purple-primary/10 ${
                      activeSection === item.href ? 'text-white bg-purple-primary/10' : 'text-purple-primary hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
              
              {/* Mobile LinkedIn Link */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItemsTranslated.length * 0.1 }}
              >
                <a
                  href="https://www.linkedin.com/in/pedros-morais/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-primary hover:text-white transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-purple-primary/10"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}