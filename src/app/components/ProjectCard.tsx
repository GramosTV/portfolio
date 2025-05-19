'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
  titleKey: string;
  descriptionKey: string;
  imageUrl: string;
  projectUrl: string;
  techStack: string[]; // Changed from techStackKeys to techStack, expecting a direct array
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  titleKey,
  descriptionKey,
  imageUrl,
  projectUrl,
  techStack,
  index,
}) => {
  const t = useTranslations('PageContent');

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 ease-out border border-slate-200 hover:shadow-2xl flex flex-col h-full"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      {' '}
      <div className="relative w-full h-40 sm:h-48 md:h-64">
        <Image
          src={imageUrl}
          alt={t(titleKey)} // Use translated title for alt text
          fill
          unoptimized={imageUrl.includes('.gif')}
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>{' '}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2">{t(titleKey)}</h3>
        <p className="text-slate-600 leading-relaxed text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">{t(descriptionKey)}</p>
        <div className="mb-4">
          {' '}
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 sm:mb-2">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {techStack &&
              techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-sky-100 text-sky-700 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>
        <Link
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 bg-sky-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-sky-700 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          View Project{' '}
          <FiExternalLink className="ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
