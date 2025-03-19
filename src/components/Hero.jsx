import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/avatar.jpg';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useLanguage, translations } from '../context/LanguageContext';
import { useScrollToSection } from '../hooks/useScrollToSection';

function Hero() {
  let language = 'en';
  let t = translations['en'];

  try {
    const languageContext = useLanguage();
    if (languageContext) {
      language = languageContext.language;
      t = translations[language];
    }
  } catch (error) {
    console.error('Lỗi khi sử dụng language context trong Hero:', error);
  }

  let scrollToSection = (id) => {
    console.warn('ScrollToSection fallback được sử dụng trong Hero');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (window.location.pathname !== '/') {
      window.location.href = '/#' + id;
    }
  };

  try {
    const scrollFn = useScrollToSection();
    if (typeof scrollFn === 'function') {
      scrollToSection = scrollFn;
    }
  } catch (error) {
    console.error('Lỗi khi sử dụng scrollToSection trong Hero:', error);
  }

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/AndyAnh174", color: "hover:text-[#4ade80]" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/việt-anh-hồ-b61489245/", color: "hover:text-[#3b82f6]" },
    { icon: FaFacebook, url: "https://www.facebook.com/andy.anh17405", color: "hover:text-[#818cf8]" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0f0f1a]">
      {/* Blob animation */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-[#4ade80] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-[#818cf8] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 md:w-56 md:h-56 relative">
              <img
                src={avatar}
                alt="Profile"
                className="w-full h-full rounded-full border-4 border-[#4ade80] shadow-lg hover:scale-110 transition-transform duration-300 object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4ade80] to-[#3b82f6] opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#3b82f6]">
              {t.greeting} AndyAnh
            </span>
          </h1>

          <div className="mb-8">
            <TypeAnimation
              sequence={[
                t.roles.linux,
                2000,
                t.roles.devops,
                2000,
                t.roles.frontend,
                2000,
                t.roles.opensource,
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl sm:text-3xl md:text-4xl text-gray-300"
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.description}
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-[#4ade80] to-[#3b82f6] text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.viewProjects}
            </motion.button>
          </div>

          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white text-3xl ${social.color} transition-all duration-300`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-8 h-14 rounded-full border-2 border-gray-400 flex justify-center items-start p-2"
        >
          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-1.5 h-1.5 rounded-full bg-gray-400"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
