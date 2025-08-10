'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

export default function LanguageSwitcher() {
  const { t, locale, changeLocale, isClient } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Always use English as default during SSR to prevent hydration mismatch
  const currentLanguage = isClient 
    ? (languages.find(lang => lang.code === locale) || languages[0])
    : languages[0]; // Always use English (first item) during SSR

  const changeLanguage = (newLocale: string) => {
    changeLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm hover:from-purple-primary/20 hover:to-purple-accent/20 transition-all duration-300 border border-gray-700/50 hover:border-purple-primary/50 shadow-lg"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(139, 92, 246, 0.2)"
        }}
        whileTap={{ scale: 0.95 }}
        aria-label={t('language.switch')}
      >
        <motion.span 
          className="text-xl"
          animate={{ 
            rotate: isOpen ? [0, 10, -10, 0] : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          {currentLanguage.flag}
        </motion.span>
        <span className="text-sm font-medium text-white hidden sm:block">
          {currentLanguage.name}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-purple-accent" />
        </motion.div>
      </motion.button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full mt-3 right-0 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden z-50 min-w-[180px]"
          >
            {languages.map((language, index) => (
              <motion.button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gradient-to-r hover:from-purple-primary/20 hover:to-purple-accent/20 transition-all duration-300 ${
                  locale === language.code 
                    ? 'bg-gradient-to-r from-purple-primary/15 to-purple-accent/15 text-purple-accent border-l-2 border-purple-primary' 
                    : 'text-white hover:text-purple-accent'
                }`}
                whileHover={{ 
                  x: 6,
                  backgroundColor: "rgba(139, 92, 246, 0.1)"
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <motion.span 
                  className="text-lg"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {language.flag}
                </motion.span>
                <span className="text-sm font-medium flex-1">{language.name}</span>
                {locale === language.code && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="w-2 h-2 bg-gradient-to-r from-purple-primary to-purple-accent rounded-full shadow-lg"
                    style={{
                      boxShadow: "0 0 8px rgba(139, 92, 246, 0.6)"
                    }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
