export const personalInfo = {
  name: 'Pedro Morais',
  fullName: 'Pedro Henrique Morais',
  
  email: 'pedrohs.work@gmail.com',
  location: 'Brazil',
  
  social: {
    linkedin: 'https://www.linkedin.com/in/pedros-morais/',
    github: 'https://github.com/Pedros-Morais',
    twitter: '',
    whatsapp: 'https://wa.me/55119747110705',
  },
  
  title: 'Full Stack Developer',
  company: '',
  
  portfolio: {
    domain: '',
    repository: '',
  },
  
  contact: {
    email: 'pedrohs.work@gmail.com',
    emailSubject: 'Portfolio Contact - Let\'s Connect!',
    emailBody: 'Hi Pedro,\n\nI found your portfolio and would like to get in touch.\n\nBest regards,',
  }
} as const;
export const getMailtoLink = () => {
  const { email, emailSubject, emailBody } = personalInfo.contact;
  return `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
};

export const getSocialLink = (platform: keyof typeof personalInfo.social) => {
  return personalInfo.social[platform];
};

export default personalInfo;
