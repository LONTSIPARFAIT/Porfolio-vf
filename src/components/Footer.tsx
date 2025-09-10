import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Container, Facebook, Twitter, Youtube, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  // Référence pour le footer
  const ref = useRef(null);
  // Détecter si le footer est dans la vue
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  // Contrôler les animations
  const controls = useAnimation();

  // Variantes pour les éléments
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Relancer les animations quand le footer entre dans la vue
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <motion.footer
      ref={ref}
      className="footer footer-center py-8 bg-base-300 shadow-md"
      variants={textVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.aside
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <Container className="w-8 h-8 text-accent" />
          <p className="font-bold text-lg">
            Perfecto
            <span className="text-accent">Dev</span>
          </p>
        </motion.aside>
        <motion.nav
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-4"
        >
          <div className="grid grid-flow-col gap-2">
            <motion.a
              href="https://linkedin.com/in/[votreprofil]" // Remplacez par votre profil LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-current" />
            </motion.a>
            <motion.a
              href="https://github.com/[votreprofil]" // Remplacez par votre profil GitHub
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-current" />
            </motion.a>
            <motion.a
              href="https://instagram.com/[votreprofil]" // Remplacez par votre profil Instagram
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-current" />
            </motion.a>
            <motion.a
              href="https://twitter.com/[votreprofil]" // Remplacez par votre profil Twitter
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-current" />
            </motion,a>
            <motion.a
              href="https://youtube.com/[votreprofil]" // Remplacez par votre profil YouTube
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-current" />
            </motion.a>
            <motion.a
              href="https://facebook.com/[votreprofil]" // Remplacez par votre profil Facebook
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-current" />
            </motion.a>
          </div>
        </motion.nav>
        <motion.p
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-4 text-sm text-gray-100"
        >
          Copyright © {new Date().getFullYear()} - All rights reserved
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;