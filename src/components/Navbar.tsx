import { motion } from 'framer-motion';
import { Container } from 'lucide-react';

const NavBar = () => {
  // Variantes pour l'animation de la barre
  const navVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  // Variantes pour les éléments (logo et liens)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full bg-base-100 shadow-md z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex justify-center md:justify-between items-center p-4 text-3xl max-w-7xl mx-auto">
        <motion.a
          href="#home"
          className="flex items-center font-bold text-3xl md:text-xl"
          variants={itemVariants}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Container className="mr-2" />
          Perfecto
          <span className="text-accent">Dev</span>
        </motion.a>
        <motion.ul
          className="hidden md:flex space-x-6 font-medium"
          variants={itemVariants}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <motion.li
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.1, color: '#f59e0b' }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" className="btn btn-md btn-ghost transition">
              Accueil
            </a>
          </motion.li>
          <motion.li
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.1, color: '#f59e0b' }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#about" className="btn btn-md btn-ghost transition">
              À Proposds
            </a>
          </motion.li>
          <motion.li
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.1, color: '#f59e0b' }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#experience" className="btn btn-md btn-ghost transition">
              Mes Expériences
            </a>
          </motion.li>
          <motion.li
            variants={itemVariants}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.1, color: '#f59e0b' }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#projects" className="btn btn-md btn-ghost transition">
              Mes Compétences
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default NavBar;