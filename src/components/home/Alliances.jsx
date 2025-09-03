import React from "react";
import "./Alliances.css";

export default function Alliances() {
  return (
    <section id="alliances" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Alianzas</h2>
          <p>Formas de colaboración para impulsar la misión de Ennoia.</p>
        </header>
        <ul className="alliances-list">
          <li className="alliance">
            <h3>Institucionales</h3>
            <p>
              Apoyan la misión de Ennoia con respaldo simbólico, redes y recursos no financieros
              (espacios, convocatorias, articulación territorial).
            </p>
            <p className="receive">
              <strong>Reciben:</strong> presencia en eventos, acceso prioritario a resultados y datos, inclusión como partner estratégico en comunicaciones y publicaciones.
            </p>
          </li>
          <li className="alliance">
            <h3>Financiamiento</h3>
            <p>
              Contribuyen con financiamiento directo para programas, becas, prototipos o infraestructura.
            </p>
            <p className="receive">
              <strong>Reciben:</strong> reportes de impacto, visibilidad institucional, participación en roadmap estratégico y derecho a proponer ejes de acción.
            </p>
          </li>
          <li className="alliance">
            <h3>Académicas</h3>
            <p>
              Universidades, centros de investigación o redes científicas que colaboran en formación, scouting y validación de conocimiento.
            </p>
            <p className="receive">
              <strong>Reciben:</strong> acceso a la red de expertos/as, herramientas metodológicas, posibilidad de co-creación de programas y visibilidad internacional.
            </p>
          </li>
          <li className="alliance">
            <h3>Empresariales y Fondos</h3>
            <p>
              Empresas que presentan desafíos concretos y co-financian soluciones con base científica y tecnológica.
            </p>
            <p className="receive">
              <strong>Reciben:</strong> acceso a proyectos disruptivos, scouting de talento, desarrollo de I+D y visibilidad como líder de innovación abierta.
            </p>
          </li>
          <li className="alliance">
            <h3>Medios de comunicación</h3>
            <p>
              Acompañan amplificando historias, resultados e ideas.
            </p>
            <p className="receive">
              <strong>Reciben:</strong> contenidos exclusivos, alianzas editoriales, presencia en campañas y acceso a referentes de la red Ennoia.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
