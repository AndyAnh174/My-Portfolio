import React from 'react';
import { motion } from 'framer-motion';

function Loading() {
  return (
    <div className="fixed inset-0 bg-[#593E67]/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="w-16 h-16 border-4 border-[#FEA837] border-t-transparent rounded-full"
      />
    </div>
  );
}

export default Loading; 