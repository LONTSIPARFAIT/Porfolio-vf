import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      id: 1,
      role: 'Développeur Fullstack (Stage)',
      company: 'CFPC',
      location: 'Yaoundé, Cameroun',
      period: 'Juin 2024 - Août 2024',
      description: [
        'Développement d\'une plateforme d\'e-learning complète avec Laravel',
        'Création d\'API RESTful pour la gestion des utilisateurs et des cours',
        'Implémentation d\'un système d\'authentification sécurisé',
        'Optimisation des performances et du SEO de l\'application'
      ],
      technologies: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
      color: 'border-l-blue-500'
    },
    {
      id: 2,
      role: 'Développeur Web Freelance',
      company: 'Indépendant',
      location: 'Remote',
      period: 'Jan 2024 - Présent',
      description: [
        'Développement de sites web et applications sur mesure pour divers clients',
        'Création de portfolios interactifs avec animations avancées',
        'Optimisation de performances et scores Lighthouse',
        'Intégration de systèmes de paiement et API tierces'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      color: 'border-l-purple-500'
    },
    {
      id: 3,
      role: 'Développeur Mobile',
      company: 'Projet Académique (ESCa)',
      location: 'Yaoundé, Cameroun',
      period: 'Sep 2023 - Mai 2024',
      description: [
        'Développement d\'une application CRUD en C# pour la gestion de données',
        'Recherche et prototypage d\'applications avec Flutter',
        'Collaboration en équipe avec méthodologie Agile',
        'Présentation du projet devant un jury professionnel'
      ],
      technologies: ['C#', '.NET', 'Flutter', 'SQL Server'],
      color: 'border-l-green-500'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          {t('experienceTitle')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          {t('experienceDescription')}
        </motion.p>
      </div>

      <div className="relative">
        {/* Timeline verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pl-4' : 'md:pl-1/2 md:pr-4'}`}
          >
            {/* Point sur la timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white dark:border-gray-900 z-10 hidden md:block" />

            {/* Carte d'expérience */}
            <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-l-4 ${exp.color} relative`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Briefcase className="w-5 h-5 text-accent" />
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full font-semibold">
                    {exp.company}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <ArrowRight className="w-4 h-4 text-accent mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;