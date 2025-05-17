'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
      className="bg-slate-900 text-slate-300 p-6 text-center mt-16 shadow-inner"
    >
      <p>&copy; {new Date().getFullYear()} Mikołaj Gramowski. All rights reserved.</p>
      <p className="text-sm text-slate-400 mt-1">Built with Next.js, Tailwind CSS, and Framer Motion.</p>
    </motion.footer>
  );
};

export default Footer;
