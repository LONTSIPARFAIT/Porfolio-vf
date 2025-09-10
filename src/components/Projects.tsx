import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Title from './Title';
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import { Github, Video } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Plateforme d’E-learning',
    description:
      'Une plateforme web permettant aux utilisateurs d’accéder à des cours en ligne, avec gestion des utilisateurs, des cours et des quiz. Développée dans le cadre d’un projet académique pour faciliter l’apprentissage à distance.',
    technologies: ['Laravel', 'HTML', 'CSS', 'JavaScript'],
    demoLink: '#demoLink', // Remplacez par un lien réel si disponible
    repoLink: '#repoLink', // Remplacez par un lien GitHub si disponible
    image: img1,
  },
  {
    id: 2,
    title: 'Application CRUD',
    description:
      'Une application de gestion de données permettant de créer, lire, mettre à jour et supprimer des enregistrements. Développée en C# pour démontrer les compétences en gestion de bases de données.',
    technologies: ['C#', '.NET', 'SQL'],
    demoLink: '#demoLink', // Remplacez par un lien réel si disponible
    repoLink: '#repoLink', // Remplacez par un lien GitHub si disponible
    image: img2,
  },
  {
    id: 3,
    title: 'Portfolio Interactif',
    description:
      'Un portfolio personnel mettant en avant mes compétences en développement web avec une interface moderne et interactive. Construit pour présenter mes projets et mon expertise technique.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    demoLink: '#demoLink', // Remplacez par un lien réel si disponible
    repoLink: '#repoLink', // Remplacez par un lien GitHub si disponible
    image: img3,
  },
];

const Projects = () => {
  // Référence pour la section #projects
  const ref = useRef(null);
  // Détecter si la section est dans la vue
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  // Contrôler les animations
  const controls = useAnimation();

  // Variantes pour le titre et les cartes
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
    <div className="pt-20 pb-10" id="projects" ref={ref}>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Title title="Mes Projets" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg"
            variants={textVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div className="my-2 font-bold">
              <h1 className="text-xl">{project.title}</h1>
              <p className="text-sm text-gray-100">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge badge-accent badge-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex">
              <a
                className="btn btn-accent w-2/3"
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                Demo
                <Video className="w-4" />
              </a>
              <a
                className="btn btn-neutral w-1/3 ml-2"
                href={project.repoLink}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;