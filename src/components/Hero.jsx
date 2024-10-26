// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#593E67] to-[#84495F] text-white text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hello, I'm AndyAnh (Việt Anh)
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl mb-6"
      >
       Linux enthusiast and freelance front-end developer, focused on crafting user-centered web solutions and driven by a passion for open-source devloper.
      </motion.p>
      <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-[#DE741C] text-[#593E67] py-2 px-6 rounded-full shadow-lg font-medium hover:bg-[#FEA837] transition"
      >
        View My working
      </motion.a>
    </section>
  );
}

export default Hero;
