import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'fashion e-commerce platform with AI',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: 'https://res.cloudinary.com/dkxroa9u5/image/upload/v1752109178/WhatsApp_Image_2025-07-10_at_03.59.07_c2556147_mqyflb.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', '', 'Tailwind CSS'],
      liveUrl: 'https://drive.google.com/file/d/1vkg2ZS08kq6Tx0-DeQ6cc8Gwyo7zvuXE/view?usp=drive_link',
      githubUrl: 'https://github.com/AmirNasr33?tab=repositories',
      featured: true
    },
//     {
//       title: 'Task Management App',
//       description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
//       image: 'https://via.placeholder.com/400x250/0ea5e9/ffffff?text=Task+App',
//       technologies: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
//       liveUrl: '#',
//       githubUrl: '#',
//       featured: true
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and beautiful UI design.',
//       image: 'https://via.placeholder.com/400x250/0ea5e9/ffffff?text=Portfolio',
//       technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
//       liveUrl: '#',
//       githubUrl: '#',
//       featured: false
//     },
//     {
//       title: 'Weather Dashboard',
//       description: 'A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful charts and animations.',
//       image: 'https://via.placeholder.com/400x250/0ea5e9/ffffff?text=Weather',
//       technologies: ['React', 'Chart.js', 'OpenWeatherMap API', 'CSS3'],
//       liveUrl: '#',
//       githubUrl: '#',
//       featured: false
//     },
//     {
//       title: 'Blog Platform',
//       description: 'A content management system for blogs with markdown support, user authentication, and admin dashboard.',
//       image: 'https://via.placeholder.com/400x250/0ea5e9/ffffff?text=Blog',
//       technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
//       liveUrl: '#',
//       githubUrl: '#',
//       featured: false
//     },
//     {
//       title: 'Chat Application',
//       description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
//       image: 'https://via.placeholder.com/400x250/0ea5e9/ffffff?text=Chat',
//       technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
//       liveUrl: '#',
//       githubUrl: '#',
//       featured: false
   //
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden card-hover ${
                project.featured ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.liveUrl}
                    className="bg-white/90 hover:bg-white text-dark-900 p-2 rounded-full transition-colors duration-200"
                    title="View Live"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="bg-white/90 hover:bg-white text-dark-900 p-2 rounded-full transition-colors duration-200"
                    title="View Code"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-dark-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                  >
                    <Eye size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-dark-600 hover:text-dark-700 font-semibold transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/AmirNasr33?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dark-900 hover:bg-dark-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 