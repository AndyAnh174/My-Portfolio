import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import xfceImage from '../assets/DE/Xfce.png';

function LinuxTutorials() {
  const [selectedTutorial, setSelectedTutorial] = useState(null);

  const tutorials = [
    {
      category: "Desktop Environment",
      items: [
        {
          title: "XFCE Customization Guide",
          difficulty: "Beginner",
          duration: "30 mins",
          description: "Learn how to customize XFCE desktop environment...",
          content: `
            <h2>XFCE Desktop Environment Customization</h2>
            
            <p>XFCE is one of the most lightweight and customizable desktop environments for Linux. This guide will help you transform your XFCE desktop into a modern and efficient workspace.</p>

            <h3>1. Installing XFCE</h3>
            <p>First, install XFCE on your Linux distribution:</p>
            <pre><code>sudo apt install xfce4 xfce4-goodies</code></pre>

            <img src="${xfceImage}" alt="XFCE Desktop" class="w-full rounded-lg my-4" />

            <h3>2. Essential Customization Tools</h3>
            <p>Install these tools for better customization:</p>
            <ul>
              <li>Whisker Menu - Modern application menu</li>
              <li>Plank - Sleek dock</li>
              <li>Conky - System monitor</li>
            </ul>

            <h3>3. Theme Installation</h3>
            <p>Popular XFCE themes to try:</p>
            <ul>
              <li>Arc Theme</li>
              <li>Dracula</li>
              <li>Nordic</li>
            </ul>

            <h3>4. Panel Customization</h3>
            <p>Steps to customize your panel:</p>
            <ol>
              <li>Right-click panel → Panel Preferences</li>
              <li>Adjust panel size and position</li>
              <li>Add/remove plugins</li>
              <li>Configure transparency</li>
            </ol>

            <h3>5. Keyboard Shortcuts</h3>
            <p>Essential shortcuts to set up:</p>
            <ul>
              <li>Super + T: Terminal</li>
              <li>Super + E: File Manager</li>
              <li>Super + W: Web Browser</li>
            </ul>

            <h3>6. Advanced Customization</h3>
            <p>For more advanced users:</p>
            <ul>
              <li>Compositor settings for transparency</li>
              <li>Custom GTK themes</li>
              <li>Window manager tweaks</li>
            </ul>
          `
        }
      ]
    },
    {
      category: "Terminal Commands",
      items: [
        {
          title: "Essential Terminal Commands",
          difficulty: "Beginner",
          duration: "45 mins",
          description: "Basic commands every Linux user should know...",
          content: `
            <h2>Essential Linux Terminal Commands</h2>

            <p>The terminal is a powerful tool in Linux. Here are the essential commands you need to know.</p>

            <h3>1. File Navigation</h3>
            <pre><code>
pwd     # Print working directory
ls      # List files and directories
cd      # Change directory
            </code></pre>

            <h3>2. File Operations</h3>
            <pre><code>
cp      # Copy files
mv      # Move/rename files
rm      # Remove files
mkdir   # Create directory
            </code></pre>

            <h3>3. System Information</h3>
            <pre><code>
top     # Process viewer
df      # Disk space usage
free    # Memory usage
uname   # System information
            </code></pre>

            <h3>4. File Permissions</h3>
            <p>Understanding chmod:</p>
            <pre><code>
chmod 755 file    # rwxr-xr-x
chmod 644 file    # rw-r--r--
            </code></pre>

            <h3>5. Package Management</h3>
            <p>Using apt (Debian/Ubuntu):</p>
            <pre><code>
sudo apt update
sudo apt upgrade
sudo apt install package-name
            </code></pre>

            <h3>6. Process Management</h3>
            <pre><code>
ps      # Process status
kill    # Kill process
htop    # Interactive process viewer
            </code></pre>
          `
        }
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
          Linux Tutorials
        </motion.h1>

        {tutorials.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-[#FEA837] mb-6">{category.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((tutorial, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{tutorial.title}</h3>
                  <div className="flex gap-4 mb-4">
                    <span className="text-sm text-[#FEA837]">{tutorial.difficulty}</span>
                    <span className="text-sm text-gray-400">{tutorial.duration}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{tutorial.description}</p>
                  <button 
                    onClick={() => setSelectedTutorial(tutorial)}
                    className="px-4 py-2 bg-[#FEA837] text-white rounded-full hover:bg-[#DE741C] transition-colors"
                  >
                    Read Tutorial
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Tutorial Modal */}
        <AnimatePresence>
          {selectedTutorial && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedTutorial(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#593E67] rounded-lg p-8 max-w-4xl max-h-[80vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm text-[#FEA837]">{selectedTutorial.difficulty}</span>
                      <span className="text-sm text-gray-400">{selectedTutorial.duration}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">{selectedTutorial.title}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedTutorial(null)}
                    className="text-white hover:text-[#FEA837]"
                  >
                    ✕
                  </button>
                </div>
                <div 
                  className="prose prose-invert max-w-none text-white prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-pre:bg-black/30 prose-pre:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: selectedTutorial.content }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default LinuxTutorials; 