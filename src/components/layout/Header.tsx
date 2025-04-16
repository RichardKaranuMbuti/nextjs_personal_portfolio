"use client";

import { MenuIcon, MoonIcon, SunIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from '../ui/Container';

// Define props interface
interface HeaderProps {
  basics: {
    name: string;
    // Add other properties from basics that you might need
  };
}

const Header = ({ basics }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Apply the theme
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm">
      <Container className="flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center font-heading text-xl font-bold text-neutral-900 dark:text-white mr-8" >
          <span className="gradient-text">{basics.name.split(' ')[0]}</span>
          <span className="ml-1">{basics.name.split(' ')[1]}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-neutral-700 hover:text-primary-600 dark:text-neutral-200 dark:hover:text-primary-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-neutral-700 dark:text-neutral-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 shadow-lg animate-fade-in">
          <Container className="py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-neutral-700 hover:text-primary-600 dark:text-neutral-200 dark:hover:text-primary-400 py-2 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;