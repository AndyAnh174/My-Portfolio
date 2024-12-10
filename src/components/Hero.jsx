import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/avatar.jpg';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({
        x: (clientX - centerX) / centerX,
        y: (clientY - centerY) / centerY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateRotation = (x, y) => {
    return isHovered ? {
      rotateX: y * 20,
      rotateY: -x * 20,
      transformStyle: "preserve-3d",
    } : {};
  };

  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center items-center bg-gradient-to-b from-[#593E67] to-[#84495F] overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
        {[...Array(64)].map((_, i) => (
          <motion.div
            key={i}
            className="border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={calculateRotation(mousePosition.x, mousePosition.y)}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* 3D Layers */}
          <div className="relative">
            {/* Background Layer */}
            <motion.div
              className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl"
              style={{ transform: "translateZ(-50px)" }}
            />

            {/* Content Container */}
            <div className="relative glass-morphism rounded-2xl p-8 md:p-12">
              {/* Profile Image with Glow */}
              <motion.div
                className="relative w-40 h-40 mx-auto mb-8"
                whileHover={{ scale: 1.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FEA837] to-[#DE741C] rounded-full blur-lg opacity-70" />
                <img
                  src={avatar}
                  alt="Profile"
                  className="relative w-full h-full rounded-full object-cover border-4 border-white/30"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FEA837] to-[#DE741C] rounded-full blur animate-pulse opacity-30" />
              </motion.div>

              {/* Text Content */}
              <motion.div
                className="text-center relative"
                style={{ transform: "translateZ(50px)" }}
              >
                <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  AndyAnh (Viet Anh)
                </motion.h1>

                <motion.div
                  className="flex justify-center gap-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {['Linux', 'Frontend', 'Open Source'].map((tag, index) => (
                    <span
                      key={tag}
                      className="px-4 py-1 bg-white/10 rounded-full text-sm font-medium text-white"
                      style={{
                        transform: `translateZ(${(index + 1) * 20}px)`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.p
                  className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Linux enthusiast and freelance front-end developer, focused on crafting
                  user-centered web solutions and driven by a passion for open-source development.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex justify-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a
                    href="#projects"
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    style={{ transform: "translateZ(75px)" }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FEA837] to-[#DE741C] rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-200" />
                    <button className="relative px-8 py-3 bg-[#DE741C] text-white rounded-lg font-medium">
                      View Projects
                    </button>
                  </motion.a>

                  <motion.a
                    href="#contact"
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    style={{ transform: "translateZ(75px)" }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-200" />
                    <button className="relative px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium">
                      Contact Me
                    </button>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-[#FEA837] to-transparent opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-t from-[#DE741C] to-transparent opacity-20 blur-3xl" />
    </section>
  );
}

export default Hero;
