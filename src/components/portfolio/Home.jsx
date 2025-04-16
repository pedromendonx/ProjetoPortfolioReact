import "../../assets/style/home.css";
import ReactImg from "../../assets/image/image.png"
import JavaImg from "../../assets/image/java.png"
import MysqlImg from "../../assets/image/mysql.png"
import GitImg from "../../assets/image/repositorio-git.png"
import GithubImg from "../../assets/image/github.png"
import StarrySky from "./StarrySky";

function Home() {


  return (
    <main>
      <section id="home" className="row m-0 p-0 container-fluid min-vh-100 position-relative starry-section">

        <StarrySky numStars={100} />

        <div className="col-md-5 d-flex justify-content-center align-items-center flex-column mx-auto py-5 position-relative z-2 mb-4 pb-4">
          <h1 className="text-white text-center text-shadow display-4 mb-3 mt-3">
            Olá, meu nome é Pedro Henrique.
          </h1>
          <span className="text-white text-center text-shadow fs-5 pt-3 pb-3">
            Sou um programador fullstack, formado em Técnico em Informática, com conhecimento em React.js, Java, MySQL, Git e GitHub.
          </span>

          <div className="icons icons-up row mx-auto mt-4 pt-4">
          <div className="col-md-2 col-12 mx-auto d-flex justify-content-center align-items-center gap-4">  
            <img src={ReactImg} alt="" className="img-fluid justify-content-center img-size" /> 
            <img src={JavaImg} alt="" className="img-fluid justify-content-center img-size"/>
            <img src={MysqlImg} alt="" className="img-fluid justify-content-center img-size"/>
            <img src={GitImg} alt="" className="img-fluid justify-content-center img-size" />
            <img src={GithubImg} alt="" className="img-fluid justify-content-center img-size"/>            
            </div>
        </div>

        </div>

      </section>
    </main>
  );
}


export default Home;