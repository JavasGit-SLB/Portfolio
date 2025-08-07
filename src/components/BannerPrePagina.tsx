import { motion } from "framer-motion";

type props = {
  textoButton: string;
  bgColorButton: string;
  textColorButton: string;
  textoParrafo: string;
  textColorParrafo: string;
  bgColor: string;
  id: string;
};

function BannerPrePagina({
  textoButton,
  textoParrafo,
  bgColorButton,
  textColorButton,
  textColorParrafo,
  bgColor,
  id,
}: props) {
  return (
    <div
      className="container px-5 px-sm-1"
      style={{
        backgroundColor: bgColor,
        paddingTop: "60px",
        marginBottom: "45px",
      }}
      id={id}
    >
      <div className="row ">
         <motion.div
          className="col-12 col-md d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            style={{
              width: "clamp(160px, 22vw, 210px)",
              height: "55px",
              backgroundColor: bgColorButton,
              color: textColorButton,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Space Grotesk",
            }}
            className="rounded-4 fw-semibold"
          >
            <span
              style={{
                fontSize: "clamp(16px, 2.5vw, 23px)",
              }}
            >
              {textoButton}
            </span>
          </h2>
        </motion.div>
        <motion.div
          className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p
            className="text-center text-md-start"
            style={{
              fontSize: "clamp(22px, 3vw, 47px)",
              fontFamily: "Space Grotesk",
              color: textColorParrafo,
              fontWeight: "500",
            }}
          >
            {textoParrafo}
          </p>
        </motion.div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop:"20px"
        }}
      >
        <hr
          style={{ backgroundColor: "white", width: "100%", height: "2px" }}
        />
      </div>
    </div>
  );
}

export default BannerPrePagina;
