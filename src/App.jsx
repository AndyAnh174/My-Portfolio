import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Breadcrumbs from './components/Breadcrumbs';
import ShareButtons from './components/ShareButtons';

// Lazy load các components
const Home = React.lazy(() => import('./pages/Home'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Achievements = React.lazy(() => import('./pages/Achievements'));
const LinuxTutorials = React.lazy(() => import('./pages/LinuxTutorials'));
const TechStack = React.lazy(() => import('./pages/TechStack'));
const CV = React.lazy(() => import('./components/CV'));
const GamePage = React.lazy(() => import('./pages/GamePage'));
const SecretPage = React.lazy(() => import('./pages/SecretPage'));
const ProjectLinux = React.lazy(() => import('./pages/ProjectLinux'));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Breadcrumbs />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GamePage />} />
            <Route path="/secret" element={<SecretPage />} />
            <Route path="/project-linux" element={<ProjectLinux />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/linux-tutorials" element={<LinuxTutorials />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </Suspense>
        <ShareButtons 
          title="Andy Anh's Portfolio" 
          url={window.location.href} 
        />
      </div>
    </Router>
  );
}

export default App;
