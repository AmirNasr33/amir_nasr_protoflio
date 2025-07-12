import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Amir nasr fahmy' },
    { icon: Calendar, label: 'Age', value: '22 Years' },
    { icon: Mail, label: 'Email', value: 'ameer.nasr70@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'benha, egypt' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Get to know me better and understand my journey in the world of technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">
                Who I Am
              </h3>
              <p className="text-dark-600 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with over 3 years of experience in creating 
                modern web applications. I specialize in React, Node.js, and cloud technologies, 
                always striving to write clean, maintainable code and create exceptional user experiences.
              </p>
              <p className="text-dark-600 leading-relaxed mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in continuous learning and staying up-to-date with the latest industry trends.
              </p>
              <p className="text-dark-600 leading-relaxed">
                I'm always excited to take on new challenges and work on projects that make a 
                real impact. Let's create something amazing together!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark-900 mb-6">
                Personal Information
              </h3>
              <div className="grid gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-dark-50 rounded-lg"
                  >
                    <info.icon className="text-primary-600" size={20} />
                    <div>
                      <span className="text-sm text-dark-500 font-medium">{info.label}</span>
                      <p className="text-dark-900 font-semibold">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <h4 className="text-xl font-bold text-dark-900 mb-4">Education</h4>
                <div className="bg-dark-50 rounded-lg p-4">
                  <h5 className="font-semibold text-dark-900">Bachelor of Computer Sciene and information technology</h5>
                  <p className="text-dark-600">Egyptian E-learning university 2021-2025</p>
                  <p className="text-sm text-dark-500 mt-1">
                    Specialized in Software Engineering with focus on web development
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 