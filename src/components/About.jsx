import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaServer, 
  FaGlobe,
  FaDesktop,
  FaGraduationCap,
  FaBriefcase,
  FaMedal,
  FaTerminal,
  FaReact, 
  FaNodeJs, 
  FaJs,
  FaGit,
  FaDocker,
  FaLinux
} from 'react-icons/fa';
import { SiNeovim } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiMysql, SiTypescript, SiFlask, SiVim, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { MdDesignServices } from 'react-icons/md';
import { useLanguage, translations } from '../context/LanguageContext';

function About() {
  const { language } = useLanguage();
  const t = translations[language];

  const [activeTab, setActiveTab] = useState('skills');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      category: t.frontendDev,
      icon: FaDesktop,
      color: "#4ade80",
      title: t.skillTitles.frontend,
      technologies: [
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: FaReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38B2AC" }
      ]
    },
    {
      category: t.backendDev,
      icon: FaServer,
      color: "#3b82f6",
      title: t.skillTitles.backend,
      technologies: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Flask Python", icon: SiFlask, color: "#000000" },
        { name: "REST APIs", icon: FaGlobe, color: "#3b82f6" },
        { name: "PostgreSQL", icon: DiPostgresql, color: "#336791" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Firebase", icon: IoLogoFirebase, color: "#FFCA28" }
      ]
    },
    {
      category: t.toolsTech,
      icon: FaTerminal,
      color: "#818cf8",
      title: t.skillTitles.tools,
      technologies: [
        { name: "Git", icon: FaGit, color: "#F05032" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "NeoVim", icon: SiNeovim, color: "#57A143" },
        { name: "Web Design", icon: MdDesignServices, color: "#FF7F50" },
        { name: "Linux", icon: FaLinux, color: "#FCC624" },
        { name: "Web Services", icon: FaGlobe, color: "#3b82f6" }
      ]
    }
  ];

  const education = [
    {
      school: t.university,
      degree: t.degree,
      year: "2020 - 2024",
      description: t.eduDescription,
      achievements: t.eduAchievements
    }
  ];

  const experience = [
    {
      role: t.frontendRole,
      company: t.dscClub,
      period: "2022 - Present",
      description: t.dscDescription,
      achievements: t.dscAchievements
    },
    {
      role: t.freelanceRole,
      company: t.selfEmployed,
      period: "2021 - Present",
      description: t.freelanceDescription,
      achievements: t.freelanceAchievements
    }
  ];

  const certifications = [
    {
      name: t.reactCert,
      issuer: "Meta",
      date: "2023",
      link: "#"
    },
    {
      name: t.fullstackCert,
      issuer: "FreeCodeCamp",
      date: "2022",
      link: "#"
    },
    {
      name: t.pythonCert,
      issuer: "HackerRank",
      date: "2022",
      link: "#"
    }
  ];

  const tabs = [
    { id: 'skills', label: t.skills, icon: FaTerminal },
    { id: 'education', label: t.education, icon: FaGraduationCap },
    { id: 'experience', label: t.experience, icon: FaBriefcase },
    { id: 'certifications', label: t.certifications, icon: FaMedal }
  ];

  return (
    <section id="about" className="relative py-20 bg-[#0f0f1a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4ade80]/10 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#818cf8]/10 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#3b82f6] mb-6">
            {t.aboutMe}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#3b82f6] mx-auto rounded-full" />
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            {t.aboutDescription}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeTab === tab.id 
                  ? 'bg-gradient-to-r from-[#4ade80] to-[#3b82f6] text-white shadow-lg' 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="text-lg" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Skills */}
            {activeTab === 'skills' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skillGroup) => (
                  <motion.div
                    key={skillGroup.title}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-3 rounded-full bg-white/5">
                        <skillGroup.icon 
                          className="text-xl"
                          style={{ color: skillGroup.color }}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {skillGroup.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {skillGroup.technologies.map((tech) => (
                        <motion.div
                          key={tech.name}
                          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5 transition-colors group"
                          whileHover={{ x: 5 }}
                        >
                          <tech.icon 
                            className="text-xl"
                            style={{ color: tech.color }}
                          />
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Education */}
            {activeTab === 'education' && (
              <div className="space-y-8">
                {education.map((edu) => (
                  <motion.div
                    key={edu.school}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {edu.school}
                        </h3>
                        <p className="text-[#4ade80] font-medium">
                          {edu.degree}
                        </p>
                        <p className="text-blue-400 font-medium mt-1">
                          {t.gpa}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      {edu.description}
                    </p>
                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {edu.achievements.map((achievement, index) => (
                          <li key={index} className="hover:text-[#4ade80] transition-colors">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Experience */}
            {activeTab === 'experience' && (
              <div className="space-y-8">
                {experience.map((exp) => (
                  <motion.div
                    key={exp.role}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-[#4ade80] font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center space-x-2 text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Certifications */}
            {activeTab === 'certifications' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert) => (
                  <motion.a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <FaMedal 
                        className="text-2xl text-[#4ade80] group-hover:scale-110 transition-transform"
                      />
                      <span className="text-gray-400 text-sm">
                        {cert.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#4ade80] transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-gray-400">
                      Issued by {cert.issuer}
                    </p>
                  </motion.a>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default About;
