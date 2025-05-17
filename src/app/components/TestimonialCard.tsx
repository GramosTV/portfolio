'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface TestimonialCardProps {
  quoteKey: string;
  nameKey: string;
  roleKey: string;
  imageUrl: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quoteKey, nameKey, roleKey, imageUrl, index }) => {
  const t = useTranslations('PageContent');
  return (
    <motion.div
      className="bg-slate-50 p-6 md:p-8 rounded-xl shadow-lg border border-slate-200 flex flex-col items-center text-center h-full transform hover:scale-[1.02] transition-all duration-300 ease-out hover:shadow-2xl"
      initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
    >
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 shadow-md border-2 border-sky-500">
        <Image src={imageUrl} alt={t(nameKey)} layout="fill" objectFit="cover" />
      </div>
      <blockquote className="text-slate-600 italic leading-relaxed mb-4 text-md md:text-lg flex-grow">
        &ldquo;{t(quoteKey)}&rdquo;
      </blockquote>
      <div className="mt-auto">
        <p className="font-semibold text-slate-800 text-lg">{t(nameKey)}</p>
        <p className="text-sky-600 text-sm">{t(roleKey)}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
