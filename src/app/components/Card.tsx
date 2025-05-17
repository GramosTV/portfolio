'use client';

import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  subtitle?: string;
  description: string;
  date?: string;
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

const Card: React.FC<CardProps> = ({ title, subtitle, description, date, icon }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
      variants={cardVariants}
    >
      {icon && <div className="text-sky-500 mb-3 self-start">{icon}</div>}
      <h3 className="text-xl font-semibold text-slate-800 mb-1">{title}</h3>
      {subtitle && <h4 className="text-md font-medium text-sky-600 mb-2">{subtitle}</h4>}
      {date && <p className="text-sm text-slate-500 mb-3">{date}</p>}
      <p className="text-slate-600 leading-relaxed text-sm flex-grow">{description}</p>
    </motion.div>
  );
};

export default Card;
