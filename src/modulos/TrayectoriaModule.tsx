import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ToggleSwitch from "../components/ToggleSwitch";

const experiencia = [
  `Desarrollador Software
NTT DATA Europe & Latam | Marzo 2024 - Junio 2024`,

  `Auxiliar de Servicios en Carrefour S.A.
Grupo Eulen, Carrefour S.A. | Noviembre 2021 - Noviembre 2023
Ilunion Outsourcing, Carrefour S.A. | Agosto 2019 - Noviembre 2021
Ombuds, Carrefour S.A. | Abril 2019 - Agosto 2019`,

  `Gestor Administrativo en I +D +I
US, Facultad de Psicología. | Mayo 2017 - Mayo 2018`,

  `Recepcionista Logístico
Obrador Buenabuelo. | Septiembre 2016 - Marzo 2017`,

  `Administrativo Back Office
Sgel Libros Sevilla. | Febrero 2015 - Junio 2015`,
];

const formacion = [
  `IFCD55- Desarrollo Web Front-End
Core Network (Bootcamp Presencial) | 2025`,

  `Técnico Superior en Desarrollo de Aplicaciones Multiplataforma
Medac (LOE 2000h) | 2022 - 2024
Finalización del curso con Matrícula de Honor. 
*Nominado a mejor expediente de Andalucía en la rama de informáticas y comunicaciones.*`,

  `Técnico Superior en Administración y Finanzas
I.E.S. Pablo Picasso (LOE 2000h) | 2013 - 2015`,
];

const cursos = [
  `JavaScript: De Cero a Experto
Udemy | 2025`,
  `Python desde cero
Udemy | 2025`,
  `Java Intermedio, programación orientada a objetos 
Udemy | 2025`,
`Dominando ChatGPT con la API de OpenAI
Udemy | 2024`,
`Curso de Git
Udemy | 2024`,
`Introducción a Hibernate
Udemy | 2024`,
`Introducción a Spring Framework
Udemy | 2024`,
  `Curso de Canva 2024: desde cero a Experto
Udemy | 2024`,
`The english workshop B1 
Universidad de Sevilla | 2022`,
];

function TrayectoriaModule() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  let lista;
  if (selectedIndex === 0) lista = experiencia;
  else if (selectedIndex === 1) lista = formacion;
  else lista = cursos;

  return (
    <div className="container px-5 px-sm-1" style={{ paddingBottom: "92px" }}>
      <div className="row">
        <div className="col d-none d-md-block"></div>
        <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start">
          <ToggleSwitch
            labels={["Experiencia Laboral", "Datos Académicos", "Cursos"]}
            ariaLabel="Sección de trayectoria profesional, formación académica y cursos"
            onToggle={setSelectedIndex}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col d-none d-md-block"></div>
        <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start">
          <section aria-label="Lista de experiencia laboral, formación académica o cursos">
            <ul style={{ paddingLeft: "1.5rem", listStyleType: "disc" }}>
              <AnimatePresence mode="wait">
                {lista.map((item, idx) => {
                  const [primeraLinea, ...resto] = item.split("\n");
                  return (
                    <motion.li
                      key={`${selectedIndex}-${idx}`}
                      className="responsive-list-item"
                      style={{
                        whiteSpace: "pre-line",
                        padding: "12px 0",
                        fontSize: "clamp(16px, 2.5vw, 22px)",
                        color: "#333",
                        listStylePosition: "outside",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.4,
                        delay: idx * 0.15,
                      }}
                    >
                      <span style={{ fontWeight: "bold", color: "#000" }}>
                        {primeraLinea}
                      </span>
                      <br />
                      <span>{resto.join("\n")}</span>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TrayectoriaModule;
