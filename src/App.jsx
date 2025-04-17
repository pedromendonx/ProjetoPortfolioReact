import { useState, useEffect } from 'react';
import Menu from '../src/components/portfolio/Menu.jsx';
import Home from '../src/components/portfolio/Home.jsx';
import About from '../src/components/portfolio/About.jsx';
import Projects from '../src/components/portfolio/Projects.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import AboutMe from './components/portfolio/AboutMe.jsx';
import Footer from './components/portfolio/footer.jsx';

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Solução mais agressiva para garantir o scroll
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
    
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.body.classList.add('bg-black');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      document.body.classList.remove('bg-black');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <>
      <ScrollManager />
      
      {location.pathname !== "/AboutMe" && (
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      )}

      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Projects darkMode={darkMode} />
            <Footer />
          </>
        } />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;