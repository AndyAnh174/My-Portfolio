import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Dong Thap Cemetry', description: 'I work as the Front-end leader of this project. This project helps people find the location of the grave.', link: 'https://github.com/VNCemetery' },
  { title: 'Supporting the creation of a National Defense teaching website', description: 'This website is made for teachers and students to download study materials.', link: 'https://github.com/AndyAnh174/gdqp-reactjs' },
  { title: 'Manage student expenses', description: 'This website helps students manage their expenses easily.', link: 'https://github.com/Deadline-Student-Manage/Web' },
  { title: 'FIT kitchen', description: 'This website helps students order food to support the "Spring Volunteer" campaign.', link: 'https://github.com/toantc1024/itute' },
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
