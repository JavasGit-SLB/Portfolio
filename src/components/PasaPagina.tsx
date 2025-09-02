import { motion } from "framer-motion";


type PasaPaginaProps = {
  backgroundColor: string;
  colorArrow: string;
};

function PasaPagina({ backgroundColor, colorArrow }: PasaPaginaProps) {
  
 
  return (
    <div
      className="container-fluid d-flex  justify-content-center align-items-center w-100 py-5"
      style={{ background:backgroundColor}}
    >
      <div className="d-flex flex-column justify-content-center align-items-center" >
        <motion.div
          animate={{ scale: [1.5, 1.8, 1.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0,
          }}
          style={{ transformOrigin: "center", transform: "scale(1.5, 0.8)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={colorArrow}
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ scale: [2, 2.3, 2] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.3,
          }}
          style={{ transformOrigin: "center", transform: "scale(2, 1.2)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={colorArrow}
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ scale: [2.5, 2.8, 2.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.6,
          }}
          style={{ transformOrigin: "center", transform: "scale(2.5, 1.6)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={colorArrow}
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export default PasaPagina;
