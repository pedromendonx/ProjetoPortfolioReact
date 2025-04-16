import Me from "../../assets/image/Me.jpg";
import "../../assets/style/about.css";

import React from 'react';



function About(params) {


const handleButtonClick = () => {
  window.location.href = '/AboutMe'; 
};

  return (
    <section className="mt-5" id="about">
      <div className="container">
        <div className="row w-100">
          <div className="col-md-12">
            <h2 className="pt-3 mb-4"> Sobre mim </h2>

            <p className="mb-4 mr-2 blockquote">
              Meu nome é Pedro Henrique, sou Técnico em Informática pelo IFRN São Gonçalo do Amarante e tenho paixão por transformar ideias em soluções digitais atraentes e funcionais. Minha missão é evoluir continuamente, entregando interfaces intuitivas, código eficiente e experiências digitais que facilitem a vida das pessoas, sempre com foco em qualidade, inovação e impacto positivo.

            </p>

          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <img src={Me} className="rounded mb-2 img-fluid shadow" alt="..." />
          </div>
          <div className="col-md-8">
            <h3> Full Stack </h3>
            <p> Sou um desenvolvedor front‑end com sólida base em back‑end, sempre focado em criar experiências web eficientes e envolventes. Busco conectar tecnologia e usabilidade, traduzindo requisitos em soluções claras, intuitivas e de fácil manutenção.
            </p>

            <div class="d-grid gap-2 col-12">
              <button onClick={handleButtonClick} class="btn btn-primary mb-4" type="button">Saiba mais</button>
            </div>


            <h4 className="mt-4"> Redes Sociais </h4>


            <ul className="list-group mt-2 mb-2 shadow">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <a target="_blank" className="text" href="https://github.com/pedromendonx"> Github </a>
                <span className="badge text-bg-primary rounded-pill"><a target="_blank" className="text-white fs-4"
                  href="https://github.com/pedromendonx"><i className="bi bi-github"></i></a></span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <a target="_blank" className="text" href="https://www.linkedin.com/in/pedro-mendon%C3%A7a-b4030222a/"> Linkedin </a>
                <span className="badge text-bg-primary rounded-pill"><a target="_blank" className="text-white fs-4"
                  href="https://www.linkedin.com/in/pedro-mendon%C3%A7a-b4030222a/"><i
                    className="bi bi-linkedin"></i></a></span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <a target="_blank" className="text" href="https://www.instagram.com/ph.out/"> Instagram </a>
                <span className="badge text-bg-primary rounded-pill"><a target="_blank" className="text-white fs-4"
                  href="https://www.instagram.com/ph.out/"><i className="bi bi-instagram"></i></a></span>
              </li>

            </ul>


          </div>


        </div>
      </div>
    </section>

  );
}

export default About;