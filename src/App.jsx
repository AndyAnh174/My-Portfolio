import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectLinux from './pages/ProjectLinux';
import SecretPage from './pages/SecretPage';
import Footer from './components/Footer';

function ProjectFuture() {
  return <div>Project Future Content</div>;
}

function AnythinkYouNoMe() {
  return <div>Anything You Know Me Content</div>;
}

function App() {

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
