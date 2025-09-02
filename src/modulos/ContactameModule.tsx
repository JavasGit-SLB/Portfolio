import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";


function ContactameModule() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "black",
          color: "white",
          paddingTop: "60px",
          paddingBottom: "30px",
          fontFamily: "Space Grotesk",
          position: "relative", // importante para posicion absolute hijos
        }}
        id="contactame"
      >
        <div className="container position-relative">
          <div className="row mb-4 position-relative">
            <div
              className="col-md-6 d-flex flex-column justify-content-center text-md-start text-center mb-4 mb-md-0"
              data-aos="fade-up"
            >
              <div
                className="fw-semibold text-black rounded-4 mb-3 mx-md-0 mx-auto d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#f6a013",
                  width: "clamp(160px, 22vw, 210px)",
                  height: "55px",
                  fontSize: "clamp(18px, 2.2vw, 23px)",
                }}
              >
                Contáctame
              </div>
              <h2
                className="fw-semibold"
                style={{
                  fontSize: "clamp(22px, 3vw, 42px)",
                  lineHeight: "1.3",
                }}
              >
                Si encajo en tu empresa, <br /> ¿Te parece si hablamos?
              </h2>

              <div className="d-flex gap-4 mt-4 justify-content-md-start justify-content-center">
                <a
                  href="https://github.com/JavasGit-SLB"
                  className="text-white fs-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="fs-2 botonRedes"
                    aria-label="icono para acceder al perfil de Github de Sergio Leal"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/sergiolealbenitez/"
                  className="text-white fs-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    className="fs-2 botonRedes"
                    aria-label="icono para acceder al perfil de linkedin de Sergio leal"
                  />
                </a>
                <a
                  href="mailto:sergiolea92@gmail.com?subject=Hola, he visto tu portfolio!&body=Quisiera contactarte"
                  className="text-white fs-4"
                >
                  <FaEnvelope
                    className="fs-2 botonRedes"
                    aria-label="icono para acceder a mandar un mail a Sergio Leal "
                  />
                </a>
              </div>
            </div>

            <div
              className="col-md-6 d-flex justify-content-md-end justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div
                style={{
                  backgroundColor: "#000000ff",
                  color: "#000",
                  padding: "15px 30px",
                  borderRadius: "40px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                className="shadow-sm"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <span>
                  <img
                    src="./img/logo-lenguaje-programacion.png"
                    alt="Logotipo de lenguajes de programación"
                    loading="lazy"
                    decoding="async"
                    style={{
                      height: "clamp(80px, 8vw, 200px)",
                      width: "auto",
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zona inferior gris */}
      <div
        className="text-center py-3"
        style={{
          backgroundColor: "#0f0f0f",
          fontSize: "clamp(8px, 1.5vh, 18px)",
          fontFamily: "Space Grotesk",
          color: "#c4c4c4",
        }}
      >
        © {new Date().getFullYear()} Sergio A. Leal Benítez — Todos los derechos
        reservados.
      </div>
    </>
  );
}

export default ContactameModule;
