// src/pages/Home.jsx
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Kiểm tra xem có state scrollTo không
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Đợi một chút để đảm bảo trang đã load xong
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear state sau khi đã scroll
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}

export default Home;
