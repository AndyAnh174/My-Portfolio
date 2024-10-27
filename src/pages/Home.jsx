// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
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
