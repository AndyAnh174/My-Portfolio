import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-6 py-4 text-white/70"
    >
      <Link to="/" className="hover:text-[#FEA837] transition-colors">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return (
          <span key={name}>
            <span className="mx-2">/</span>
            {isLast ? (
              <span className="text-[#FEA837]">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
            ) : (
              <Link
                to={routeTo}
                className="hover:text-[#FEA837] transition-colors"
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Link>
            )}
          </span>
        );
      })}
    </motion.div>
  );
}

export default Breadcrumbs; 