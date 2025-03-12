
import "../../assets/style/projects.css"
import SiteReceitas from "../../assets/image/Site.jpg"
import Business from "../../assets/image/business.png"



function Projects (params) {
    return (
        <section id="projetos" className="mt-5 shadow">

        <div className="container pb-5 pt-5">
  
          <h2> Projetos </h2>
  
          <div className="row">
            <div className="col-md-6">
              <h3 className="cv-title mt-4">Minhas Experiências</h3>
  
              <div className='cv-item' data-anime="up">
                <p>Ao longo da minha trajetória, desenvolvi diversos sites, incluindo um de receitas para um projeto
                  escolar. Além disso, criei este portfólio como um projeto pessoal, reunindo minhas principais
                  experiências. Cada projeto reflete meu aprendizado e evolução na área. Busco sempre aprimorar minhas
                  habilidades e explorar novas tecnologias.</p>
                <p><em>Exemplos de Projetos <i className="bi bi-arrow-right-short"></i> </em></p>
              </div>
  
            </div>
            <div className="col-md-6">
              <div className="container d-flex justify-content-end mb-4 mt-4">
                <div id="carouselExampleCaptions" className="carousel slide carousel shadow">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                      aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="card"  style={{ width:'18rem' }}>
                        <img src={SiteReceitas} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Site de Receitas</h5>
                          <p className="card-text">Desenvolvi um site de receitas como parte do meu curso técnico em
                            Informática,
                            combinando design intuitivo e funcionalidades dinâmicas.</p>
                        </div>
                      </div>
                      <div className="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card" style={{ width:'18rem' }}>
                        <img src={Business} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="card" style={{ width:'18rem' }}>
                        <img src={Business} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                      </div>
                    </div>
                  </div>
  
  
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </section>
  


    );
}

export default Projects;