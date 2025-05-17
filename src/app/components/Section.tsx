'use client';

import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className }) => {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 px-4 md:px-0 ${className}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-10 md:mb-12 text-center text-slate-700 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
