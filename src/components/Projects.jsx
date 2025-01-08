import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TetWebsite from '../assets/pc.png';
import ChristmasWebsite from '../assets/merry.png';
const projects = [
  { 
    title: 'Dong Thap Cemetery',
    description: 'I work as the Front-end leader of this project. This project helps people find the location of the grave.',
    link: 'https://github.com/VNCemetery',
    tech: ['React', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
    image: 'https://tuoitudong.vn/wp-content/uploads/2016/10/Ngh%C4%A9a-Trang-Li%E1%BB%87t-S%E1%BB%B9-%C4%90%E1%BB%93ng-Th%C3%A1p-1-1.jpg', 
    cardColor: 'from-[#FEA837] to-[#DE741C]',
    titleColor: 'text-white',
    descColor: 'text-white/90',
    techBadgeColor: 'bg-white/20 text-white'
  },
  { 
    title: 'Analyze High School Scores',
    description: 'This website is used to analyze high school exam scores 2018 and 2019.',
    link: 'https://github.com/Analyze-high-school-scores',
    tech: ['React', 'Flask', 'TailwindCSS'],
    image: 'https://media.vneconomy.vn/w800/images/upload/2023/06/09/khuyen-hoc-soc-trang-7.jpg',
    role: 'Full Stack Developer',
    cardColor: 'from-[#DE741C] to-[#B85B56]',
    titleColor: 'text-white',
    descColor: 'text-white/90',
    techBadgeColor: 'bg-white/20 text-white'
  },
  { 
    title: 'HCMUTE - DSC Club Website',
    description: 'Official website of HCMUTE - DSC Club, featuring news updates, club introduction, events, projects and member profiles.',
    link: 'https://github.com/AndyAnh174/HCMUTE-DSC',
    tech: ['React', 'Flask SwaggerUI', 'NoSQL', 'TailwindCSS'],
    image: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/471555547_625905189961709_1280924454691844356_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEsTtM5AbAtGWIhdL1j72zxnQidnNltTgydCJ2c2W1ODHrtTFzaSMCZsBtraxR9LTdYAdTF8gbacKppsR6ruiMc&_nc_ohc=CICXpMeG2gIQ7kNvgEfXaxP&_nc_oc=AdhaWfY-8nFtNi3sClFLqYYY-yu4RQa3MTNXPv8nIuJYAfnJ68HYClk219frzIWTU1E&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=AVUfKT6mtM6sDoWWnOWIZgX&oh=00_AYBPRPp0C7_jtGQMfsqVXxWumQQMur-StAoIglbw67mKNg&oe=678381D7',
    role: 'Full Stack Developer',
    cardColor: 'from-[#84495F] to-[#593E67]',
    titleColor: 'text-white',
    descColor: 'text-white/90',
    techBadgeColor: 'bg-white/20 text-white'
  },
  { 
    title: 'HCMUTE-DSC Tet Website',
    description: 'A festive website for creating and sharing Lunar New Year wishes, drawing lucky fortunes, and spreading Tet greetings within the HCMUTE community.',
    link: 'https://github.com/AndyAnh174/project-tet-fe',
    tech: ['React', 'TailwindCSS', "Flask", "NoSQL"],
    image: TetWebsite,
    role: 'Full Stack Developer',
    cardColor: 'from-[#593E67] to-[#84495F]',
    titleColor: 'text-white',
    descColor: 'text-white/90',
    techBadgeColor: 'bg-white/20 text-white'
  },
  {
    title: 'HCMUTE-DSC Christmas Website',
    description: 'A Christmas website that allows people to create greeting cards and decorate profile pictures with special Christmas motifs.',
    link: 'https://github.com/AndyAnh174/Merry-Christmas',
    tech: ['React', 'TailwindCSS'],
    image: ChristmasWebsite,
    role: 'Frontend Developer',
    cardColor: 'from-[#593E67] to-[#84495F]',
    titleColor: 'text-white',
    descColor: 'text-white/90',
    techBadgeColor: 'bg-white/20 text-white'
  }
];

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="relative py-20 pt-24 bg-gradient-to-b from-[#FEA837] to-[#DE741C] overflow-hidden shadow-lg border border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#593E67] opacity-10 pattern-grid-lg" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl font-bold text-white mb-6 font-[Poppins] tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/90 font-[Poppins] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of my recent work and contributions to various projects.
          </motion.p>

          {/* Decorative underline */}
          <motion.div
            className="w-24 h-1 bg-white mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              className="relative group cursor-pointer"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedProject(selectedProject === index ? null : index);
                }
              }}
            >
              <motion.div
                className={`relative bg-gradient-to-br ${project.cardColor} rounded-2xl overflow-hidden shadow-2xl border border-white/20`}
                whileHover={{ scale: 1.02, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
              >
                {/* Project Image */}
                <div className="relative h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Role Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 px-3 py-1 ${project.techBadgeColor} rounded-full text-sm font-medium backdrop-blur-sm`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.role}
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className={`text-xl font-[Poppins] font-bold ${project.titleColor} mb-3 tracking-wide`}>
                    {project.title}
                  </h3>
                  <p className={`${project.descColor} font-[Poppins] text-base mb-4 leading-relaxed`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className={`px-3 py-1 ${project.techBadgeColor} rounded-full text-sm font-[Poppins]
                          hover:opacity-80 transition-opacity`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Link */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.link);
                    }}
                    className="group"
                  >
                    <span className={`px-4 py-2 ${project.titleColor} border border-current rounded-lg 
                      font-[Poppins] text-sm inline-block hover:bg-current hover:text-black transition-colors`}>
                      View Project
                    </span>
                  </motion.button>
                </div>

                {/* Expanded Content when Selected */}
                {selectedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-white/10"
                  >
                    <div className="pt-4">
                      <h4 className="text-white font-[Poppins] font-medium text-lg mb-2">Project Details</h4>
                      <ul className="text-white/80 space-y-2 select-text font-[Poppins] text-base">
                        <li>• Role: {project.role}</li>
                        <li>• Technologies: {project.tech.join(', ')}</li>
                        <li>• Repository: <a 
                            href={project.link}
                            onClick={(e) => e.stopPropagation()}
                            className="text-[#FEA837] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
