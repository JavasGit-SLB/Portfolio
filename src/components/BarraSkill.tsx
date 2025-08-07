import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type textobarraProps = {
  textoTitulo: string;
  habilidades: {
    herramienta: string;
    valor: number;
  }[];
};

function BarraSkill({ textoTitulo, habilidades }: textobarraProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="container mt-5">
      <p
        className="titulo-texto"
        style={{
          color: "white",
          fontFamily: "Space Grotesk",
          fontSize: "clamp(25px, 3.5vw, 32px)",
        }}
      >
        {textoTitulo}
      </p>

      {habilidades.map((item, index) => (
        <div key={index} className="row custom-flex-stack mb-3">
          {/* Nombre de la herramienta */}
          <div className="col-md-4 d-flex justify-content-lg-start align-items-center">
            <div
              className="d-flex justify-content-between w-100 herramientas-texto"
              style={{
                fontFamily: "raleway",
                fontWeight: "500",
                fontSize: "clamp(17px, 2.8vw, 25px)",
                letterSpacing: "3px",
              }}
            >
              <span>{item.herramienta}</span>
            </div>
          </div>

          {/* Barra animada */}
          <div className="col-md-8 d-flex justify-content-center justify-content-lg-start align-items-center">
            <div
              className="progress w-100"
              role="progressbar"
              aria-label={`Progreso en ${item.herramienta}`}
              aria-valuenow={item.valor}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{
                height: "clamp(10px, 2vw, 15px)",
                backgroundColor: "grey",
                overflow: "hidden",
              }}
            >
              <motion.div
                className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: inView ? `${item.valor}%` : 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.2 }}
                style={{
                  backgroundColor: "#F7A009",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BarraSkill;
