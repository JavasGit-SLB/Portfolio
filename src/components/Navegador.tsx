function Navegador() {
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg"
      role="navigation"
      aria-label="Menú principal"
    >
      <div className="container px-3 px-sm-2  bg-dark.bg-gradient">
        <a className="navbar-brand" href="#sobremi">
          <img
            src="/img/Logo.png"
            alt="Logo que dice SergioLB"
            className="d-inline-block align-text-top me-2 responsive-logo"
          />
        </a>

        {/* Toggle button */}
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-lg-5">
            <li className="nav-item ">
              <div className="hover-underline"><a className="nav-link text-white" href="#sobremi">
                Sobre mí
              </a></div>
              
            </li>
            <li className="nav-item">
              <div className="hover-underline"><a className="nav-link text-white" href="#habilidades">
                Habilidades
              </a></div>
              
            </li>
            <li className="nav-item">
              <div className="hover-underline"><a className="nav-link text-white" href="#proyectos">
                Proyectos
              </a></div>
              
            </li>
            <li className="nav-item">
              <div className="hover-underline"><a className="nav-link text-white" href="#contactame">
                Contáctame
              </a></div>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navegador;
