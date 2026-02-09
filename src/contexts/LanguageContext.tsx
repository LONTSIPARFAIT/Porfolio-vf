import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    skills: 'Compétences',
    experience: 'Expériences',
    projects: 'Projets',
    contact: 'Contact',
    hello: 'Bonjour, je suis',
    fullstack: 'Développeur Fullstack',
    uiux: 'Passionné par l\'UI/UX',
    creative: 'Créatif',
    problemSolver: 'Problème-solveur',
    description: 'Je crée des expériences web exceptionnelles avec des technologies modernes. Passionné par le code propre, les designs intuitifs et les performances optimales.',
    contactMe: 'Me Contacter',
    downloadCV: 'Télécharger CV',
    // About section
    aboutTitle: 'À Propos de Moi',
    aboutDescription: 'Passionné par la technologie depuis toujours, je transforme des idées en solutions digitales performantes et élégantes.',
    philosophyTitle: 'Ma Philosophie',
    philosophyText: 'Je crois que le code n\'est pas juste une série d\'instructions, mais une forme d\'art qui doit être à la fois fonctionnelle et esthétique. Chaque projet est une opportunité d\'apprendre, d\'innover et d\'impacter.',
    focusUX: 'Focus sur l\'expérience utilisateur',
    cleanCode: 'Code propre et maintenable',
    optimalPerformance: 'Performance optimale',
    effectiveCollaboration: 'Collaboration efficace',
    projectsCompleted: 'Projets réalisés',
    clientSatisfaction: 'Satisfaction client',
    availability: 'Disponibilité',
    passion: 'Passion',
    // Skills section
    skillsTitle: 'Mes Compétences',
    skillsDescription: 'Technologies et outils que j\'utilise pour donner vie à vos projets',
    frontend: 'Frontend',
    backend: 'Backend',
    toolsDevops: 'Outils & DevOps',
    additionalSkills: 'Compétences Complémentaires',
    // Experience section
    experienceTitle: 'Mon Parcours',
    experienceDescription: 'Expériences professionnelles et académiques qui ont façonné mon expertise',
    // Projects section
    projectsTitle: 'Mes Projets',
    projectsDescription: 'Une sélection de mes réalisations les plus récentes',
    liveDemo: 'Live Demo',
    code: 'Code',
    seeMoreOnGitHub: 'Voir plus sur GitHub',
    // Contact section
    contactTitle: 'Travaillons Ensemble',
    contactDescription: 'Discutons de votre projet et voyons comment je peux vous aider à le concrétiser',
    getInTouch: 'Prenons contact',
    getInTouchText: 'Vous avez un projet en tête ? Discutons-en ! Je suis toujours ouvert à de nouvelles opportunités et collaborations intéressantes.',
    email: 'Email',
    phone: 'Téléphone',
    location: 'Localisation',
    availabilityTitle: 'Disponibilité',
    availabilityText: 'Je suis disponible pour des projets freelance et des opportunités à temps plein. Réponse garantie sous 24h.',
    sendMessage: 'Envoyez un message',
    fullName: 'Nom complet *',
    emailLabel: 'Email *',
    subject: 'Sujet',
    message: 'Message *',
    yourName: 'Votre nom',
    yourEmail: 'votre@email.com',
    messageSubject: 'Sujet de votre message',
    describeProject: 'Décrivez votre projet...',
    sendMessageBtn: 'Envoyer le message',
    messageSent: 'Message envoyé !',
    responseText: 'Je vous répondrai dans les plus brefs délais.',
    // Footer
    brandDescription: 'Créateur d\'expériences web exceptionnelles et de solutions digitales innovantes.',
    navigation: 'Navigation',
    services: 'Services',
    webDevelopment: 'Développement Web',
    mobileApps: 'Applications Mobile',
    uiuxDesign: 'UI/UX Design',
    techConsulting: 'Consulting Tech',
    maintenanceSupport: 'Maintenance & Support',
    stayInformed: 'Restez informé',
    stayInformedText: 'Recevez les dernières mises à jour et projets.',
    yourEmailFooter: 'Votre email',
    subscribe: 'S\'abonner',
    allRightsReserved: 'Tous droits réservés.',
    madeWith: 'Fait avec',
    and: 'et',
    topOfPage: 'Haut de page',
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    hello: 'Hello, I am',
    fullstack: 'Fullstack Developer',
    uiux: 'UI/UX Enthusiast',
    creative: 'Creative',
    problemSolver: 'Problem Solver',
    description: 'I create exceptional web experiences with modern technologies. Passionate about clean code, intuitive designs, and optimal performance.',
    contactMe: 'Contact Me',
    downloadCV: 'Download CV',
    // About section
    aboutTitle: 'About Me',
    aboutDescription: 'Passionate about technology since always, I transform ideas into high-performance digital solutions and elegant designs.',
    philosophyTitle: 'My Philosophy',
    philosophyText: 'I believe that code is not just a series of instructions, but a form of art that must be both functional and aesthetic. Each project is an opportunity to learn, innovate, and make an impact.',
    focusUX: 'Focus on user experience',
    cleanCode: 'Clean and maintainable code',
    optimalPerformance: 'Optimal performance',
    effectiveCollaboration: 'Effective collaboration',
    projectsCompleted: 'Projects completed',
    clientSatisfaction: 'Client satisfaction',
    availability: 'Availability',
    passion: 'Passion',
    // Skills section
    skillsTitle: 'My Skills',
    skillsDescription: 'Technologies and tools I use to bring your projects to life',
    frontend: 'Frontend',
    backend: 'Backend',
    toolsDevops: 'Tools & DevOps',
    additionalSkills: 'Additional Skills',
    // Experience section
    experienceTitle: 'My Journey',
    experienceDescription: 'Professional and academic experiences that shaped my expertise',
    // Projects section
    projectsTitle: 'My Projects',
    projectsDescription: 'A selection of my most recent achievements',
    liveDemo: 'Live Demo',
    code: 'Code',
    seeMoreOnGitHub: 'See more on GitHub',
    // Contact section
    contactTitle: 'Let\'s Work Together',
    contactDescription: 'Let\'s discuss your project and see how I can help bring it to life',
    getInTouch: 'Get in touch',
    getInTouchText: 'Have a project in mind? Let\'s talk! I\'m always open to new opportunities and interesting collaborations.',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    availabilityTitle: 'Availability',
    availabilityText: 'I am available for freelance projects and full-time opportunities. Guaranteed response within 24h.',
    sendMessage: 'Send a message',
    fullName: 'Full name *',
    emailLabel: 'Email *',
    subject: 'Subject',
    message: 'Message *',
    yourName: 'Your name',
    yourEmail: 'your@email.com',
    messageSubject: 'Subject of your message',
    describeProject: 'Describe your project...',
    sendMessageBtn: 'Send message',
    messageSent: 'Message sent!',
    responseText: 'I will get back to you as soon as possible.',
    // Footer
    brandDescription: 'Creator of exceptional web experiences and innovative digital solutions.',
    navigation: 'Navigation',
    services: 'Services',
    webDevelopment: 'Web Development',
    mobileApps: 'Mobile Applications',
    uiuxDesign: 'UI/UX Design',
    techConsulting: 'Tech Consulting',
    maintenanceSupport: 'Maintenance & Support',
    stayInformed: 'Stay informed',
    stayInformedText: 'Receive the latest updates and projects.',
    yourEmailFooter: 'Your email',
    subscribe: 'Subscribe',
    allRightsReserved: 'All rights reserved.',
    madeWith: 'Made with',
    and: 'and',
    topOfPage: 'Top of page',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};