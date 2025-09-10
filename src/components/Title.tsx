import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  // Référence pour le titre
  const ref = useRef(null);
  // Détecter si le titre est dans la vue
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  // Contrôler les animations
  const controls = useAnimation();

  // Variantes pour l'animation du titre
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variantes pour l'animation du trait
  const underlineVariants = {
    animate: {
      scaleX: [1, 1.2, 1], // Pulsation subtile
      opacity: [0.7, 1, 0.7],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  // Relancer les animations quand le titre entre dans la vue
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="relative uppercase font-bold text-center text-2xl sm:text-4xl text-accent mb-8"
      variants={textVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, color: '#facc15' }} // Changement de couleur au survol
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