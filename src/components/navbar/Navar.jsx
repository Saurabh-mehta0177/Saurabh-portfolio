
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#experience', label: 'Experience' },
  { href: '#languages', label: 'Languages' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  // Default dark mode
  return true;
});

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
     <header className={`sticky top-0 w-full z-50 transition-all duration-300  ${scrolled 
       ? 'bg-gradient-to-r from from-red-400 via-white/90 to bg-orange-400 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-gray-900/95 shadow-xl backdrop-blur-lg' 
       : 'bg-gradient-to-r from-red-400 via-white/85 to bg-orange-400 dark:from-gray-900/90 dark:via-gray-900/85 dark:to-gray-900/90 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          
          {/* Logo with gradient */}
          <a href="#" className="group relative">
            <span className="text-3xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 dark:from-red-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
              Portfolio
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Desktop Navigation with gradient hover effects */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group px-4 py-2 rounded-lg transition-all duration-300"
              >
                <span className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-transparent bg-gradient-to-r from-red-600 to-blue-600 dark:from-red-400 dark:to-blue-400 bg-clip-text transition-all duration-300">
                  {link.label}
                </span>
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-50 to-blue-50 dark:from-red-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 group-hover:w-3/4 group-hover:left-1/4 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            {/* Dark mode toggle with gradient */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative p-2.5 rounded-full group transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {darkMode ? (
                <Sun size={22} className="text-yellow-400 transition-transform duration-300 group-hover:rotate-12" />
              ) : (
                <Moon size={22} className="text-blue-600 transition-transform duration-300 group-hover:rotate-12" />
              )}
            </button>

            {/* Mobile menu button with gradient */}
            <button
              className="md:hidden p-2.5 rounded-lg relative group transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {mobileMenuOpen ? (
                <X size={26} className="text-red-600 dark:text-red-400 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu size={26} className="text-gray-700 dark:text-gray-200 transition-transform duration-300 group-hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with gradient background */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-white via-white to-gray-50/95 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800/95 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50 px-4 py-6 shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-red-50/50 hover:to-blue-50/50 dark:hover:from-red-900/20 dark:hover:to-blue-900/20"
              >
                <span className="text-lg font-medium text-gray-700 dark:text-gray-200 group-hover:text-transparent bg-gradient-to-r from-red-600 to-blue-600 dark:from-red-400 dark:to-blue-400 bg-clip-text">
                  {link.label}
                </span>
                <ChevronDown size={20} className="text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 -rotate-90 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            ))}
          </div>
          
          {/* Gradient divider */}
          <div className="mt-6 pt-6 border-t border-gradient-to-r from-red-200 via-purple-200 to-blue-200 dark:from-red-800/30 dark:via-purple-800/30 dark:to-blue-800/30">
            <div className="flex items-center justify-center space-x-4">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 animate-pulse"></div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Navigation</span>
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;