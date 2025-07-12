import React from 'react';
import { motion } from 'framer-motion';

// Example certificate data. Replace with your real certificates!
const certificates = [
  {
    title: 'CCNA Routing & Switching',
    image: 'https://res.cloudinary.com/dkxroa9u5/image/upload/v1752114622/Screenshot_10-7-2025_5301__sj6v8g.jpg',
    description: 'Cisco Certified Network Associate'
  },
  {
    title: 'IT Essential',
    image: 'https://res.cloudinary.com/dkxroa9u5/image/upload/v1752114796/Screenshot_10-7-2025_53255__ejcsvz.jpg',
    description: 'IT Essentials: PC Hardware and Software'
    },
    // Add more certificates as needed
    {
      title: 'CCNAv7: Introduction to Networks',
      image: 'https://res.cloudinary.com/dkxroa9u5/image/upload/v1752115174/Screenshot_10-7-2025_53918__y567lg.jpg',
      description: 'CCNA: Introduction to Networks'
    },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="section-padding bg-white min-h-screen">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Here are some of the certifications I have earned. Click on an image to view it larger.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-50 rounded-xl shadow-lg p-4 flex flex-col items-center card-hover"
            >
              <a href={cert.image} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-contain rounded-lg mb-4 border-2 border-primary-100 hover:border-primary-500 transition-all duration-200"
                />
              </a>
              <h3 className="text-lg font-bold text-dark-900 mb-2">{cert.title}</h3>
              {cert.description && <p className="text-dark-600 text-sm text-center">{cert.description}</p>}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-dark-500 text-sm">
        </div>
      </div>
    </section>
  );
};

export default Certifications; 