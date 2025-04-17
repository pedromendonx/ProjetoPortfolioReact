
import "../../assets/style/projects.css"
import SiteReceitas from "../../assets/image/Site.jpg"
import OasaSite from "../../assets/image/OasaSite.png"
import Portfolio from "../../assets/image/portfolio.png"



function Projects({ darkMode }) {
  return (
<section id="projetos" className="mt-5">
  <div className="container pb-5 pt-5">
    <h2 className="mb-4">Projetos</h2>

    <div id="carouselPortfolio" className="carousel carousel-dark slide" data-bs-ride="carousel">

      {/* <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselPortfolio" data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
      </div> */}

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            
            {/* Projeto Pessoal */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img src={Portfolio} className="card-img-top" alt="Projeto Pessoal" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">Projeto Pessoal</h5>
                  <p className="card-text text-center">
                    Desenvolvido com React.js e Bootstrap, este portfólio apresenta meus projetos e habilidades, com foco em performance e experiência do usuário.
                  </p>
                  <div className="d-flex justify-content-center">
                    <a href="https://github.com/pedromendonx/ProjetoPortfolioReact"
                      target="_blank" rel="noopener noreferrer"
                      className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}>
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto ONG OASA */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img src={OasaSite} className="card-img-top" alt="Projeto OASA" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">Projeto para ONG OASA</h5>
                  <p className="card-text text-center">
                    Site institucional feito com HTML, CSS, JavaScript, Bootstrap e EmailJS. Inclui seções de projetos, contato e integração com redes sociais.
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="https://github.com/setebos07/oasaSite"
                      target="_blank" rel="noopener noreferrer"
                      className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}>
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://oasa.com.br/" target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto Escolar */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img src={SiteReceitas} className="card-img-top" alt="Projeto Escolar" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">Projeto Escolar</h5>
                  <p className="card-text text-center">
                    Criado com React.js e Tailwind CSS, este site de receitas oferece layout responsivo e navegação intuitiva como parte de um projeto acadêmico.
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="https://github.com/pedromendonx/projeto-de-ensino-2024"
                      target="_blank" rel="noopener noreferrer"
                      className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}>
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://projeto-de-ensino-2024.vercel.app/"
                      target="_blank" rel="noopener noreferrer"
                      className="btn btn-outline-primary">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselPortfolio" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselPortfolio" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  </div>
</section>




  );
}

export default Projects;