import { useState } from 'react'
import Menu from '../src/components/portfolio/Menu.jsx';
import Home from '../src/components/portfolio/Home.jsx';
import About from '../src/components/portfolio/About.jsx';
import Projects from '../src/components/portfolio/Projects.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'



function App() {

  return (
    <Router>
      <div>
        <Menu />
        <Home />
        <About />
        <Projects/>
      </div>
    </Router>
  )
}

export default App
