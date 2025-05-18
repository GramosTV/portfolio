'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface CardProps {
  titleKey: string;
  subtitleKey?: string;
  descriptionKey: string;
  dateKey?: string;
  icon?: React.ReactNode; // Added icon prop
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const Card: React.FC<CardProps> = ({ titleKey, subtitleKey, descriptionKey, dateKey, icon }) => {
  const t = useTranslations('PageContent');
  return (
    <motion.div
      className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
      variants={cardVariants}
    >
      {' '}
      {icon && <div className="text-sky-500 mb-2 sm:mb-3 self-start">{icon}</div>}
      <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-1">{t(titleKey)}</h3>
      {subtitleKey && <h4 className="text-sm sm:text-md font-medium text-sky-600 mb-1 sm:mb-2">{t(subtitleKey)}</h4>}
      {dateKey && <p className="text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3">{t(dateKey)}</p>}
      <p className="text-slate-600 leading-relaxed text-xs sm:text-sm flex-grow">{t(descriptionKey)}</p>
    </motion.div>
  );
};

export default Card;
