import CardProyecto from "../components/CardProyecto";

function ProyectoModule() {
  const portfolio = ["public/img/portfolio/Mockup_PORFOTLIO.png"];
  const dungeoner = [
    "public/img/dungeoner/mockup01.png",
    "public/img/dungeoner/mockup02.png",
    "public/img/dungeoner/mockup03.png",
    "public/img/dungeoner/mockup04.png",
    "public/img/dungeoner/mockup05.png",
  ];
  const preguntas = [
    "public/img/preguntas/MOCKUP_Quest.png",
    "public/img/preguntas/MOCKUP_Quest-1.png",
    "public/img/preguntas/MOCKUP_Quest-2.png",
    "public/img/preguntas/MOCKUP_Quest-3.png",
    "public/img/preguntas/MOCKUP_Quest-4.png",
    "public/img/preguntas/MOCKUP_Quest-5.png",
    "public/img/preguntas/MOCKUP_Quest-6.png",
    "public/img/preguntas/MOCKUP_Quest-7.png",
    "public/img/preguntas/MOCKUP_Quest-10.png",
    "public/img/preguntas/MOCKUP_Quest-8.png",
    "public/img/preguntas/MOCKUP_Quest-9.png",
    "public/img/preguntas/MOCKUP_Quest-11.png",
  ];
  const torneo = [
    "public/img/torneo/MOCKUP_TORNEO-0.png",
    "public/img/torneo/MOCKUP_TORNEO-1.png",
    "public/img/torneo/MOCKUP_TORNEO-2.png",
    "public/img/torneo/MOCKUP_TORNEO-3.png",
    "public/img/torneo/MOCKUP_TORNEO-4.png",
    "public/img/torneo/MOCKUP_TORNEO-5.png",
    "public/img/torneo/MOCKUP_TORNEO-6.png",

  ];
  const magic = [
    "public/img/magic/MOCKUP_MAGIC-1.png",
    "public/img/magic/MOCKUP_MAGIC-2.png",
    "public/img/magic/MOCKUP_MAGIC-3.png",
    "public/img/magic/MOCKUP_MAGIC-4.png",

  ];

  const herramientasPortfolio = ["React", "TypeScript", "Vite", "Bootstrap 5","Framer Motion","AOS","ESLint"];
  const herramientasDungeonner = ["React Native", "Expo", "JavaScript", "ESLint"];
  const herramientasPreguntas = ["React", "TypeScript", "Vite", "ESLint", "Context React"];
  const herramientasTorneo = ["JavaScript Vanilla", "HTML 5", "CSS3", "Estructura Modular"];
  const herramientasMTGApi = ["React", "TypeScript", "Vite", "Interfaces TypeScript","Gestión de assets"];

  return (
    <section
      aria-label="proyectos personales"
      className="container px-3 px-sm-1"
    >
      <div className="row ">
        <div className="col-12 col-lg-6 pt-5">
          <CardProyecto
            imagenes={portfolio}
            herramientas={herramientasPortfolio}
            descripcion="Este proyecto es un portfolio profesional desarrollado con React y TypeScript, diseñado para mostrar mis experiencias, habilidades y proyectos como desarrollador web. Cuenta con un diseño responsivo, animaciones implementadas con Framer Motion y AOS, y sigue las mejores prácticas de accesibilidad y rendimiento."
                
          />
        </div>
        <div className="col-12 col-lg-6 pt-5">
          <CardProyecto
            imagenes={dungeoner}
            herramientas={herramientasDungeonner}
            descripcion="Este proyecto es una aplicación móvil llamada Dungeonner Counter, diseñada para gestionar y visualizar la información de los personajes en partidas del juego de mesa Dungeonner. La aplicación cuenta con tres pantallas: una de inicio, la selección de personajes y una tercera para llevar el control de la información de cada uno."
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6 pt-5">
          <CardProyecto
            imagenes={preguntas}
            herramientas={herramientasPreguntas}
            descripcion="Este proyecto es una aplicación para realizar exámenes que admite diferentes modalidades (verdadero/falso, opción múltiple, opción única y preguntas de rango). Permite crear, editar y eliminar preguntas, así como llevar un seguimiento del progreso del examen. Toda la información se guarda en el localStorage."
          />
        </div>
        <div className="col-12 col-lg-6 pt-5">
          <CardProyecto
            imagenes={torneo}
            herramientas={herramientasTorneo}
            descripcion="Este proyecto es una aplicación web para la gestión de torneos, pensada para competiciones sencillas en tiendas de juegos de mesa, especialmente de TCG. Su estructura es simple y directa: permite añadir participantes y ofrece dos modos de juego, suizo y eliminación."
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6 pt-5">
          <CardProyecto
            imagenes={magic}
            herramientas={herramientasMTGApi}
            descripcion="La aplicación está orientada a consultar y explorar cartas y sets de Magic: The Gathering de forma visual e intuitiva. Permite a los usuarios buscar, filtrar y visualizar información relevante sobre cartas y colecciones, facilitando la experiencia de los jugadores y coleccionistas."
            
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
        <a href="https://github.com/JavasGit-SLB" target="_blank">
          <button
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
          </button>
        </a>
      </div>
    </section>
  );
}

export default ProyectoModule;
