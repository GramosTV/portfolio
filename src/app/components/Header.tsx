'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-slate-900 text-white p-4 shadow-lg fixed w-full z-50 top-0"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-slate-300 transition-colors">
          Mikołaj Gramowski
        </Link>
        <nav>
          <motion.ul
            className="flex space-x-4"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {(
              [
                { href: '#about', label: 'About' },
                { href: '#experience', label: 'Experience' },
                { href: '#education', label: 'Education' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact' },
              ] as const
            ).map((item) => (
              <motion.li key={item.href} variants={navItemVariants}>
                <Link
                  href={item.href}
                  className="hover:text-sky-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
