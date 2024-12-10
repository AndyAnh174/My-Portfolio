import React from 'react';
import { motion } from 'framer-motion';
import CV_PDF from '../assets/CV_Persent.pdf';

function CV() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#593E67] to-[#84495F] pt-20 pb-10">
      <div className="cv-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-transparent p-8"
        >
          <div className="w-full h-[80vh] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src={CV_PDF}
              title="CV"
              className="w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CV; 