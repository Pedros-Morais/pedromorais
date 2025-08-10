 // Global Personal Information Configuration
// This file contains all personal information used across the portfolio

export const personalInfo = {
  // Basic Information
  name: 'Pedro Morais',
  fullName: 'Pedro Henrique Morais',
  
  // Contact Information
  email: 'pedrohs.work@gmail.com',
  location: 'Brazil',
  
  // Social Links
  social: {
    linkedin: 'https://www.linkedin.com/in/pedros-morais/',
    github: 'https://github.com/Pedros-Morais',
    twitter: '', // Add your Twitter URL when available
  },
  
  // Professional Information
  title: 'Full Stack Developer',
  company: '',
  
  // Portfolio Configuration
  portfolio: {
    domain: '', // Add your domain when available
    repository: '', // Add your portfolio repo URL when available
  },
  
  // Contact Methods
  contact: {
    email: 'pedrohs.work@gmail.com',
    emailSubject: 'Portfolio Contact - Let\'s Connect!',
    emailBody: 'Hi Pedro,\n\nI found your portfolio and would like to get in touch.\n\nBest regards,',
  }
} as const;

// Helper functions for easy access
export const getMailtoLink = () => {
  const { email, emailSubject, emailBody } = personalInfo.contact;
  return `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
};

export const getSocialLink = (platform: keyof typeof personalInfo.social) => {
  return personalInfo.social[platform];
};

export default personalInfo;
