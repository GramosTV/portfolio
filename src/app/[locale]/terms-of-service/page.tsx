'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const t = useTranslations('TermsOfServicePage');

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen pt-24 md:pt-32 pb-16">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-3xl mx-auto bg-slate-800/70 p-8 md:p-12 rounded-xl shadow-2xl border border-slate-700 backdrop-blur-md">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold mb-8 text-sky-400 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            {t('title')}
          </motion.h1>

          <motion.section
            className="prose prose-invert prose-lg max-w-none text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>{t('lastUpdated')}</p>

            <h2 className="text-2xl font-semibold text-sky-500 mt-8 mb-4">{t('acceptanceTitle')}</h2>
            <p>{t('acceptanceContent')}</p>

            <h2 className="text-2xl font-semibold text-sky-500 mt-8 mb-4">{t('useOfServiceTitle')}</h2>
            <p>{t('useOfServiceContentP1')}</p>
            <p>{t('useOfServiceContentP2')}</p>

            <h2 className="text-2xl font-semibold text-sky-500 mt-8 mb-4">{t('intellectualPropertyTitle')}</h2>
            <p>{t('intellectualPropertyContent')}</p>

            <h2 className="text-2xl font-semibold text-sky-500 mt-8 mb-4">{t('disclaimersTitle')}</h2>
            <p>{t('disclaimersContent')}</p>

            <h2 className="text-2xl font-semibold text-sky-500 mt-8 mb-4">{t('limitationOfLiabilityTitle')}</h2>
            <p>{t('limitationOfLiabilityContent')}</p>

            <h2 className="text-2xl font-semibold text-sky-500 mt-8 mb-4">{t('governingLawTitle')}</h2>
            <p>{t('governingLawContent')}</p>

            <h2 className="text-2xl font-semibold text-sky-500 mt-8 mb-4">{t('changesToTermsTitle')}</h2>
            <p>{t('changesToTermsContent')}</p>

            <h2 className="text-2xl font-semibold text-sky-500 mt-8 mb-4">{t('contactUsTitle')}</h2>
            <p>
              {t('contactUsContent')}{' '}
              <a href="mailto:gramowskimikolaj@gmail.com" className="text-sky-400 hover:text-sky-300 underline">
                gramowskimikolaj@gmail.com
              </a>
              .
            </p>
          </motion.section>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/"
              className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-out"
            >
              {t('backToHome')}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
