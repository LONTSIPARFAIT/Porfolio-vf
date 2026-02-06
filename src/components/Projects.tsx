import { motion } from 'framer-motion';
import { Github, Eye, Code } from 'lucide-react';
import { useState } from 'react';
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

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
    <section id="projects" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Mes <span className="text-accent">Projets</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Une sélection de mes réalisations les plus récentes
        </motion.p>
      </div>

      {/* Filtres */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === cat.id
                ? 'bg-accent text-white'
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Grille de projets */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Badge featured */}
            {project.featured && (
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                  ☆ FEATURED
                </span>
              </div>
            )}

            {/* Image du projet */}
            {project.image && (
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )}

            {/* Contenu */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Boutons d'action */}
              <div className="flex gap-3">
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn btn-accent btn-sm flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-4 h-4" />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Code className="w-4 h-4" />
                  Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Voir plus */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/ton-username"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 dark:bg-gray-800 rounded-full font-semibold hover:bg-accent hover:text-white transition-colors duration-300"
        >
          Voir plus sur GitHub
          <Github className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;