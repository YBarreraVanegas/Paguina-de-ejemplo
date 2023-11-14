import ButtonInfo from "./Button+ifo";

const Programas = () => {
  return (
    <>
      <section id="programas">
        <div className="container">
          <h2>Roles que estudio</h2>
          <div className="cards">
            <div className="card">
              <h3>Front end</h3>
              <p>
              El front-end developer o desarrollador front-end se ha convertido en un perfil clave dentro del sector IT. Su principal función es la de traducir el diseño visual de una web a código HTML, CSS y JavaScript. 
              </p>
              <ButtonInfo />
          
            </div>
            <div className="card">
              <h3>Backend</h3>
              <p>
              Los desarrolladores backend son responsables de la creación de servidores, bases de datos y lenguajes de programación que permiten que un sitio web funcione correctamente. 
              </p>
              <ButtonInfo />
            </div>
            <div className="card">
              <h3>FullStack</h3>
              <p>
              Un desarrollador full stack es un especialista en el desarrollo de sitios web que integra el diseño de la experiencia del cliente en una página (front end), así como la programación y mantenimiento de la arquitectura interna del sitio (back end).
              </p>
              <ButtonInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programas;
