import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      title: "Getting Started with Linux Desktop Customization",
      date: "Dec 10, 2023",
      category: "Linux",
      excerpt: "A comprehensive guide to customizing your Linux desktop environment...",
      content: `
        <h2>Getting Started with Linux Desktop Customization</h2>
        
        <p>Linux offers incredible flexibility when it comes to customizing your desktop environment. In this guide, we'll explore various ways to make your Linux desktop truly yours.</p>

        <h3>1. Choosing Your Desktop Environment</h3>
        <p>The first step in customizing your Linux system is choosing the right desktop environment. Popular options include:</p>
        <ul>
          <li>XFCE - Lightweight and highly customizable</li>
          <li>KDE Plasma - Feature-rich with modern looks</li>
          <li>GNOME - Clean and minimalist</li>
        </ul>

        <h3>2. Essential Tools</h3>
        <p>Some must-have tools for customization:</p>
        <ul>
          <li>Lxappearance - GTK theme manager</li>
          <li>Kvantum - Qt theme engine</li>
          <li>Polybar - Custom status bar</li>
        </ul>

        <h3>3. Basic Customization Steps</h3>
        <p>Start with these basic modifications:</p>
        <ul>
          <li>Installing custom themes</li>
          <li>Changing icon packs</li>
          <li>Modifying system fonts</li>
          <li>Setting up custom wallpapers</li>
        </ul>
      `
    },
    {
      title: "Frontend Development Best Practices",
      date: "Dec 8, 2023",
      category: "Frontend",
      excerpt: "Essential tips and tricks for modern frontend development...",
      content: `
        <h2>Frontend Development Best Practices</h2>

        <p>Modern frontend development requires following certain best practices to ensure maintainable and efficient code.</p>

        <h3>1. Code Organization</h3>
        <p>Keep your code organized with:</p>
        <ul>
          <li>Clear folder structure</li>
          <li>Component-based architecture</li>
          <li>Consistent naming conventions</li>
        </ul>

        <h3>2. Performance Optimization</h3>
        <p>Optimize your frontend with:</p>
        <ul>
          <li>Code splitting</li>
          <li>Lazy loading</li>
          <li>Image optimization</li>
        </ul>

        <h3>3. Development Tools</h3>
        <p>Essential tools for modern frontend development:</p>
        <ul>
          <li>Version control (Git)</li>
          <li>Package managers (npm/yarn)</li>
          <li>Build tools (Webpack/Vite)</li>
        </ul>
      `
    },
    {
        title: "Frontend Development Best Practices",
        date: "Dec 8, 2023",
        category: "Frontend",
        excerpt: "Essential tips and tricks for modern frontend development...",
        content: `
          <h2>Frontend Development Best Practices</h2>
  
          <p>Modern frontend development requires following certain best practices to ensure maintainable and efficient code.</p>
  
          <h3>1. Code Organization</h3>
          <p>Keep your code organized with:</p>
          <ul>
            <li>Clear folder structure</li>
            <li>Component-based architecture</li>
            <li>Consistent naming conventions</li>
          </ul>
  
          <h3>2. Performance Optimization</h3>
          <p>Optimize your frontend with:</p>
          <ul>
            <li>Code splitting</li>
            <li>Lazy loading</li>
            <li>Image optimization</li>
          </ul>
  
          <h3>3. Development Tools</h3>
          <p>Essential tools for modern frontend development:</p>
          <ul>
            <li>Version control (Git)</li>
            <li>Package managers (npm/yarn)</li>
            <li>Build tools (Webpack/Vite)</li>
          </ul>
        `
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
          Blog & Articles
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-[#FEA837]">{post.category}</span>
                  <span className="text-sm text-gray-400">• {post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300">{post.excerpt}</p>
                <button 
                  onClick={() => setSelectedPost(post)}
                  className="mt-4 px-4 py-2 bg-[#FEA837] text-white rounded-full hover:bg-[#DE741C] transition-colors"
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blog Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#593E67] rounded-lg p-8 max-w-3xl max-h-[80vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-sm text-[#FEA837] mb-2">{selectedPost.category}</span>
                    <h2 className="text-2xl font-bold text-white">{selectedPost.title}</h2>
                    <span className="text-sm text-gray-400">{selectedPost.date}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="text-white hover:text-[#FEA837]"
                  >
                    ✕
                  </button>
                </div>
                <div 
                  className="prose prose-invert max-w-none text-white prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Blog; 