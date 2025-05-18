'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface SectionProps {
  id: string;
  titleKey: string; // Changed from title to titleKey
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, titleKey, children, className }) => {
  const t = useTranslations('PageContent'); // Assuming PageContent contains section titles

  return (
    <motion.section
      id={id}
      className={`py-12 sm:py-16 md:py-20 lg:py-24 px-4 ${className}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-slate-700 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          {t(titleKey)} {/* Use translation for the title */}
        </motion.h2>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
