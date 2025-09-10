import { motion } from 'framer-motion';
import { Mail, Twitter, Youtube, Facebook } from 'lucide-react';
import img from '../assets/img3.jpg';

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center md:my-32 my-10"
    >
      <motion.div
        className="flex flex-col items-center md:items-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center md:text-left mt-4 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Salut, je suis <br />
          <span className="text-accent">Lontsi Parfait</span>
        </motion.h1>
        <motion.p
          className="my-4 text-md text-center md:text-left max-w-md text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          Développeur Fullstack passionné par la création d'applications web modernes, performantes et centrées sur l'utilisateur. <br />
          J'aime transformer des idées en solutions numériques innovantes. <br />
          Prêt à donner vie à votre projet ?
        </motion.p>
        <motion.a
          href="mailto:lontsi12@gmail.com"
          className="btn btn-accent md:w-fit flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-5 h-5" />
          Contactez-moi
        </motion.a>
        <motion.nav
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        >
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/[votreprofil]" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-current" />
            </a>
            <a href="https://youtube.com/[votreprofil]" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6 text-current" />
            </a>
            <a href="https://facebook.com/[votreprofil]" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 text-current" />
            </a>
          </div>
        </motion.nav>
      </motion.div>

      <motion.div
        className="md:ml-60 mb-8 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        <img
          src={img}
          alt="Lontsi Parfait"
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