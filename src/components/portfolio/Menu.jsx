import React from 'react';
import { Link } from 'react-scroll';
import '../../assets/style/menu.css';
import '../../assets/style/home.css'

function Menu({ darkMode, setDarkMode }) {

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
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
              <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`}
                style={{ cursor: 'pointer' }}
              >
                Sobre mim
              </Link>
            </li>
            <li className="nav-item px-5">
              <Link 
                to="projetos" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`}
                style={{ cursor: 'pointer' }}
              >
                Projetos
              </Link>
            </li>
            <li className="nav-item px-5">
              <Link 
                to="contatos" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className={`nav-link ${darkMode ? 'text-white' : 'text-dark'}`}
                style={{ cursor: 'pointer' }}
              >
                Contatos
              </Link>
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