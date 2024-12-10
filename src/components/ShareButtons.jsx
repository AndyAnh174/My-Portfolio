import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function ShareButtons({ title, url }) {
  const shareLinks = [
    {
      name: 'Facebook',
      icon: faFacebookF,
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      color: 'bg-[#1877F2] hover:bg-[#0d6efd]'
    },
    {
      name: 'Twitter',
      icon: faTwitter,
      url: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      color: 'bg-[#1DA1F2] hover:bg-[#0c8de4]'
    },
    {
      name: 'LinkedIn',
      icon: faLinkedinIn,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      color: 'bg-[#0A66C2] hover:bg-[#084d93]'
    },
    {
      name: 'Instagram',
      icon: faInstagram,
      url: `https://www.instagram.com/andy.anh174/`, // Thay bằng link Instagram của bạn
      color: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90'
    },
    {
      name: 'Github',
      icon: faGithub,
      url: `https://github.com/andyanh174`, // Thay bằng link Github của bạn
      color: 'bg-[#333] hover:bg-[#24292e]'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 right-8 flex flex-col gap-3 z-[9999]"
    >
      {shareLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className={`${link.color} w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          title={link.name}
        >
          <FontAwesomeIcon icon={link.icon} className="text-white text-lg" />
        </motion.a>
      ))}
    </motion.div>
  );
}

export default ShareButtons; 