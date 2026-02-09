import { motion } from 'framer-motion';
import { Github, Eye, Code } from 'lucide-react';
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t('proj1Title'),
      description: t('proj1Desc'),
      technologies: ['Laravel', 'HTML', 'CSS', 'JavaScript'],
      demoLink: '#demoLink',
      repoLink: '#repoLink',
      image: img1,
    },
    {
      id: 2,
      title: t('proj2Title'),
      description: t('proj2Desc'),
      technologies: ['C#', '.NET', 'SQL'],
      demoLink: '#demoLink',
      repoLink: '#repoLink',
      image: img2,
    },
    {
      id: 3,
      title: t('proj3Title'),
      description: t('proj3Desc'),
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      demoLink: '#demoLink',
      repoLink: '#repoLink',
      image: img3,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          {t('projectsTitle')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          {t('projectsDescription')}
        </motion.p>
      </div>

      {/* Grille de projets */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Image du projet */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Contenu */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full"
                  >
                    {tech}
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
                  {t('liveDemo')}
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
                  {t('code')}
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
          href="https://github.com/LONTSIPARFAIT"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 dark:bg-gray-800 rounded-full font-semibold hover:bg-accent hover:text-white transition-colors duration-300"
        >
          {t('seeMoreOnGitHub')}
          <Github className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;