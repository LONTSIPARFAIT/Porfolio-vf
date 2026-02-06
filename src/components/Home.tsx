import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Download, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import img from '../assets/img3.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const { t } = useLanguage();
  const roles = [t('fullstack'), t('uiux'), t('creative'), t('problemSolver')];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: <Github />, href: 'https://github.com/ton-username', label: 'GitHub' },
    { icon: <Linkedin />, href: 'https://linkedin.com/in/lontsi-parfait', label: 'LinkedIn' },
    { icon: <Twitter />, href: 'https://twitter.com/ton-username', label: 'Twitter' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Texte et présentation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-lg text-accent font-semibold">{t('hello')}</h2>
            <h1 className="text-5xl md:text-6xl font-bold">
              Lontsi <span className="text-accent">Parfait</span>
            </h1>
            
            <div className="h-12">
              <motion.div
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-400"
              >
                {roles[textIndex]}
              </motion.div>
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            {t('description')}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              className="btn btn-accent px-8 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('contactMe')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="/cv.pdf" // Remplace par le chemin de ton CV
              download
              className="btn btn-outline border-accent text-accent hover:bg-accent hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2" />
              {t('downloadCV')}
            </motion.a>
          </div>

          {/* Liens sociaux */}
          <div className="flex space-x-4 pt-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Image de profil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
            {/* Décoration */}
            <motion.div
              className="absolute inset-0 border-4 border-accent rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            <motion.div
              className="absolute -inset-4 border-2 border-gray-300 dark:border-gray-600 rounded-full opacity-50"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* Image */}
            <motion.img
              src={img}
              alt="Lontsi Parfait"
              className="absolute inset-0 w-full h-full object-cover rounded-full border-8 border-white dark:border-gray-800 shadow-2xl"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {/* Badge d'expérience */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-2 rounded-full font-bold shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-center">
                <div className="text-2xl">2+</div>
                <div className="text-xs">Années d'expérience</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;