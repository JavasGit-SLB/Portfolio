type textobarraProps = {
  valor: number;
  textoTitulo: string;
  textoHerramientas: string;
};

function BarraHabilidad({
  valor,
  textoTitulo,
  textoHerramientas,
}: textobarraProps) {
  const valorString: string = valor.toString();

  return (
    <div className="container">
      <div className="row custom-flex-stack">
        <div
          className="col-md-7 d-flex  justify-content-lg-start"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minWidth: 0,
          }}
        >
          <span
            className="titulo-texto"
            style={{
              color: "white",
              paddingRight: "20px",
              fontFamily: "Space Grotesk",
              fontSize: "clamp(14px, 2.5vw, 28px)",
            }}
          >
            {textoTitulo}
          </span>{" "}
          <pre
            className="herramientas-texto"
            style={{
              position: "relative",
              top: "3px",
              fontFamily: "raleway",
              fontWeight: "600",
              fontSize: "clamp(15px, 2.2vw, 24px)",
            }}
          >
            {textoHerramientas}
          </pre>
        </div>

        {/* Barra de progreso */}
        <div className="col-md-5 d-flex justify-content-center justify-content-lg-start align-items-center ">
          <div
            className="progress w-100"
            role="progressbar"
            aria-label={`Progreso en ${textoTitulo}`}
            aria-valuenow={valor}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{
              height: "clamp(12px, 2vw, 20px)",
              backgroundColor: "grey",
            }}
          >
            <div
              className="progress-bar"
              style={{ width: `${valorString}%`, backgroundColor: "#F7A009" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarraHabilidad;
