type cardProyectoProps = {
  imagenes: string[];
  descripcion: string;
  herramientas: string[];
};

function CardProyecto({
  imagenes,
  descripcion,
  herramientas,
}: cardProyectoProps) {
  const idUnico = `carousel-${Math.random().toString(36).substr(2, 9)}`;

  return (
    
      <div className="card w-100">
        <div id={idUnico} className="carousel slide">
          <div className="carousel-indicators">
            {imagenes.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target={`#${idUnico}`}
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0}
                aria-label={`Imagen ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {imagenes.map((imagen, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={imagen}
                  className="d-block w-100"
                  alt={`Captura del proyecto -${index}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${idUnico}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${idUnico}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <p className="card-text">{descripcion}</p>
          <p className="breadcrumb mb-0">
            {herramientas.map((herramienta, idx) => (
              <span key={idx}>
                {herramienta}
                {idx < herramientas.length - 1 && (
                  <span className="mx-1">/</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    
  );
}

export default CardProyecto;
