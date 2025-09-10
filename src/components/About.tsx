import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Title from './Title';
import img from '../assets/img3.jpg';
import { CalendarSync, LetterText, Paintbrush } from 'lucide-react';

const aboutSections = [
  {
    id: 1,
    title: 'Développeur Frontend',
    description: 'Je suis un développeur frontend avec une bonne expérience.',
    icon: <LetterText className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: 'Développeur Backend',
    description: 'Je maîtrise les bases du développement backend pour créer des APIs robustes.',
    icon: <CalendarSync className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: 'Passionné par l’UI/UX',
    description: 'Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.',
    icon: <Paintbrush className="text-accent scale-150" />,
  },
];

const About = () => {
  // Référence pour la section #about
  const ref = useRef(null);
  // Détecter si la section est dans la vue
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  // Contrôler les animations
  const controls = useAnimation();

  // Variantes pour le titre et les sections
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variantes pour l'image (apparition sans flottement)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // Relancer les animations quand la section entre dans la vue
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32 pt-20" id="about" ref={ref}>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Title title="À Propos" />
      </motion.div>

      <div className="md:h-screen flex flex-col md:flex-row justify-center items-center">
        <motion.div
          className="hidden md:block mb-8 md:mb-0"
          variants={imageVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <img
            src={img}
            alt="Lontsi Parfait"
            className="w-96 object-cover rounded-xl"
          />
        </motion.div>

        <div className="md:ml-8 space-y-6">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
              variants={textVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mb-4 md:mb-0">{section.icon}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                <p className="text-sm text-gray-100">{section.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;