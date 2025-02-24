import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaReact, 
  FaNodeJs, 
  FaJs,
  FaPython,
  FaArrowRight,
  FaServer,
  FaLinux,
  FaGit,
  FaHtml5
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiSocketdotio, 
  SiTypescript,
  SiMongodb,
  SiFlask,
  SiVim,
  SiLua,
  SiLatex,
  SiCss3
} from 'react-icons/si';
import { IoLogoFirebase, IoClose } from 'react-icons/io5';
import Merry from '../assets/merry.png';
import self from '../assets/self.jpg';
import DSC from '../assets/DSC.jpg';
import Tet from '../assets/pc.png';
import { useLanguage, translations } from '../context/LanguageContext';
import MergeMail from '../assets/merge-mail.jpg';

function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    { 
        title: "Portfolio Website",
        description: "My personal portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and modern UI/UX practices.",
        image: self,
        github: "https://github.com/AndyAnh174/My-Portfolio",
        live: "https://myportfolio-andyanh.vercel.app/",
        technologies: [
          { name: "React", icon: FaReact, color: "#61DAFB" },
          { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
          { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
          { name: "Firebase", icon: IoLogoFirebase, color: "#FFA500" },
          { name: "Git", icon: FaGit, color: "#F05032" }
        ],
        category: "Frontend"
      },
      {
        title: "HCMUTE-Developer Student Club Website",
        description: "The official website of HCMUTE-DSC Club, built to manage members, share information about club events and activities, and serve as a platform where members can interact and learn from each other. Developed with React and Tailwind CSS featuring a modern interface with seamless user experience.",
        image: DSC,
        github: "https://github.com/AndyAnh174/HCMUTE-DSC",
        live: "https://hcmute-dsc.vercel.app/",
        technologies: [
          { name: "React", icon: FaReact, color: "#61DAFB" },
          { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
          { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
          { name: "Python", icon: FaPython, color: "#3776AB" },
          { name: "Flask", icon: SiFlask, color: "#339933" },
          { name: "NoSql", icon: SiMongodb, color: "#47A248" },
          { name: "Linux", icon: FaLinux, color: "#F05032" },
          { name: "Git", icon: FaGit, color: "#F05032" },
          { name: "Web Services", icon: FaServer, color: "#2496ED" }
        ],
        category: "Fullstack"
      },
      {
        title: "Lunar New Year Celebration App",
        description: "A comprehensive web application for Lunar New Year celebrations featuring Tet greeting cards creation, lucky money drawing, traditional recipes, and an AI chatbot for answering Tet-related questions. Built with modern technologies to create an engaging and interactive experience.",
        image: Tet,
        github: "https://github.com/AndyAnh174/project-tet-fe",
        live: "https://tet-dsc-2025.vercel.app/",
        technologies: [
          { name: "React", icon: FaReact, color: "#61DAFB" },
          { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
          { name: "Python", icon: FaPython, color: "#3776AB" },
          { name: "Flask", icon: SiFlask, color: "#3178C6" },
          { name: "NoSql", icon: SiMongodb, color: "#47A248" },
          { name: "Linux", icon: FaLinux, color: "#F05032" },
          { name: "Git", icon: FaGit, color: "#F05032" },
          { name: "Web Services", icon: FaServer, color: "#2496ED" }
        ],
        category: "Fullstack"
      },
      {
        title: "Merry Christmas",
        description: "A festive celebration project combining Christmas and Lunar New Year traditions, featuring interactive activities, virtual gift exchanges, and cultural fusion elements. Created for HCMUTE-DSC members to celebrate both holidays together in a unique way.",
        image: Merry,
        github: "https://github.com/AndyAnh174/Merry-Christmas",
        live: "https://merry-christmas-snowy.vercel.app/",
        technologies: [
          { name: "React", icon: FaReact, color: "#61DAFB" },
          { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
          { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
          { name: "Git", icon: FaGit, color: "#F05032" }
        ],
        category: "Frontend"
      },
      {
        title: "NeoVim Customer",
        description: "A customer management system for NeoVim, built with React and Tailwind CSS. Features a modern interface with seamless user experience.",
        image: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/wm/2024/09/some-screenshots-of-neovim-with-its-logo-in-the-center.jpg",
        github: "https://github.com/AndyAnh174/NeoVim-Customer",
        live: "https://github.com/AndyAnh174/NeoVim-Customer",
        technologies: [
          { name: "Vim", icon: SiVim, color: "#019833" },
          { name: "Lua", icon: SiLua, color: "#2C2D72" },
        ],
        category: "Backend"
      },
      {
        title: "Dong Thap Martyrs Memorial System",
        description: "A digital memorial system for martyrs with interactive mapping features to locate graves in Dong Thap Province Cemetery. Built with modern technologies to honor and preserve the memory of fallen heroes while helping visitors easily navigate to specific grave locations.",
        image: "https://tuoitudong.vn/wp-content/uploads/2016/10/Ngh%C4%A9a-Trang-Li%E1%BB%87t-S%E1%BB%B9-%C4%90%E1%BB%93ng-Th%C3%A1p-1-1.jpg",
        github: "https://github.com/VNCemetery/cemetry-frontend",
        live: "https://github.com/AndyAnh174/NeoVim-Customer",
        technologies: [
          { name: "React", icon: FaReact, color: "#61DAFB" },
          { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
          { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
          { name: "Git", icon: FaGit, color: "#F05032" }
        ],
        category: "Frontend"
      },
      {
        title: "Merge Mail",
        description: "A tool to merge multiple emails into a single email.",
        image: MergeMail,
        github: "https://github.com/AndyAnh174/Merge-Mail",
        live: "https://github.com/AndyAnh174/Merge-Mail",
        technologies: [
          { name: "Python", icon: FaPython, color: "#3776AB" },
          { name: "TeX", icon: SiLatex, color: "#3178C6" },
          { name: "HTML", icon: FaHtml5, color: "#E34F26" },
          { name: "CSS", icon: SiCss3, color: "#1572B6" },
        ],
        category: "App/Tool"
      }
    ];

    const categories = [
      { id: 'all', label: t.categories.all },
      { id: 'Frontend', label: t.categories.frontend },
      { id: 'Backend', label: t.categories.backend },
      { id: 'Fullstack', label: t.categories.fullstack },
      { id: 'App/Tool', label: t.categories.appTool },
    ];

    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);

    const openModal = (project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
      document.body.style.overflow = 'unset';
    };

    const ProjectModal = ({ project, onClose }) => {
      if (!project) return null;

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full bg-[#1a1a2e] rounded-xl p-6 overflow-y-auto max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <IoClose size={24} />
            </button>

            <div className="relative h-[300px] mb-6 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white">Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10"
                    >
                      <tech.icon style={{ color: tech.color }} />
                      <span className="text-sm text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#4ade80] to-[#3b82f6] hover:opacity-90 transition-opacity"
                >
                  <span>Live Demo</span>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    };

    return (
      <section id="projects" className="relative py-20 bg-[#0f0f1a] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#4ade80]/10 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#818cf8]/10 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              {t.projectsTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4ade80] to-[#3b82f6] mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${filter === category.id 
                    ? 'bg-gradient-to-r from-[#4ade80] to-[#3b82f6] text-white shadow-lg' 
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => openModal(project)}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl bg-white/5 p-4 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#4ade80] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="relative"
                          onMouseEnter={() => setHoveredTech(tech.name)}
                          onMouseLeave={() => setHoveredTech(null)}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                          >
                            <tech.icon 
                              className="text-lg"
                              style={{ color: tech.color }}
                            />
                          </motion.div>
                          <AnimatePresence>
                            {hoveredTech === tech.name && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap"
                              >
                                {tech.name}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#4ade80] transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="text-xl" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-[#4ade80] transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <span>View Project</span>
                        <FaArrowRight 
                          className="text-sm transform group-hover:translate-x-1 transition-transform"
                        />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={closeModal}
            />
          )}
        </AnimatePresence>
      </section>
    );
}

export default Projects;
