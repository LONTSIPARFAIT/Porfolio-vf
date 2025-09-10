import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Title from './Title';
import imgCSS from '../assets/techno/css.png';
import imgJS from '../assets/techno/js.png';
import imgREACT from '../assets/techno/react.png';
import imgHTML from '../assets/techno/html.png';
import imgNEXT from '../assets/techno/next-js.webp';
import imgNODE from '../assets/techno/node-js.png';
import imgTYPE from '../assets/techno/typescript.svg';
import imgTAILWIND from '../assets/techno/tailwind.png';
import imgPRISMA from '../assets/techno/prisma.webp';
import google from '../assets/companies/google.png';
import meta from '../assets/companies/meta.webp';
import amazon from '../assets/companies/amazon.png';

const skills = [
  { id: 1, name: 'HTML', image: imgHTML },
  { id: 2, name: 'CSS', image: imgCSS },
  { id: 3, name: 'JavaScript', image: imgJS },
  { id: 4, name: 'React', image: imgREACT },
  { id: 5, name: 'Node.js', image: imgNODE },
  { id: 6, name: 'Tailwind CSS', image: imgTAILWIND },
  { id: 7, name: 'TypeScript', image: imgTYPE },
  { id: 8, name: 'Next.js', image: imgNEXT },
  { id: 9, name: 'Prisma', image: imgPRISMA },
];

const experiences = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Google',
    period: 'Sep 2022 - Présent',
    description: [
      'Développement de nouvelles fonctionnalités pour Google Maps.',
      'Optimisation des performances de l’application.',
    ],
    image: google,
  },
  {
    id: 2,
    role: 'Fullstack Developer',
    company: 'Meta',
    period: 'Jan 2021 - Août 2022',
    description: [
      'Création d’une plateforme interne de collaboration pour les équipes.',
      'Mise en place d’une architecture scalable et optimisée.',
    ],
    image: meta,
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'Amazon',
    period: 'Mai 2019 - Déc 2020',
    description: [
      'Développement d’une interface utilisateur pour Amazon Web Services.',
      'Implémentation des tests unitaires et E2E.',
    ],
    image: amazon,
  },
];

const Experience = () => {
  // Référence pour la section #experience
  const ref = useRef(null);
  // Détecter si la section est dans la vue
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  // Contrôler les animations
  const controls = useAnimation();

  // Variantes pour le titre, les compétences et les expériences
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
    <div id="experience" className="pb-10" ref={ref}>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Title title="Expériences" />
      </motion.div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="flex justify-center items-center flex-col"
              variants={textVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.1, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-sm mt-2">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="md:ml-8 flex flex-col space-y-4">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
              variants={textVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="object-cover h-10 w-10"
                />
                <div className="ml-4">
                  <h1 className="text-xl text-accent font-bold">
                    {experience.role}, {experience.company}
                  </h1>
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>
              <ul className="list-disc ml-16 mt-2">
                {experience.description.map((desc, index) => (
                  <li key={index} className="text-gray-100">{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;