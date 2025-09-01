import React, { useEffect, useRef, useState } from "react";

type cardProyectoProps = {
  imagenes: string[];
  descripcion: string;
  herramientas: string[];
};

// Componente para la visualización de imágenes en pantalla completa

function Lightbox({
  images,
  initialIndex = 0,
  onClose,
}: {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState<number>(initialIndex);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const pointerStartX = useRef<number | null>(null);

  useEffect(() => {
    // control del teclado cuando el componente está activo
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose(); //se cierra con cualquier tecla
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1)); //cambian los index con las flechas
      if (e.key === "ArrowRight") setIndex((i) => Math.min(images.length - 1, i + 1));
    };
    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden"; // bloquear scroll de fondo
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [images.length, onClose]);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(images.length - 1, i + 1));

  const onOverlayClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // cerrar sólo si haces click en el overlay (no sobre la imagen)
    if (e.target === overlayRef.current) onClose();
  };

  const onPointerDown: React.PointerEventHandler = (e) => {
    pointerStartX.current = e.clientX;
  };
  const onPointerUp: React.PointerEventHandler = (e) => {
    if (pointerStartX.current == null) return;
    const dx = e.clientX - pointerStartX.current;
    pointerStartX.current = null;
    const threshold = 40; // px mínimos para considerar swipe
    if (dx > threshold) goPrev();
    else if (dx < -threshold) goNext();
  };

  return (
    <div
      ref={overlayRef}
      className="lightbox-overlay"
      onClick={onOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Vista ampliada de imagen"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <div className="lightbox-content" aria-live="polite">
        <button
          className="lightbox-close"
          aria-label="Cerrar"
          onClick={onClose}
          type="button"
        >
          ✕
        </button>

        <div className="lightbox-main">
          <button
            className="lightbox-nav left"
            onClick={goPrev}
            aria-label="Imagen anterior"
            disabled={index === 0}
            type="button"
          >
            ‹
          </button>

          <img
            src={images[index]}
            className="lightbox-img"
            alt={`Imagen ampliada ${index + 1} de ${images.length}`}
            draggable={false}
          />

          <button
            className="lightbox-nav right"
            onClick={goNext}
            aria-label="Siguiente imagen"
            disabled={index === images.length - 1}
            type="button"
          >
            ›
          </button>
        </div>

        <div className="lightbox-footer">
          <div className="lightbox-counter">
            {index + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}

//Componente de card para la visualización de los proyectos => llama al lightbox al hacer click

function CardProyecto({
  imagenes,
  descripcion,
  herramientas,
}: cardProyectoProps) {
  const idUnico = `carousel-${Math.random().toString(36).substr(2, 9)}`;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <>
      <div className="card w-100 card-proyecto-fixed">
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
                {/* Mantengo clases y tamaños del card intactos; añado click/keyboard */}
                <img
                  src={imagen}
                  className="d-block w-100"
                  alt={`Captura del proyecto -${index}`}
                  onClick={() => openLightbox(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") openLightbox(index);
                  }}
                  tabIndex={0}
                  role="button"
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
        <div className="card-body" style={{marginTop: "20px"}}>
          <p className="card-text" style={{fontWeight: "500", fontSize: "0.925rem", marginBottom: "30px"}}>
            {descripcion}
          </p>
          <p className="breadcrumb mb-0" style={{color:"#6c757d", fontSize:"0.750rem"}}>
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

      {lightboxOpen && (
        <Lightbox images={imagenes} initialIndex={lightboxIndex} onClose={closeLightbox} />
      )}
    </>
  );
}

export default CardProyecto;

