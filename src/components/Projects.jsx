import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Project 1', description: 'Thêm sau.', link: '#' },
  { title: 'Project 2', description: 'Thêm sau.', link: '#' },
  { title: 'Project 1', description: 'Thêm sau.', link: '#' },
  { title: 'Project 2', description: 'Thêm sau.', link: '#' },
];

function Projects() {
  return (
    <section id="projects" className="py-16 bg-[#FEA837] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#593E67]">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#DE741C] p-6 rounded-lg shadow-md text-left"
            >
              <h3 className="text-2xl font-semibold mb-2 text-[#FEA837]">{project.title}</h3>
              <p className="text-lg mb-4 text-white">{project.description}</p>
              <a
                href={project.link}
                className="text-[#B85B56] font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
