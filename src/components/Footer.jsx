import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faArrowUp,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin, 
  faFacebook, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { 
      icon: faGithub, 
      url: "https://github.com/AndyAnh174", 
      label: "GitHub",
      color: "hover:text-[#4ade80]",
      hoverBg: "hover:bg-[#4ade80]/10",
      description: "Check out my code repositories"
    },
    { 
      icon: faLinkedin, 
      url: "https://www.linkedin.com/in/việt-anh-hồ-b61489245/", 
      label: "LinkedIn",
      color: "hover:text-[#3b82f6]",
      hoverBg: "hover:bg-[#3b82f6]/10",
      description: "Connect with me professionally"
    },
    { 
      icon: faFacebook, 
      url: "https://www.facebook.com/andy.anh17405", 
      label: "Facebook",
      color: "hover:text-[#818cf8]",
      hoverBg: "hover:bg-[#818cf8]/10",
      description: "Follow me on Facebook"
    },
    { 
      icon: faTwitter, 
      url: "https://x.com/VietHo41299", 
      label: "Twitter",
      color: "hover:text-[#60a5fa]",
      hoverBg: "hover:bg-[#60a5fa]/10",
      description: "Follow me on Twitter"
    }
  ];

  const quickLinks = [
    { 
      name: "About", 
      href: "#about",
      description: "Learn more about me and my journey",
      icon: faCode
    },
    { 
      name: "Projects", 
      href: "#projects",
      description: "Check out my latest work and projects",
      icon: faCode
    },
    { 
      name: "Contact", 
      href: "#contact",
      description: "Get in touch with me",
      icon: faCode
    },
    { 
      name: "Games", 
      href: "/games",
      description: "Play some fun web games",
      icon: faCode
    }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer className="relative bg-[#0f0f1a] text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4ade80]/10 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative container mx-auto px-6 pt-12 pb-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#4ade80] to-[#3b82f6] blur-lg opacity-50" />
              <h3 className="relative text-2xl font-bold bg-gradient-to-r from-[#4ade80] to-[#3b82f6] bg-clip-text text-transparent">
                AndyAnh
              </h3>
            </motion.div>
            <p className="text-gray-300 leading-relaxed">
              Linux enthusiast and freelance front-end developer, passionate about open-source development and creating beautiful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#4ade80] to-[#3b82f6] bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group"
                >
                  <a 
                    href={link.href}
                    onClick={(e) => link.href.startsWith('#') && handleSmoothScroll(e, link.href)}
                    className="block group"
                  >
                    <div className="flex items-center space-x-2">
                      <FontAwesomeIcon 
                        icon={link.icon} 
                        className="text-gray-400 group-hover:text-[#4ade80] transition-colors"
                      />
                      <span className="text-gray-300 group-hover:text-[#4ade80] transition-colors relative inline-block">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4ade80] to-[#3b82f6] group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mt-1 ml-6">
                      {link.description}
                    </p>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#4ade80] to-[#3b82f6] bg-clip-text text-transparent">
              Contact Info
            </h4>
            <div className="space-y-3">
              <motion.a 
                href="https://maps.google.com/?q=Ho+Chi+Minh+City" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#4ade80] transition-colors cursor-pointer p-2 rounded-lg hover:bg-[#4ade80]/10 group"
                whileHover={{ x: 5 }}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 group-hover:text-[#4ade80] transition-colors" />
                <span>Ho Chi Minh City, Vietnam</span>
              </motion.a>
              <motion.a 
                href="mailto:hovietanh147@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#3b82f6] transition-colors cursor-pointer p-2 rounded-lg hover:bg-[#3b82f6]/10 group"
                whileHover={{ x: 5 }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 group-hover:text-[#3b82f6] transition-colors" />
                <span>hovietanh147@gmail.com</span>
              </motion.a>
              <motion.a 
                href="tel:0949000030"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#818cf8] transition-colors cursor-pointer p-2 rounded-lg hover:bg-[#818cf8]/10 group"
                whileHover={{ x: 5 }}
              >
                <FontAwesomeIcon icon={faPhone} className="text-gray-400 group-hover:text-[#818cf8] transition-colors" />
                <span>0949000030</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 my-8">
          {socialLinks.map((social) => (
            <div key={social.label} className="relative">
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 ${social.color} ${social.hoverBg} p-3 rounded-full transition-all duration-300 relative z-10`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setHoveredLink(social.label)}
                onHoverEnd={() => setHoveredLink(null)}
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} className="text-2xl" />
              </motion.a>
              <AnimatePresence>
                {hoveredLink === social.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-sm whitespace-nowrap"
                  >
                    {social.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gray-300">
                &copy; {currentYear} AndyAnh. All rights reserved.
              </p>
            </motion.div>

            {/* Made with Love */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <span className="text-gray-300">Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <FontAwesomeIcon icon={faHeart} className="text-[#4ade80]" />
              </motion.div>
              <span className="text-gray-300">by AndyAnh</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-[#4ade80] to-[#3b82f6] rounded-full shadow-lg cursor-pointer z-50 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon 
              icon={faArrowUp} 
              className="text-white text-xl group-hover:animate-bounce"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;
