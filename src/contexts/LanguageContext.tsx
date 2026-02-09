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
    // Experience section details
    exp1Role: 'Développeur Fullstack (Stage)',
    exp1Company: 'CFPC',
    exp1Location: 'Yaoundé, Cameroun',
    exp1Period: 'Juin 2024 - Août 2024',
    exp1Desc1: 'Développement d\'une plateforme d\'e-learning complète avec Laravel',
    exp1Desc2: 'Création d\'API RESTful pour la gestion des utilisateurs et des cours',
    exp1Desc3: 'Implémentation d\'un système d\'authentification sécurisé',
    exp1Desc4: 'Optimisation des performances et du SEO de l\'application',
    exp2Role: 'Développeur Web Freelance',
    exp2Company: 'Indépendant',
    exp2Location: 'Remote',
    exp2Period: 'Jan 2024 - Présent',
    exp2Desc1: 'Développement de sites web et applications sur mesure pour divers clients',
    exp2Desc2: 'Création de portfolios interactifs avec animations avancées',
    exp2Desc3: 'Optimisation de performances et scores Lighthouse',
    exp2Desc4: 'Intégration de systèmes de paiement et API tierces',
    exp3Role: 'Développeur Mobile',
    exp3Company: 'Projet Académique (ESCa)',
    exp3Location: 'Yaoundé, Cameroun',
    exp3Period: 'Sep 2023 - Mai 2024',
    exp3Desc1: 'Développement d\'une application CRUD en C# pour la gestion de données',
    exp3Desc2: 'Recherche et prototypage d\'applications avec Flutter',
    exp3Desc3: 'Collaboration en équipe avec méthodologie Agile',
    exp3Desc4: 'Présentation du projet devant un jury professionnel',
    // Projects section details
    proj1Title: 'Plateforme d\'E-learning',
    proj1Desc: 'Une plateforme web permettant aux utilisateurs d\'accéder à des cours en ligne, avec gestion des utilisateurs, des cours et des quiz.',
    proj2Title: 'Application CRUD',
    proj2Desc: 'Une application de gestion de données permettant de créer, lire, mettre à jour et supprimer des enregistrements.',
    proj3Title: 'Portfolio Interactif',
    proj3Desc: 'Un portfolio personnel mettant en avant mes compétences en développement web avec une interface moderne.',
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
    // Experience section details
    exp1Role: 'Fullstack Developer (Internship)',
    exp1Company: 'CFPC',
    exp1Location: 'Yaoundé, Cameroon',
    exp1Period: 'June 2024 - August 2024',
    exp1Desc1: 'Development of a complete e-learning platform with Laravel',
    exp1Desc2: 'Creation of RESTful APIs for user and course management',
    exp1Desc3: 'Implementation of a secure authentication system',
    exp1Desc4: 'Optimization of performance and SEO of the application',
    exp2Role: 'Freelance Web Developer',
    exp2Company: 'Independent',
    exp2Location: 'Remote',
    exp2Period: 'Jan 2024 - Present',
    exp2Desc1: 'Development of custom websites and applications for various clients',
    exp2Desc2: 'Creation of interactive portfolios with advanced animations',
    exp2Desc3: 'Performance optimization and Lighthouse scores',
    exp2Desc4: 'Integration of payment systems and third-party APIs',
    exp3Role: 'Mobile Developer',
    exp3Company: 'Academic Project (ESCa)',
    exp3Location: 'Yaoundé, Cameroon',
    exp3Period: 'Sep 2023 - May 2024',
    exp3Desc1: 'Development of a CRUD application in C# for data management',
    exp3Desc2: 'Research and prototyping of applications with Flutter',
    exp3Desc3: 'Team collaboration with Agile methodology',
    exp3Desc4: 'Project presentation before a professional jury',
    // Projects section details
    proj1Title: 'E-Learning Platform',
    proj1Desc: 'A web platform allowing users to access online courses, with user management, courses, and quizzes.',
    proj2Title: 'CRUD Application',
    proj2Desc: 'A data management application allowing to create, read, update, and delete records.',
    proj3Title: 'Interactive Portfolio',
    proj3Desc: 'A personal portfolio showcasing my web development skills with a modern interface.',
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