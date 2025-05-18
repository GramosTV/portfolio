'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com/gramostv', icon: <FaGithub size={20} />, labelKey: 'github' },
    { href: 'https://www.linkedin.com/in/mikolaj-gramowski', icon: <FaLinkedin size={20} />, labelKey: 'linkedin' },
    { href: '#', icon: <FaTwitter size={20} />, labelKey: 'twitter' },
    { href: 'mailto:gramowskimikolaj@gmail.com', icon: <FaEnvelope size={20} />, labelKey: 'email' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
      className="bg-slate-900 text-slate-400 p-6 sm:p-8 md:p-12 shadow-inner relative overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sky-500/10 rounded-full filter blur-2xl" />
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full filter blur-2xl" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-center">
          {' '}
          <motion.div
            className="md:col-span-1 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-2">Mikołaj Gramowski</h3>
            <p className="text-xs sm:text-sm">{t('tagline')}</p>
          </motion.div>
          <motion.div
            className="md:col-span-2 flex flex-col sm:flex-row justify-center md:justify-end items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {socialLinks.map((link) => (
              <Link
                key={link.labelKey}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-300 hover:text-sky-400 transition-colors duration-300 group"
              >
                <span className="flex-shrink-0">{link.icon}</span>
                <span className="ml-2 text-xs sm:text-sm group-hover:underline">{t(link.labelKey)}</span>
                <FiArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block" />
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-700 pt-4 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p>
            &copy; {currentYear} Mikołaj Gramowski. {t('rights')}
          </p>
          <p className="text-xs text-slate-500 mt-1">{t('builtWith')}</p>
          <p className="mt-3 sm:mt-4">
            <Link href="/privacy-policy" className="hover:text-sky-400 transition-colors text-xs sm:text-sm">
              {t('privacyPolicy')}
            </Link>
            {' | '}
            <Link href="/terms-of-service" className="hover:text-sky-400 transition-colors text-xs sm:text-sm">
              {t('termsOfService')}
            </Link>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
