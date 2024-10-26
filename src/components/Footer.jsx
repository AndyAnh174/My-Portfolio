// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#FEA837] text-[#593E67] py-4 text-center">
      <p>&copy; {new Date().getFullYear()} By AndyAnh. Have a GoodDay.</p>
      <div className="mt-2">
        <a
          href="https://github.com/AndyAnh174"
          className="mx-2 hover:underline font-medium hover:text-[#84495F]"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/vi%E1%BB%87t-anh-h%E1%BB%93-b61489245/"
          className="mx-2 hover:underline font-medium hover:text-[#84495F]"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
