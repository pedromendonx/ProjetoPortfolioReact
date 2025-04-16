import React, { useState, useEffect } from 'react';
import '../../assets/style/menu.css';
import '../../assets/style/home.css'

function Menu() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if(darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.body.classList.add('bg-black');

      const images = document.getElementsByClassName('img-size');
      Array.from(images).forEach(image => {
        image.style.filter = 'invert(0)';
      });
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      document.body.classList.remove('bg-black');

      const images = document.getElementsByClassName('img-size');
      Array.from(images).forEach(image => {
        image.style.filter = 'invert(1)';
      });
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${darkMode ? 'navbar-dark bg-black' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
    
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <button 
          className="btn btn-link d-lg-none ms-2" 
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Modo claro" : "Modo escuro"}
        >
          <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'} fs-5`}></i>
        </button>


        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item px-5">
              <a className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} href="#about">
                Sobre mim
              </a>
            </li>
            <li className="nav-item px-5">
              <a className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} href="#projetos">
                Projetos
              </a>
            </li>
            <li className="nav-item px-5">
              <a className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`} href="#">
                Contatos
              </a>
            </li>
          </ul>
          

          <button 
            className="btn btn-link d-none d-lg-block" 
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Modo claro" : "Modo escuro"}
          >
            <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'} fs-5`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Menu;