import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-dark-100 dark:bg-dark-800 shadow-lg hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors duration-200"
      aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-dark-700" />}
      <span className="sr-only">{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
    </button>
  );
};

export default DarkModeButton; 