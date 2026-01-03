import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  // Référence pour le titre
  const ref = useRef(null);
  // Détecter si le titre est dans la vue
  const isInView = useInView(ref, { once: true, margin: '-200px' }); // Marge plus large pour détection
  // Contrôler les animations
  const controls = useAnimation();

  // Variantes pour l'animation du titre
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

 const underlineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    animate: {
      scaleX: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        repeat: Infinity,
        duration: 2.5,
        ease: 'easeInOut' as const, // Typage explicite pour Easing
      },
    },
  };

  // Relancer les animations quand le titre entre dans la vue
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Forcer l'animation visible au chargement si déjà dans la vue
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className="relative uppercase font-bold text-center text-2xl sm:text-4xl text-accent mb-8 z-10"
      variants={textVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, color: '#EEDFC3FF' }}
    >
      {title}
      <motion.span
        className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[60%] h-[2px] bg-accent"
        variants={underlineVariants}
        animate="animate"
      />
    </motion.div>
  );
};

export default Title;