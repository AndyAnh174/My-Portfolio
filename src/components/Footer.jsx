import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: faGithub, url: "https://github.com/AndyAnh174", label: "GitHub" },
    { icon: faLinkedin, url: "https://www.linkedin.com/in/việt-anh-hồ-b61489245/", label: "LinkedIn" },
    { icon: faFacebook, url: "#", label: "Facebook" },
    { icon: faTwitter, url: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Games", href: "/games" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#84495F] to-[#593E67] text-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FEA837]/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DE741C]/10 rounded-full filter blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 pt-12 pb-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-[#FEA837] to-[#DE741C] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              AndyAnh
            </motion.h3>
            <p className="text-gray-300">
              Linux enthusiast and freelance front-end developer, passionate about open-source development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-[#FEA837] transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Ho Chi Minh City, Vietnam</p>
              <p>Email: hovietanh147@gmail.com</p>
              <p>Phone: 0949000030</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 my-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#FEA837] transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <FontAwesomeIcon icon={social.icon} className="text-2xl" />
            </motion.a>
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
                <FontAwesomeIcon icon={faHeart} className="text-[#FEA837]" />
              </motion.div>
              <span className="text-gray-300">by AndyAnh</span>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#FEA837] to-[#DE741C] px-4 py-2 rounded-full
                hover:opacity-90 transition-opacity text-sm font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
