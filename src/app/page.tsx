'use client';

import Section from '@/app/components/Section';
import Card from '@/app/components/Card';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaPaintBrush,
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

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
    scale: 1.1,
    boxShadow: '0px 0px 8px rgba(0,0,0,0.2)',
    transition: { duration: 0.2 },
  },
};

export default function Home() {
  const skillsAdvanced = [
    { name: 'NestJS', icon: <FaCode className="mr-2" /> },
    { name: 'MySQL & MongoDB', icon: <FaCode className="mr-2" /> },
    { name: 'NextJS', icon: <FaCode className="mr-2" /> },
    { name: 'SASS, Tailwind', icon: <FaPaintBrush className="mr-2" /> },
    { name: 'React Native', icon: <FaCode className="mr-2" /> },
    { name: 'Git', icon: <FaCode className="mr-2" /> },
  ];
  const skillsBeginner = [
    { name: '.NET', icon: <FaCode className="mr-2" /> },
    { name: 'Java', icon: <FaCode className="mr-2" /> },
    { name: 'Go', icon: <FaCode className="mr-2" /> },
    { name: 'Django', icon: <FaCode className="mr-2" /> },
    { name: 'Angular', icon: <FaCode className="mr-2" /> },
    { name: 'Vue', icon: <FaCode className="mr-2" /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-20">
      {' '}
      {/* Added pt-20 for fixed header */}
      <motion.div
        className="text-center py-24 md:py-32 bg-gradient-to-br from-sky-600 via-indigo-600 to-purple-700 text-white w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center" // Adjusted padding and gradient
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          Mikołaj Gramowski
        </motion.h1>
        <motion.p
          className="text-2xl sm:text-3xl text-sky-200 mb-10 max-w-2xl mx-auto" // Softer color for subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          Ambitious Full Stack Developer specializing in modern web & mobile solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 120 }}
        >
          <Link
            href="#contact"
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-slate-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out flex items-center group"
          >
            Get in Touch
            <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
      <Section id="about" title="About Me" className="bg-slate-100">
        <motion.div
          className="text-lg text-center max-w-3xl mx-auto leading-relaxed text-slate-700 grid gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p variants={itemVariants}>
            I am an ambitious and dedicated junior full-stack developer with hands-on experience in building modern web
            and mobile applications. I specialize in TypeScript, React, Next.js, and NestJS. Through freelance work and
            a part-time backend developer role, I have delivered projects focused on clean code, reliable APIs, and
            responsive, user-friendly interfaces.
          </motion.p>
          <motion.p variants={itemVariants}>
            Currently studying Computer Science at NHL Stenden in the Netherlands, I continuously expand my skills and
            eagerly embrace new challenges. Outside of programming, I am passionate about fitness, especially gym
            workouts and swimming. I am looking for a position where I can contribute value to the team, gain
            experience, and grow under the guidance of experienced professionals.
          </motion.p>
        </motion.div>
      </Section>
      <Section id="experience" title="Experience">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Card
            icon={<FaBriefcase size={24} />}
            title="Back-end Developer"
            subtitle="Twirelab (Part-time)"
            date="March 2025 - Present"
            description="Developing APIs and backend logic using NestJS. Collaborating remotely with a small dev team."
          />
          <Card
            icon={<FaBriefcase size={24} />}
            title="Full Stack web & mobile developer"
            subtitle="Freelance"
            date="2021 - Present"
            description="Built full-stack websites and mobile apps for clients. Provided long-term maintenance and technical support."
          />
          <Card
            icon={<FaBriefcase size={24} />}
            title="Delivery Driver"
            subtitle="Domino’s"
            date="November 2024 - May 2025"
            description="Delivered food orders accurately and efficiently under time pressure. Balanced work with academic commitments, showing strong time management."
          />
        </motion.div>
      </Section>
      <Section id="education" title="Education" className="bg-slate-100">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Card
            icon={<FaGraduationCap size={24} />}
            title="Information Technology"
            subtitle="NHL Stenden, Netherlands"
            date="2024 - 2028"
            description="Currently pursuing a Bachelor's degree in Computer Science."
          />
          <Card
            icon={<FaGraduationCap size={24} />}
            title="Yearly Fullstack Bootcamp “MegaK”"
            date="2021 - 2022"
            description="Intensive training in React, MySQL & NestJS."
          />
          <Card
            icon={<FaGraduationCap size={24} />}
            title="Frontend courses by Bartlomiej Borowczyk"
            date="2019 - 2020"
            description="Focused on HTML, CSS, Javascript, React & Node."
          />
        </motion.div>
      </Section>
      <Section id="skills" title="Skillset">
        <div className="mb-12">
          <h3 className="text-3xl font-semibold mb-8 text-slate-700 text-center">Advanced</h3>
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {skillsAdvanced.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-sky-500 text-white py-3 px-5 rounded-lg text-md font-medium shadow-md hover:bg-sky-600 transition-colors duration-300 flex items-center cursor-default"
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
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-slate-700 text-center">Beginner</h3>
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {skillsBeginner.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-slate-200 text-slate-700 py-3 px-5 rounded-lg text-md font-medium shadow-sm hover:bg-slate-300 transition-colors duration-300 flex items-center cursor-default"
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
          className="text-center mt-10 text-slate-600 text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          English C1 (IELTS certified)
        </motion.p>
      </Section>
      <Section id="contact" title="Let's Connect" className="bg-slate-100">
        <motion.div
          className="max-w-lg mx-auto bg-white p-8 md:p-10 rounded-xl shadow-xl border border-slate-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-center text-slate-600 mb-8 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="space-y-6">
            {[
              { icon: <FaPhone size={22} />, text: '+48 530 560 664', href: 'tel:+48530560664', label: 'Call me' },
              {
                icon: <FaEnvelope size={22} />,
                text: 'gramowskimikolaj@gmail.com',
                href: 'mailto:gramowskimikolaj@gmail.com',
                label: 'Email me',
              },
              {
                icon: <FaGithub size={22} />,
                text: 'github.com/gramostv',
                href: 'https://github.com/gramostv',
                label: 'View GitHub',
              },
              {
                icon: <FaLinkedin size={22} />,
                text: 'linkedin.com/in/mikolaj-gramowski',
                href: 'https://www.linkedin.com/in/mikolaj-gramowski',
                label: 'View LinkedIn',
              },
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-sky-100 transition-all duration-300 group border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
                whileHover={{ scale: 1.02, x: 2 }}
              >
                <span className="text-sky-500 mr-4 group-hover:text-sky-600 transition-colors">{item.icon}</span>
                <span className="text-slate-700 group-hover:text-sky-700 font-medium transition-colors">
                  {item.text}
                </span>
                <FiArrowRight
                  className="ml-auto text-slate-400 group-hover:text-sky-500 transition-all duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100"
                  size={20}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
