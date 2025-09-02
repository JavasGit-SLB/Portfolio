
import BannerPrePagina from "../components/BannerPrePagina";
import BarraSkill from "../components/BarraSkill";

function HabilidadesModule() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "black",
        width: "100%",
      }}
    >
      <BannerPrePagina
        textoButton="( Habilidades ) =>"
        textoParrafo="{ Desde que empecé en este mundo del
desarrollo no he parado de aprender }"
        textColorButton="white"
        textColorParrafo="white"
        bgColor="black"
        id="habilidades"
      />

      <section aria-label="Conocimientos técnicos">
        <BarraSkill
          textoTitulo="EDITOR DE CÓDIGO"
          habilidades={[
            { herramienta: "|| VScode", valor: 95 },
            { herramienta: "|| Eclipse", valor: 80 },
          ]}
        />
        <BarraSkill
          textoTitulo="CONTROL DE VERSIONES"
          habilidades={[{ herramienta: "|| GIT", valor: 90 }]}
        />
        <BarraSkill
          textoTitulo="LENGUAJES FRONT-END"
          habilidades={[
            { herramienta: "|| TypeScript", valor: 80 },
            { herramienta: "|| HTML5", valor: 100 },
            { herramienta: "|| CSS", valor: 95 },
            { herramienta: "|| Javascript", valor: 95 },
          ]}
        />
        <BarraSkill
          textoTitulo="FRAMEWORKS FRONT"
          habilidades={[
            { herramienta: "|| React", valor: 85 },
            { herramienta: "|| Tailwind CSS", valor: 70 },
            { herramienta: "|| Bootstrap", valor: 80 },
          ]}
        />
        <BarraSkill
          textoTitulo="LENGUAJES BACK-END"
          habilidades={[
            { herramienta: "|| Java", valor: 90 },
            { herramienta: "|| Node.js", valor: 50 },
            { herramienta: "|| Python", valor: 60 },
          ]}
        />
        <BarraSkill
          textoTitulo="FRAMEWORKS BACK"
          habilidades={[
            { herramienta: "|| Express.js", valor: 40 },
            { herramienta: "|| Spring Boot (Learning)", valor: 45 },
          ]}
        />
        <BarraSkill
          textoTitulo="BBDD"
          habilidades={[
            { herramienta: "|| MySQL", valor: 90 },
            { herramienta: "|| Oracle Database", valor: 80 },
            { herramienta: "|| MongoDB (Learning)", valor: 50 },
          ]}
        />
        <BarraSkill
          textoTitulo="INTELIGENCIA ARTIFICIAL"
          habilidades={[
            { herramienta: "|| Prompt Engineering", valor: 95 },
            { herramienta: "|| Automatización", valor: 90 },
            { herramienta: "|| IA productivity", valor: 100 },
          ]}
        />
        <BarraSkill
          textoTitulo="DISEÑO"
          habilidades={[
            { herramienta: "|| Figma", valor: 65 },
            { herramienta: "|| Canva", valor: 95 },
          ]}
        />
        <BarraSkill
          textoTitulo="CMS"
          habilidades={[
            { herramienta: "|| Wordpress", valor: 80 },
            { herramienta: "|| Shopify", valor: 80 },
            { herramienta: "|| Prestashop", valor: 50 },
          ]}
        />
      </section>

      <div className="container px-3 px-sm-1 pt-5 pt-sm-5">
        <img
          src="./img/Lenguajes.png"
          className="img-fluid rounded-5"
          alt="Imagen que muestra unas manos en un teclado y todos los logotipos de las tecnologias que maneja."
        />
      </div>
      <section aria-label="Otras habilidades personales y profesionales">
        <BarraSkill
          textoTitulo="IDIOMAS"
          habilidades={[
            { herramienta: "|| Español", valor: 100 },
            { herramienta: "|| Inglés", valor: 70 },
          ]}
        />
        <BarraSkill
          textoTitulo="SOFT SKILLS"
          habilidades={[
            { herramienta: "|| Aprendizaje rápido", valor: 100 },
            { herramienta: "|| Trabajo en equipo", valor: 100 },
            { herramienta: "|| Comunicación", valor: 100 },
            { herramienta: "|| Autodidacta", valor: 100 },
          ]}
        />
        <BarraSkill
          textoTitulo="CARNET CONDUCIR"
          habilidades={[{ herramienta: "|| Coche B", valor: 100 }]}
        />
        <BarraSkill
          textoTitulo="ADAPTACION"
          habilidades={[
            { herramienta: "|| Teletrabajo", valor: 100 },
            { herramienta: "|| Presencial", valor: 100 },
          ]}
        />
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="py-5"
      >
        <a
          href="https://www.linkedin.com/in/sergiolealbenitez/"
          target="_blank"
        >
          <button
            type="button"
            className="btn custom-linkedin-button rounded-4 "
            style={{ width: "430px", height: "51px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>{" "}
            </svg>{" "}
            <span
              style={{ position: "relative", top: "2px", paddingLeft: "2px" }}
            >
              Accede a mi Linkedin completo!
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default HabilidadesModule;
