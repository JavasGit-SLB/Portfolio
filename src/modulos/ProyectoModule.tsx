import CardProyecto from "../components/CardProyecto";

function ProyectoModule() {
  const imagenes = [
    "https://placehold.co/550x400",
    "https://placehold.co/550x400",
    "https://placehold.co/550x400",
  ];
  const herramientas = ["React", "HTML", "CSS", "Bootstrap"];

  return (
    <section aria-label="proyectos personales" className="container px-3 px-sm-1">
      <div className="row ">
        <div className="col-12 col-lg-6 pt-5">
          <CardProyecto
            imagenes={imagenes}
            herramientas={herramientas}
            descripcion="Esto es una descripcion breve del proyectito guapo hecho increible"
          />
        </div>
        <div className="col-12 col-lg-6 pt-5">
          <CardProyecto
            imagenes={imagenes}
            herramientas={herramientas}
            descripcion="Esto es una descripcion breve del proyectito guapo hecho increible"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6 pt-5">
          <CardProyecto
            imagenes={imagenes}
            herramientas={herramientas}
            descripcion="Esto es una descripcion breve del proyectito guapo hecho increible"
          />
        </div>
        <div className="col-12 col-lg-6 pt-5">
          <CardProyecto
            imagenes={imagenes}
            herramientas={herramientas}
            descripcion="Esto es una descripcion breve del proyectito guapo hecho increible"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="py-5"
      >
        <a href="https://github.com/JavasGit-SLB" target="_blank"><button
          type="button"
          className="btn custom-github-button rounded-4"
          style={{ width: "430px", height: "51px" }}
          aria-label="Accede a mi perfil completo de GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
          <span
            style={{ position: "relative", top: "2px", paddingLeft: "4px" }}
          >
            Accede a mi Github completo!
          </span>
        </button></a>
      </div>
    </section>
  );
}

export default ProyectoModule;
