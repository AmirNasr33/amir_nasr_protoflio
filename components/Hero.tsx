import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown, FileText } from 'lucide-react';
// @ts-ignore
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the download URL - replace with your actual CV PDF URL
    link.href = 'https://drive.google.com/file/d/1tPNoHsJhMxfei-UOonz1xfWioChb0MPL/view?usp=drive_link'; // Place your CV PDF in the public folder
    
    // Set the download filename
    link.download = 'Amir-Nasr-CV.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPortfolioPDF = () => {
    const element = document.getElementById('pdf-content');
    if (!element) return;
    // Show the div
    element.style.display = 'block';
    setTimeout(() => {
      const opt = {
        margin: 0.2,
        filename: 'Amir-Nasr-Portfolio.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };
      html2pdf().set(opt).from(element).save().then(() => {
        // Hide the div again
        element.style.display = 'none';
      });
    }, 100);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-dark-900 mb-4">
                Hi, I'm <span className="gradient-text">Amir Nasr</span>
              </h1>
              <p className="text-xl md:text-2xl text-dark-600 mb-8">
                Full Stack Developer & IT and Networking 
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <p className="text-lg text-dark-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I create beautiful, functional, and user-centered digital experiences. 
                With a passion for clean code and innovative design, I bring ideas to life 
                through modern web technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </button>
              <button 
                onClick={handleDownloadCV}
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </button>
              <button
                onClick={handleDownloadPortfolioPDF}
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
              >
                <FileText size={20} />
                Download Portfolio as PDF
              </button>
            </motion.div>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Main photo container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Photo placeholder - replace with your actual photo */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img
                      src="https://res.cloudinary.com/dkxroa9u5/image/upload/v1752107542/WhatsApp_Image_2025-07-10_at_03.31.53_b64013f8_t1rzwi.jpg"
                      alt="Amir Nasr"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
                  >
                    <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="text-dark-500 hover:text-primary-600 transition-colors duration-200"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm font-medium">Learn More</span>
              <ArrowDown size={20} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 