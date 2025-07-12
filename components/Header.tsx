import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ChatWidget from './ChatWidget';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pendingSection = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section after navigation if needed
  useEffect(() => {
    if (pendingSection.current && location.pathname === '/') {
      const href = pendingSection.current;
      pendingSection.current = null;
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // slight delay to ensure DOM is ready
    }
  }, [location]);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '/certifications', isRoute: true },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (!href.startsWith('#')) return;
    if (location.pathname !== '/') {
      pendingSection.current = href;
      navigate('/');
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold gradient-text"
          >
            <Link to="/" onClick={handleHomeClick}>Portfolio</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-dark-600 dark:text-dark-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                  onClick={item.name === 'Home' ? handleHomeClick : () => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-dark-600 dark:text-dark-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              )
            )}
            {/* Chat Widget */}
            <ChatWidget />
            {/* Dark mode toggle button */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors duration-200"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-dark-700" />}
              <span className="sr-only">{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-dark-600 dark:text-dark-100 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            title={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-dark-900 border-t border-dark-200 dark:border-dark-700"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block w-full text-left py-2 text-dark-600 dark:text-dark-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                    onClick={item.name === 'Home' ? handleHomeClick : () => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-2 text-dark-600 dark:text-dark-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                )
              )}
              {/* Dark mode toggle button for mobile */}
              <button
                onClick={toggleDarkMode}
                className="mt-2 p-2 rounded-full bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors duration-200 w-full flex items-center justify-center"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-dark-700" />}
                <span className="ml-2 font-medium sr-only">{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 