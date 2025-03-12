import Me from "../../assets/image/Me.jpg";


function About(params) {
    return (
        <section className="mt-5" id="about">
        <div className="container">
          <div className="row w-100">
            <div className="col-md-12">
              <h2 className="pt-3"> Sobre </h2>
  
              <p className="mb-4 mr-2 blockquote"> Sou Pedro Henrique, Técnico em Informática pelo IFRN São Gonçalo do
                Amarante. Tenho experiência no desenvolvimento de sites e aplicações, com conhecimento em Java,
                JavaScript, HTML, CSS, ReactJS, Bootstrap e orientação a objetos. Dentre meus projetos, destaco a criação
                de um site de receitas para um projeto escolar e o desenvolvimento deste portfólio como projeto pessoal.
                Meu objetivo é sempre aprimorar minhas habilidades e criar soluções que sejam eficientes e com boa
                usabilidade, proporcionando experiências dinâmicas e práticas aos usuários.
              </p>
  
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <img src={Me} className="rounded mb-2 img-fluid shadow" alt="..."/>
            </div>
            <div className="col-md-8">
              <h3> Programador front-end e back-end </h3>
              <p> Sou programador front-end com sólidos conhecimentos em back-end. Compreendo a arquitetura de orientação
                a objetos e tenho experiência com bancos de dados, como MySQL. No front-end, sou proficiente em
                JavaScript, HTML, CSS, ReactJS, Bootstrap, e outras tecnologias essenciais para o desenvolvimento web.
                Além disso, sou familiarizado com ferramentas de versionamento, como Git e GitHub, para garantir a
                organização e o controle eficaz dos meus projetos.
              </p>
  
              <h4 className="mt-4"> Redes Socias </h4>
  
           
              <ul className="list-group mt-2 mb-2 shadow">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Github
                  <span className="badge text-bg-primary rounded-pill"><a target="_blank" className="text-white fs-4"
                      href="https://github.com/pedromendonx"><i className="bi bi-github"></i></a></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Linkedin
                  <span className="badge text-bg-primary rounded-pill"><a target="_blank" className="text-white fs-4"
                      href="https://www.linkedin.com/in/pedro-mendon%C3%A7a-b4030222a/"><i
                        className="bi bi-linkedin"></i></a></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Instagram
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