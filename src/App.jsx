import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GamePage from './pages/GamePage';
import SecretPage from './pages/SecretPage';
import ProjectLinux from './pages/ProjectLinux';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamePage />} />
          <Route path="/secret" element={<SecretPage />} />
          <Route path="/project-linux" element={<ProjectLinux />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
