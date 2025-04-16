import { useState } from 'react'
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


function AppContent() {
  const location = useLocation();

  return (
    <>
        {/* Menu só aparece se NÃO estiver em /AboutMe */}
        {location.pathname !== "/AboutMe" && <Menu />}

      {location.pathname === "/" && (
        <>
          <Home />
          <About />
          <Projects />
        </>
      )}

      <Routes>
        <Route path="/AboutMe" element={<><AboutMe /></>} />
      </Routes>
    </>
  );
}


function App() {

  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
