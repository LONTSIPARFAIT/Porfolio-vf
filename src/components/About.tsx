import { motion } from 'framer-motion';
import { Code2, Palette, Smartphone, Server, Users, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const skills = [
    { icon: <Code2 />, title: 'Frontend', description: 'React, TypeScript, Tailwind CSS', color: 'from-blue-500 to-cyan-500' },
    { icon: <Server />, title: 'Backend', description: 'Node.js, Laravel, PostgreSQL', color: 'from-purple-500 to-pink-500' },
    { icon: <Smartphone />, title: 'Mobile', description: 'React Native, Flutter', color: 'from-green-500 to-emerald-500' },
    { icon: <Palette />, title: 'UI/UX Design', description: 'Figma, Adobe XD, Prototyping', color: 'from-orange-500 to-red-500' },
    { icon: <Rocket />, title: 'DevOps', description: 'Docker, AWS, CI/CD', color: 'from-yellow-500 to-orange-500' },
    { icon: <Users />, title: 'Collaboration', description: 'Git, Agile, Scrum', color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          {t('aboutTitle')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          {t('aboutDescription')}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold">{t('philosophyTitle')}</h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t('philosophyText')}
          </p>
          <div className="space-y-4">
            {[
              t('focusUX'),
              t('cleanCode'),
              t('optimalPerformance'),
              t('effectiveCollaboration')
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-accent/20 to-transparent rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '50+', label: t('projectsCompleted') },
                { value: '100%', label: t('clientSatisfaction') },
                { value: '24/7', label: t('availability') },
                { value: '∞', label: t('passion') },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
                >
                  <div className="text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grille de compétences */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="group"
          >
            <div className={`bg-gradient-to-br ${skill.color} p-0.5 rounded-2xl`}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full transform transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;