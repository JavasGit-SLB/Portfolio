import BannerPrePagina from "./components/BannerPrePagina";
import Navegador from "./components/Navegador";
import SobremiModule from "./modulos/SobremiModule";
import TrayectoriaModule from "./modulos/TrayectoriaModule";
import HabilidadesModule from "./modulos/HabilidadesModule";
import ProyectoModule from "./modulos/ProyectoModule";
import ContactameModule from "./modulos/ContactameModule";


function App() {
  return (
    <>
      <header>
        <Navegador />
      </header>
      <main>
        <section aria-label="Sección sobre mí Sergio Leal Benitez desarrollador front-end">
          <SobremiModule />
          
        </section>
        <section aria-label="Sección de trayectoria profesional y formación académica" >
          <BannerPrePagina
            textoButton="( Trayectoria )  =>"
            textoParrafo="{ Mi objetivo es crecer en el ámbito 
        del desarrollo de software y websites }"
            textColorButton="black"
            textColorParrafo="black"
            bgColor="white"
            id="trayectoria"
          />
          <TrayectoriaModule />
          
        </section>
        <section>
          <HabilidadesModule />
          
        </section>
        <section>
          <BannerPrePagina
            textoButton="( Proyectos )  =>"
            textoParrafo="{ Aplico cada aprendizaje, tecnología
y metodología a mis proyectos }"
            textColorButton="black"
            textColorParrafo="black"
            bgColor="white"
            id="proyectos"
          />
          <ProyectoModule />
          
        </section>
      </main>
      <footer>
        <ContactameModule />
      </footer>
    </>
  );
}

export default App;
