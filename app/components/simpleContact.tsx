'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { personalInfo, getMailtoLink } from '../../config/personalInfo';
import { Mail, Linkedin, Github, MessageCircle, Sparkles } from 'lucide-react';

export default function SimpleContact() {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      href: getMailtoLink(),
      description: 'Send me an email',
      primary: true
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.social.linkedin,
      description: 'Connect professionally',
      primary: false
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: personalInfo.social.whatsapp,
      description: 'Quick message',
      primary: false
    },
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.social.github,
      description: 'Check my code',
      primary: false
    }
  ];

  return (
    <motion.section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/5 via-transparent to-purple-accent/5 rounded-3xl" />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-8 h-8 text-purple-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Let's Connect
            </h2>
            <Sparkles className="w-8 h-8 text-purple-accent" />
          </motion.div>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to build something amazing together? Choose your preferred way to get in touch.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                method.primary 
                  ? 'bg-gradient-to-br from-purple-primary to-purple-accent border-purple-primary/50 hover:shadow-lg hover:shadow-purple-primary/25' 
                  : 'bg-gray-900/50 border-gray-700/50 hover:border-purple-primary/50 hover:bg-gray-800/50'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Icon */}
              <motion.div
                className={`flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl ${
                  method.primary 
                    ? 'bg-white/20' 
                    : 'bg-purple-primary/10 group-hover:bg-purple-primary/20'
                }`}
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <method.icon className={`w-6 h-6 ${method.primary ? 'text-white' : 'text-purple-primary'}`} />
              </motion.div>

              {/* Content */}
              <h3 className={`font-semibold mb-2 ${method.primary ? 'text-white' : 'text-white group-hover:text-purple-accent'}`}>
                {method.label}
              </h3>
              <p className={`text-sm ${method.primary ? 'text-white/80' : 'text-gray-400 group-hover:text-gray-300'}`}>
                {method.description}
              </p>

              {/* Hover Effect */}
              {!method.primary && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-primary/10 to-purple-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={getMailtoLink()}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-primary to-purple-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-primary/25 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span>Let's Build Something Amazing</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
