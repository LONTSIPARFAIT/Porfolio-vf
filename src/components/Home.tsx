import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import { Mail, Twitter, Youtube, Facebook } from 'lucide-react';
import { useEffect, useRef } from 'react';
import img from '../assets/img3.jpg';

const Home = () => {
  // Référence pour la section #home
  const ref = useRef(null);
  // Détecter si la section est dans la vue
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  // Contrôler les animations
  const controls = useAnimation();

  // Variantes pour l'animation continue de l'image
const imageVariants: Variants = {
  float: {
    y: [-10, 10],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse' as const, // Ajoutez 'as const' pour forcer le type
    },
  },
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};


  // Variantes pour les autres éléments
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Relancer les animations quand la section entre dans la vue
  useEffect(() => {
    controls.start(isInView ? 'visible' : 'hidden');
  }, [isInView, controls]);

  return (
    <div
      id="home"
      ref={ref}
      className="flex flex-col-reverse md:flex-row items-center justify-center md:my-32 my-10"
    >
      <motion.div
        className="flex flex-col items-center md:items-start"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center md:text-left mt-4 md:mt-0"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Salut, je suis <br />
          <span className="text-accent">Lontsi Parfait</span>
        </motion.h1>
        <motion.p
          className="my-4 text-md text-center md:text-left max-w-md text-gray-100"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          Développeur Fullstack passionné par la création d'applications web modernes, performantes et centrées sur l'utilisateur. <br />
          J'aime transformer des idées en solutions numériques innovantes. <br />
          Prêt à donner vie à votre projet ?
        </motion.p>
        <motion.a
          href="mailto:lontsi12@gmail.com"
          className="btn btn-accent md:w-fit flex items-center gap-2"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-5 h-5" />
          Contactez-moi
        </motion.a>

        <motion.nav
          className="mt-6"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        >
          <div className="grid grid-flow-col gap-4">
            <motion.a
              href="https://twitter.com/[votreprofil]"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter className="w-6 h-6 text-current" />
            </motion.a>
            <motion.a
              href="https://youtube.com/[votreprofil]"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Youtube className="w-6 h-6 text-current" />
            </motion.a>
            <motion.a
              href="https://facebook.com/[votreprofil]"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook className="w-6 h-6 text-current" />
            </motion.a>
          </div>
        </motion.nav>
      </motion.div>

      <motion.div
        className="md:ml-60 mb-8 md:mb-0"
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? ['visible', 'float'] : 'hidden'}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        <img
          src={img}
          alt="Photo de profil de Lontsi Parfait"
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
          style={{
            borderRadius: '30% 70% 70% 30% / 67% 62% 38% 33%',
          }}
        />
      </motion.div>
    </div>
  );
};

export default Home;