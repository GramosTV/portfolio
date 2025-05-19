'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const navItemVariantsContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.3,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -15, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const logoVariant = {
  hidden: { opacity: 0, y: -10, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
};

const Header = () => {
  const t = useTranslations('Header');
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.85]);
  const headerBgOpacity = useTransform(scrollY, [0, 100], [0, 0.7]);
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 0px 0px 0px rgba(0,0,0,0)', '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)']
  );

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { href: '#about', labelKey: 'about' },
    { href: '#experience', labelKey: 'experience' },
    { href: '#projects', labelKey: 'projects' },
    { href: '#education', labelKey: 'education' },
    { href: '#skills', labelKey: 'skills' },
    { href: '#testimonials', labelKey: 'testimonials' },
    { href: '#contact', labelKey: 'contact' },
    { href: '/Mikołaj_Gramowski_CV.pdf', labelKey: 'cv', isExternal: true }, // Added CV link
  ];

  return (
    <motion.header
      style={{
        opacity: headerOpacity,
        // @ts-ignore
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        backgroundColor: useTransform(scrollY, [0, 100], ['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 0.8)']),
        boxShadow: headerShadow,
      }}
      className={`py-3 sm:py-4 px-3 sm:px-4 fixed w-full z-50 top-0 transition-all duration-300 ease-in-out ${
        isScrolled ? 'text-slate-100' : 'text-slate-800'
      }`}
    >
      {' '}
      <div className="container mx-auto flex justify-between items-center">
        {' '}
        <Link
          href="/" // Will be prefixed by middleware
          className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight flex justify-center items-center ${
            isScrolled ? 'text-slate-100 hover:text-sky-400' : 'text-slate-800 hover:text-sky-600'
          } transition-all duration-200`}
        >
          <motion.span variants={logoVariant} initial="hidden" animate="visible" className="truncate">
            Mikołaj Gramowski
          </motion.span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <motion.ul
            className="flex items-center space-x-1"
            initial="hidden"
            animate="visible"
            variants={navItemVariantsContainer}
          >
            {navLinks.map((item) => (
              <motion.li key={item.href} variants={navItemVariants}>
                <Link
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className={`hover:bg-sky-500/20 ${
                    isScrolled ? 'text-slate-100 hover:text-white' : 'text-slate-800 hover:text-sky-600'
                  } transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {t(item.labelKey)}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          <LanguageSwitcher />
        </nav>
        {/* Mobile Menu Button & Language Switcher */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher />
          <motion.button
            onClick={toggleMobileMenu}
            className={`${
              isScrolled ? 'text-slate-100 hover:text-white' : 'text-slate-800 hover:text-sky-600'
            } focus:outline-none p-2 rounded-md hover:bg-sky-500/30 transition-all duration-200`}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden fixed top-[60px] left-0 right-0 bg-slate-800/95 backdrop-blur-md shadow-lg pb-4 max-h-[80vh] overflow-y-auto z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ul className="flex flex-col items-center space-y-2 pt-2">
            {navLinks.map((item) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: item.href.length * 0.02 }}
                className="w-full px-4"
              >
                <Link
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={toggleMobileMenu} // Close menu on click
                  className="block text-slate-100 hover:text-sky-300 transition-all duration-200 py-3 px-4 rounded-md text-base font-medium w-full text-center hover:bg-slate-700/50"
                >
                  {t(item.labelKey)}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
