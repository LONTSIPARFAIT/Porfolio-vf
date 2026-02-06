import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, 
  SiNodedotjs, SiLaravel, SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiFigma, SiAdobexd 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      ]
    },
    {
      category: 'Outils & DevOps',
      skills: [
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
        { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
        { name: 'Adobe XD', icon: <SiAdobexd />, color: '#FF61F6' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4"
        >
          Mes <span className="text-accent">Compétences</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Technologies et outils que j'utilise pour donner vie à vos projets
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">{category.category}</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: skillIndex * 0.1 }}
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-2" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Section compétences supplémentaires */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold text-center mb-8">Compétences Complémentaires</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['Agile/Scrum', 'SEO', 'Responsive Design', 'REST APIs', 'GraphQL', 
            'Testing', 'CI/CD', 'AWS Basics', 'UI/UX Principles', 'Performance Optimization'].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;