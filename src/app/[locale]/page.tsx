'use client';

import Section from '@/app/components/Section';
import Card from '@/app/components/Card';
import ProjectCard from '@/app/components/ProjectCard';
import TestimonialCard from '@/app/components/TestimonialCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FiGitMerge, FiArrowRight } from 'react-icons/fi';
import {
  FaReact,
  FaDatabase as FaDb,
  FaCode,
  FaPaintBrush,
  FaGraduationCap,
  FaStar as FaStarIcon,
  FaRegStar,
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const skillTagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: i * 0.05,
      ease: 'easeOut',
    },
  }),
  hover: {
    scale: 1.03,
    boxShadow: '0px 0px 4px rgba(0,0,0,0.1)',
    transition: { duration: 0.2 },
  },
};

export default function Home() {
  const t = useTranslations('PageContent');

  const skillsAdvanced = [
    { name: t('skillsNestjs'), icon: <FaCode className="mr-2" /> },
    { name: t('skillsMysqlMongodb'), icon: <FaDb className="mr-2" /> },
    { name: t('skillsNextjs'), icon: <FaReact className="mr-2" /> },
    { name: t('skillsSassTailwind'), icon: <FaPaintBrush className="mr-2" /> },
    { name: t('skillsReactNative'), icon: <FaReact className="mr-2" /> },
    { name: t('skillsGit'), icon: <FiGitMerge className="mr-2" /> },
  ];
  const skillsBeginner = [
    { name: t('skillsDotNet'), icon: <FaCode className="mr-2" /> },
    { name: t('skillsJava'), icon: <FaCode className="mr-2" /> },
    { name: t('skillsGo'), icon: <FaCode className="mr-2" /> },
    { name: t('skillsDjango'), icon: <FaCode className="mr-2" /> },
    { name: t('skillsAngular'), icon: <FaCode className="mr-2" /> },
    { name: t('skillsVue'), icon: <FaCode className="mr-2" /> },
  ];

  const projectsData = [
    {
      titleKey: 'project1Title',
      descriptionKey: 'project1Description',
      imageUrl: '/gramet.gif',
      projectUrl: 'https://github.com/GramosTV/gramet-client',
      techStack: t.raw('project1TechStack') as string[],
    },
    {
      titleKey: 'project2Title',
      descriptionKey: 'project2Description',
      imageUrl: '/nest.png',
      projectUrl: 'https://github.com/GramosTV/nestjs-automated-jwt-auth',
      techStack: t.raw('project2TechStack') as string[],
    },
    {
      titleKey: 'project3Title',
      descriptionKey: 'project3Description',
      imageUrl: '/security.png',
      projectUrl: 'https://github.com/GramosTV/nestjs-security-scan',
      techStack: t.raw('project3TechStack') as string[],
    },
    {
      titleKey: 'project4Title',
      descriptionKey: 'project4Description',
      imageUrl: '/healthcare-dotnet.png',
      projectUrl: 'https://github.com/GramosTV/zelqora-client',
      techStack: t.raw('project4TechStack') as string[],
    },
    {
      titleKey: 'project5Title',
      descriptionKey: 'project5Description',
      imageUrl: '/medivuno.png',
      projectUrl: 'https://github.com/GramosTV/medivuno-client',
      techStack: t.raw('project5TechStack') as string[],
    },
    {
      titleKey: 'project6Title',
      descriptionKey: 'project6Description',
      imageUrl: '/payflow.png', // Ensure this image exists in the public folder
      projectUrl: 'https://github.com/GramosTV/payflow-client', // Replace with actual URL if different
      techStack: t.raw('project6TechStack') as string[],
    },
    {
      titleKey: 'project7Title',
      descriptionKey: 'project7Description',
      imageUrl: '/headhunter.png', // Placeholder image, user to replace
      projectUrl: 'https://github.com/MikiGram/headhunter-frontend', // Assuming a GitHub link, replace if different
      techStack: t.raw('project7TechStack') as string[],
    },
  ];

  const testimonialsData = [
    {
      quoteKey: 'testimonial1Quote',
      nameKey: 'testimonial1Name',
      roleKey: 'testimonial1Role',
    },
    {
      quoteKey: 'testimonial2Quote',
      nameKey: 'testimonial2Name',
      roleKey: 'testimonial2Role',
    },
    {
      quoteKey: 'testimonial3Quote',
      nameKey: 'testimonial3Name',
      roleKey: 'testimonial3Role',
    },
    {
      quoteKey: 'testimonial4Quote',
      nameKey: 'testimonial4Name',
      roleKey: 'testimonial4Role',
    },
    {
      quoteKey: 'testimonial5Quote',
      nameKey: 'testimonial5Name',
      roleKey: 'testimonial5Role',
    },
    {
      quoteKey: 'testimonial6Quote',
      nameKey: 'testimonial6Name',
      roleKey: 'testimonial6Role',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-0">
      {/* Hero Section */}
      <motion.div
        className="text-center py-24 md:py-32 bg-gradient-to-br from-sky-600 via-indigo-600 to-purple-700 text-white w-full min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Background Image Overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 z-0 opacity-15"
          style={{
            backgroundImage: 'url("/Panorama.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            // mixBlendMode: 'overlay',
          }}
        ></div>

        {/* Subtle moving shapes for depth */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full filter blur-xl animate-pulse-slow"
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-sky-400/10 rounded-full filter blur-xl animate-pulse-slower"
          animate={{ x: [15, -15, 15], y: [5, -5, 5] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'mirror' }}
        />

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight relative z-10 px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {t('heroName')}
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-sky-200 mb-8 sm:mb-10 max-w-2xl mx-auto relative z-10 px-4 sm:px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          {t('heroSubtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 120 }}
          className="relative z-10"
        >
          <Link
            href="#contact"
            className="bg-white text-indigo-600 font-semibold py-3 sm:py-3.5 px-6 sm:px-8 md:px-10 rounded-lg shadow-xl hover:bg-slate-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out flex items-center group text-base sm:text-lg"
          >
            {t('heroCta')}{' '}
            <FiArrowRight className="ml-1.5 sm:ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </motion.div>
      </motion.div>
      <Section id="about" titleKey="aboutTitle" className="bg-slate-50/50">
        <motion.div
          className="text-base sm:text-lg text-center max-w-4xl mx-auto leading-relaxed text-slate-700 grid gap-6 sm:gap-8 px-2 sm:px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p variants={itemVariants} className="text-lg sm:text-xl">
            {t('aboutParagraph1')}
          </motion.p>
          <motion.p variants={itemVariants}>{t('aboutParagraph2')}</motion.p>
          <motion.p variants={itemVariants}>{t('aboutParagraph3')}</motion.p>
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" titleKey="projectsTitle">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.titleKey}
              titleKey={project.titleKey}
              descriptionKey={project.descriptionKey}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              techStack={project.techStack} // Pass techStack directly
              index={index}
            />
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="https://github.com/gramostv?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg font-medium text-sky-600 hover:text-sky-700 group"
          >
            {t('projectsMoreGithub')} <FiArrowRight className="ml-2 group-hover:scale-110 transition-transform" />
          </Link>
        </motion.div>
      </Section>
      {/* 
      <Section id="experience" titleKey="experienceTitle" className="bg-slate-50/50">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Card
            icon={<FiLayers size={28} className="text-indigo-500" />}
            titleKey="experienceLeadArchitectTitle"
            subtitleKey="experienceLeadArchitectSubtitle"
            dateKey="experienceLeadArchitectDate"
            descriptionKey="experienceLeadArchitectDescription"
          />
          <Card
            icon={<FiAward size={28} className="text-amber-500" />}
            titleKey="experienceSeniorFullStackTitle"
            subtitleKey="experienceSeniorFullStackSubtitle"
            dateKey="experienceSeniorFullStackDate"
            descriptionKey="experienceSeniorFullStackDescription"
          />
          <Card
            icon={<FaUserFriends size={28} className="text-emerald-500" />}
            titleKey="experienceLogisticsTitle"
            subtitleKey="experienceLogisticsSubtitle"
            dateKey="experienceLogisticsDate"
            descriptionKey="experienceLogisticsDescription"
          />
        </motion.div>
      </Section> */}
      <Section id="education" titleKey="educationTitle">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Card
            icon={<FaGraduationCap size={28} className="text-sky-500" />}
            titleKey="educationNhlTitle"
            subtitleKey="educationNhlSubtitle"
            dateKey="educationNhlDate"
            descriptionKey="educationNhlDescription"
          />
          <Card
            icon={<FaGraduationCap size={28} className="text-teal-500" />}
            titleKey="educationMegakTitle"
            dateKey="educationMegakDate"
            descriptionKey="educationMegakDescription"
          />
          <Card
            icon={<FaGraduationCap size={28} className="text-purple-500" />}
            titleKey="educationBorowczykTitle"
            dateKey="educationBorowczykDate"
            descriptionKey="educationBorowczykDescription"
          />
        </motion.div>
      </Section>
      <Section id="skills" titleKey="skillsTitle" className="bg-slate-50/50">
        <div className="mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-slate-700 text-center flex flex-wrap items-center justify-center">
            <FaStarIcon className="mr-2 sm:mr-3 text-amber-400" /> <span>{t('skillsExpertLevel')}</span>
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {skillsAdvanced.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-sky-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-md font-semibold shadow-md hover:bg-sky-500 transition-all duration-200 flex items-center cursor-pointer transform hover:scale-[1.02]"
                custom={index}
                variants={skillTagVariants}
                whileHover="hover"
              >
                {skill.icon}
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="mb-10 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-slate-700 text-center flex flex-wrap items-center justify-center">
            <FaRegStar className="mr-2 sm:mr-3 text-sky-500" /> <span>{t('skillsProficientLevel')}</span>
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {skillsBeginner.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-slate-200 text-slate-800 py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-md font-medium shadow-sm hover:bg-slate-100 transition-all duration-200 flex items-center cursor-pointer transform hover:scale-[1.02]"
                custom={index}
                variants={skillTagVariants}
                whileHover="hover"
              >
                {skill.icon}
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.p
          className="text-center mt-10 text-slate-600 text-lg font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {t('skillsCertifications')}
        </motion.p>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" titleKey="testimonialsTitle">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.nameKey}
              quoteKey={testimonial.quoteKey}
              nameKey={testimonial.nameKey}
              roleKey={testimonial.roleKey}
              index={index}
            />
          ))}
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" titleKey="contactTitle" className="bg-slate-50/50">
        <motion.div
          className="max-w-xl mx-auto bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-lg border border-slate-100"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-center text-slate-600 mb-6 sm:mb-8 md:mb-10 text-lg sm:text-xl leading-relaxed px-1">
            {t('contactIntro')}
          </p>
          <div className="space-y-6">
            {[
              {
                icon: <FaPhone size={24} className="text-sky-600" />,
                text: '+48 530 560 664',
                href: 'tel:+48530560664',
                labelKey: 'contactCallMe',
              },
              {
                icon: <FaEnvelope size={24} className="text-sky-600" />,
                text: 'gramowskimikolaj@gmail.com',
                href: 'mailto:gramowskimikolaj@gmail.com',
                labelKey: 'contactEmailMe',
              },
              {
                icon: <FaGithub size={24} className="text-sky-600" />,
                text: 'github.com/gramostv',
                href: 'https://github.com/gramostv',
                labelKey: 'contactViewGitHub',
              },
              {
                icon: <FaLinkedin size={24} className="text-sky-600" />,
                text: 'linkedin.com/in/mikolaj-gramowski',
                href: 'https://www.linkedin.com/in/mikolaj-gramowski',
                labelKey: 'contactViewLinkedIn',
              },
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center p-3 sm:p-4 bg-slate-50 rounded-lg hover:bg-sky-50 transition-all duration-300 group border border-slate-200 hover:border-sky-300 shadow-md hover:shadow-sky-200/40 transform hover:scale-[1.02]"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 + 0.2, ease: [0.25, 1, 0.5, 1] }}
                whileHover={{ boxShadow: '0 5px 15px rgba(14, 165, 233, 0.15)' }}
              >
                <span className="mr-5 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <div className="flex-grow">
                  <span className="text-slate-800 group-hover:text-sky-700 font-semibold transition-colors text-base sm:text-lg">
                    {t(item.labelKey)}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-500 group-hover:text-sky-600 transition-colors">
                    {item.text}
                  </p>
                </div>
                <FiArrowRight
                  className="ml-auto text-slate-400 group-hover:text-sky-500 transition-all duration-300 group-hover:translate-x-1 opacity-50 group-hover:opacity-100"
                  size={22}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
