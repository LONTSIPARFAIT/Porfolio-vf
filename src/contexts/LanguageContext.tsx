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