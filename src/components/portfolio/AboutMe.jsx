import { useNavigate } from 'react-router-dom';
import StarrySky from "./StarrySky";

function AboutMe() {

    const navigate = useNavigate();


    return (
        <main className="bg-dark text-white min-vh-100 py-5">
            <div>
                <StarrySky numStars={100} />
            </div>

            <div className="container mt-4 position-relative" style={{ zIndex: 2 }}>
                <h1 className="mb-4 text-center">Conheça mais sobre mim</h1>

                <p className="lead">
                    Meu nome é Pedro Henrique, sou Técnico em Informática pelo IFRN São Gonçalo do Amarante e tenho paixão por transformar ideias em soluções digitais atraentes e funcionais.
                </p>

                <h3 className="mt-5">Principais Competências</h3>
                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item bg-dark text-white">
                        <strong>Linguagens & Frameworks:</strong> Java, JavaScript, HTML, CSS, ReactJS e Bootstrap
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <strong>Conceitos & Práticas:</strong> Orientação a objetos, design responsivo e usabilidade centrada no usuário
                    </li>
                </ul>

                <h3 className="mt-5">Minhas Experiências</h3>
                <ul className="list-unstyled">
                    <li className="mb-4">
                        <h4 className="text-primary">Site de Receitas</h4>
                        <p>
                            Criado para um projeto acadêmico, com layout responsivo, oferecendo navegação ágil e intuitiva.
                        </p>
                    </li>
                    <li className="mb-4">
                        <h4 className="text-success">Plataforma de ONG Ambiental</h4>
                        <p>
                            Desenvolvi o website de uma organização sem fins lucrativos dedicada à preservação do meio ambiente, com seções de projetos, página de email para possíveis apoiadores e integração com redes sociais para engajamento da comunidade.
                        </p>
                    </li>
                    <li className="mb-4">
                        <h4 className="text-warning">Portfólio Pessoal</h4>
                        <p>
                            Esta vitrine online — construída do zero — apresenta meus projetos, habilidades e trajetória, focando em performance, conteúdo dinâmico e experiência de usuário agradável.
                        </p>
                    </li>
                </ul>

                <p className="mt-5">Sou um desenvolvedor front‑end com sólida base em back‑end, sempre focado em criar experiências web eficientes e envolventes. Minhas principais competências incluem:</p>

                <ul className="list-group list-group-flush mb-5">
                    <li className="list-group-item bg-dark text-white">
                        <h5 className="mb-1 text-info">Arquitetura & Banco de Dados</h5>
                        <p className="mb-0">Domínio de orientação a objetos e modelagem de dados com MySQL, garantindo estruturas escaláveis e manuteníveis.</p>
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <h5 className="mb-1 text-info">Front‑end Moderno</h5>
                        <p className="mb-0">Proficiência em JavaScript (ES6+), HTML5, CSS3, ReactJS e Bootstrap para construir interfaces responsivas, performáticas e acessíveis.</p>
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <h5 className="mb-1 text-info">Fluxo de Trabalho Colaborativo</h5>
                        <p className="mb-0">Experiência com Git e GitHub: versionamento estruturado, revisões de código e integração contínua para manter projetos organizados e exportáveis.</p>
                    </li>
                </ul>

                <p className="fs-5">Busco conectar tecnologia e usabilidade, traduzindo requisitos em soluções claras, intuitivas e de fácil manutenção.</p>
            </div>

            <button onClick={() => navigate(-1)} className="btn btn-secondary d-grid gap-2 col-md-4 col-6 mx-auto">
                     Voltar para página inicial
                </button>
        </main>
    );
}

export default AboutMe;
