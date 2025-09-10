'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { personalInfo } from '../../config/personalInfo';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  User, 
  MessageSquare, 
  Sparkles,
  Globe,
  Github,
  Linkedin,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Zap
} from 'lucide-react';

const FloatingParticle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-purple-primary/30 rounded-full"
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0 
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
    />
  );
};

const ContactCard = ({ 
  icon: Icon, 
  title, 
  value, 
  href, 
  delay = 0 
}: {
  icon: any;
  title: string;
  value: string;
  href?: string;
  delay?: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden cursor-pointer"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => href && window.open(href, '_blank')}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-primary/10 via-purple-accent/10 to-purple-primary/10"
          animate={{
            background: isHovered 
              ? "linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.2))"
              : "linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.1))"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon with glow effect */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-purple-primary to-purple-accent rounded-xl"
          animate={{
            boxShadow: isHovered 
              ? "0 0 30px rgba(139, 92, 246, 0.6)"
              : "0 0 15px rgba(139, 92, 246, 0.3)"
          }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{value}</p>
          {href && (
            <motion.div
              className="flex items-center gap-1 mt-3 text-purple-primary text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ExternalLink className="w-3 h-3" />
              Click to open
            </motion.div>
          )}
        </div>

        {/* Sparkle effects */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-primary rounded-full"
                initial={{ 
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  repeat: Infinity
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

// Contact form component
const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Create mailto link
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="relative"
          whileFocus={{ scale: 1.02 }}
        >
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {t('contact.form.name')}
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/20 transition-all duration-300"
              placeholder={t('contact.form.namePlaceholder')}
            />
          </div>
        </motion.div>

        <motion.div
          className="relative"
          whileFocus={{ scale: 1.02 }}
        >
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {t('contact.form.email')}
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/20 transition-all duration-300"
              placeholder={t('contact.form.emailPlaceholder')}
            />
          </div>
        </motion.div>
      </div>

      {/* Subject */}
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.02 }}
      >
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {t('contact.form.subject')}
        </label>
        <div className="relative">
          <Sparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/20 transition-all duration-300"
            placeholder={t('contact.form.subjectPlaceholder')}
          />
        </div>
      </motion.div>

      {/* Message */}
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.02 }}
      >
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {t('contact.form.message')}
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-primary focus:ring-2 focus:ring-purple-primary/20 transition-all duration-300 resize-none"
            placeholder={t('contact.form.messagePlaceholder')}
          />
        </div>
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="relative w-full py-4 bg-gradient-to-r from-purple-primary to-purple-accent hover:from-purple-accent hover:to-purple-primary text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="flex items-center justify-center gap-2"
          animate={{
            opacity: isSubmitting ? 0 : 1
          }}
        >
          {submitStatus === 'success' ? (
            <>
              <CheckCircle className="w-5 h-5" />
              {t('contact.form.success')}
            </>
          ) : submitStatus === 'error' ? (
            <>
              <AlertCircle className="w-5 h-5" />
              {t('contact.form.error')}
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {t('contact.form.submit')}
            </>
          )}
        </motion.div>

        {/* Loading animation */}
        {isSubmitting && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}

        {/* Success/Error overlay */}
        {submitStatus !== 'idle' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: submitStatus === 'success' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
    </motion.form>
  );
};

// Main Contact Component
export default function Contact() {
  const { t } = useTranslation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.section
      id="contact"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 via-transparent to-purple-accent/5" />
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.5} />
      ))}

      {/* Mouse follower effect */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 bg-gradient-radial from-purple-primary/10 to-transparent rounded-full pointer-events-none z-0"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />

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
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="w-8 h-8 text-purple-primary" />
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white bg-gradient-to-r from-white via-purple-accent to-white bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            {t('contact.title')}
          </motion.h2>
          
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <Globe className="w-8 h-8 text-purple-accent" />
          </motion.div>
        </motion.div>
        
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          whileHover={{ scale: 1.01 }}
        >
          {t('contact.subtitle')}
        </motion.p>
        
        {/* Animated underline */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-purple-primary via-purple-accent to-purple-primary mx-auto mt-8 rounded-full shadow-lg shadow-purple-primary/50"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 128, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Information */}
        <div className="space-y-8">
          <motion.h3
            className="text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('contact.info.title')}
          </motion.h3>

          <div className="space-y-6">
            <ContactCard
              icon={Mail}
              title={t('contact.info.email')}
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
              delay={0.1}
            />
            
            <ContactCard
              icon={Linkedin}
              title={t('contact.info.linkedin')}
              value="Connect with me professionally"
              href={personalInfo.social.linkedin}
              delay={0.2}
            />
            
            <ContactCard
              icon={Github}
              title={t('contact.info.github')}
              value="Check out my repositories"
              href={personalInfo.social.github}
              delay={0.3}
            />
            
            <ContactCard
              icon={MapPin}
              title={t('contact.info.location')}
              value="Available for remote work worldwide"
              delay={0.4}
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative">
          <motion.h3
            className="text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('contact.form.title')}
          </motion.h3>

          <ContactForm />
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-lg text-gray-300 mb-6"
          whileHover={{ scale: 1.02 }}
        >
          {t('contact.cta')}
        </motion.p>
        
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
            { icon: Github, href: personalInfo.social.github, label: 'GitHub' }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-primary to-purple-accent rounded-full text-white hover:shadow-lg hover:shadow-purple-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
