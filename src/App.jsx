// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectLinux from './pages/ProjectLinux';
import SecretPage from './pages/SecretPage';

// Placeholder components for other projects
function ProjectFuture() {
  return <div>Project Future Content</div>;
}

function AnythinkYouNoMe() {
  return <div>Anything You Know Me Content</div>;
}

function App() {
/*  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate('/'); // Điều hướng về trang chủ
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); 
  }; */

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Trang chủ */}
        <Route path="/project-linux" element={<ProjectLinux />} />
        <Route path="/project-future" element={<ProjectFuture />} />
        <Route path="/anythink-you-no-me" element={<AnythinkYouNoMe />} />
        <Route path="/secret" element={<SecretPage />} />
      </Routes>
    </Router>
  );
}

export default App;
