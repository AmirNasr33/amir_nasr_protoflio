import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Cloud } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Photoshop', level: 50 },
        { name: 'Illustrator', level: 50 },
        { name: 'Prototyping', level: 85 },
      ]
    },
    {
      title: 'it & networking',
      icon: Cloud,
      skills: [
        { name: 'subneting', level: 90 },
        { name: 'routing', level: 75 },
        { name: 'windows server', level: 70 },
        { name: 'linux', level: 80 },
        { name: 'networking', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-dark-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-primary-600" size={24} />
                <h3 className="text-xl font-bold text-dark-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-dark-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-primary-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-dark-900 mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'REST APIs', 'Linux', 'Windows', 'Context API', 'Tailwind CSS', 'Cypress',
                'Express.js', 'NPM', 'word ', 'windows server', 'Git',
              'Slack', 'Discord', 'VS Code', 'Postman', 'Figma', 'excel ', 'Photoshop', 'Illustrator', 'power point',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 