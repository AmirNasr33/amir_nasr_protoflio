import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-dark-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            My journey in IT, development, and hands-on project work.
          </p>
        </motion.div>

        {/* Area of Expertise & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 grid md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="text-xl font-bold text-primary-700 mb-4">Area of Expertise</h3>
            <ul className="list-disc list-inside text-dark-700 space-y-1">
              <li>API Development (Node.js, Express)</li>
              <li>Database Management</li>
              <li>Performance Optimization</li>
              <li>Accessibility & Application Security</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary-700 mb-4">Key Achievements</h3>
            <ul className="list-disc list-inside text-dark-700 space-y-1">
              <li>Developed and deployed an e-commerce API using Node.js and Express, reducing development time</li>
              <li>Optimized database queries, improving application performance</li>
              <li>Integrated a third-party payment gateway for secure transactions</li>
              <li>Designed and implemented a secure authentication system</li>
              <li>Earned certifications: <span className="font-semibold">CCNA, Routing & Switching</span></li>
            </ul>
          </div>
        </motion.div>

        {/* Academic Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-dark-900 mb-2">Academic Project: TRENDIX E-Commerce Web App</h3>
          <div className="text-dark-700 mb-2 font-semibold">EGYPTION E-LEARNING UNIVERSITY</div>
          <ul className="list-disc list-inside text-dark-700 space-y-1 mb-2">
            <li>Designed and implemented a back-end system for an e-commerce platform, handling user accounts, products, and orders</li>
            <li>Integrated payment gateway to enable secure transactions</li>
            <li>Deployed the application on cloud platforms (Render, Vercel)</li>
          </ul>
        </motion.div>

        {/* IT Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-dark-900 mb-2">IT Support</h3>
          <ul className="list-disc list-inside text-dark-700 space-y-1 mb-2">
            <li>Set up IT infrastructure for community events, ensuring seamless connectivity and system functionality</li>
            <li>Installed and configured new systems and software for organizational offices</li>
            <li>Conducted routine maintenance checks, reducing downtime and improving reliability</li>
          </ul>
        </motion.div>

        {/* Training Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-dark-900 mb-2">IT Internship</h3>
          <div className="text-dark-700 mb-2 font-semibold">PMS Company – Cairo, Egypt (2022 – 2023 – 2024)</div>
          <ul className="list-disc list-inside text-dark-700 space-y-1 mb-2">
            <li>Gained hands-on experience in IT support, including troubleshooting, hardware maintenance, and software installation</li>
            <li>Assisted in configuring and maintaining systems (servers, routers, databases)</li>
            <li>Participated in team projects focused on security, IT infrastructure upgrades, and system optimization</li>
            <li>Documented technical issues and resolutions to enhance support efficiency</li>
            <li>Developed a foundational understanding of core IT technologies, including Active Directory and network security</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 