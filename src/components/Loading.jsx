import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0f0f1a]/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden relative mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-[#4ade80] to-[#3b82f6] rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <div className="text-white font-medium">
        Loading... {progress}%
      </div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.1, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-[#4ade80]/20 to-[#3b82f6]/20" />
      </motion.div>
    </div>
  );
}

export default Loading; 