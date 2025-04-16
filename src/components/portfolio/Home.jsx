import "../../assets/style/home.css";
import StarrySky from "./StarrySky";

function Home() {

  
  return (
    <main>
      <section id="home" className="row m-0 p-0 container-fluid min-vh-100 position-relative starry-section">

      <StarrySky numStars={100} />

        <div className="col-md-5 d-flex justify-content-center align-items-center flex-column mx-auto py-5 position-relative z-2">
          <h1 className="text-white text-center text-shadow display-4 mb-3 mt-3">
            Olá, meu nome é Pedro Henrique.
          </h1>
          <span className="text-white text-center text-shadow fs-5 pt-3 pb-3">
            Sou um programador fullstack, formado em Técnico em Informática, com conhecimento em React.js, Java, MySQL, Git e GitHub.
          </span>

          
        </div>
      </section>
    </main>
  );
}


export default Home;