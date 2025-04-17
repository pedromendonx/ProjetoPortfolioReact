import "../../assets/style/footer.css";

function Footer() {
    return (
        <footer id="contatos" className="bg-dark text-light py-5 mt-5">
        <div className="container text-center">
          <h5 className="mb-4">Entre em Contato</h5>
          <div className="d-flex justify-content-center gap-4 mb-4">
            <a
              href="https://wa.me/qr/QA44QKEKFI6CB1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success fs-4"
            >
              <i className="bi bi-whatsapp"></i>
            </a>

            <a
              href="pedrosilvad70@gmail.com"
              className="text-danger fs-4"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
      
            <a
              href="https://github.com/pedromendonx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-4"
            >
              <i className="bi bi-github"></i>
            </a>
      
         
            <a
              href="https://www.linkedin.com/in/pedro-mendon%C3%A7a-b4030222a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary fs-4"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <p className="mb-0">© {new Date().getFullYear()} Pedro Henrique. Todos os direitos reservados.</p>
        </div>
      </footer>
      
    );
}

export default Footer;