import React from 'react';
import { motion } from 'framer-motion';

function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      tools: [
        { name: "React", level: "Advanced", icon: "react-icon.svg" },
        { name: "Next.js", level: "Intermediate", icon: "nextjs-icon.svg" },
        { name: "TailwindCSS", level: "Advanced", icon: "tailwind-icon.svg" }
      ]
    },
    {
      category: "Backend",
      tools: [
        { name: "Node.js", level: "Intermediate", icon: "nodejs-icon.svg" },
        { name: "Python", level: "Intermediate", icon: "python-icon.svg" }
      ]
    },
    {
      category: "Development Tools",
      tools: [
        { name: "Git", level: "Advanced", icon: "git-icon.svg" },
        { name: "VS Code", level: "Advanced", icon: "vscode-icon.svg" },
        { name: "Neovim", level: "Advanced", icon: "neovim-icon.svg"}
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#593E67] to-[#84495F] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Tech Stack
        </motion.h1>

        <div className="space-y-12">
          {technologies.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-bold text-[#FEA837] mb-6">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <div 
                    key={toolIndex}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img src={tool.icon} alt={tool.name} className="w-12 h-12" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                        <span className="text-sm text-[#FEA837]">{tool.level}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: tool.level === "Advanced" ? "80%" : "60%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-[#FEA837] to-[#DE741C] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack; 