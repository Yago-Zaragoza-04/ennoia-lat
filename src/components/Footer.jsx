import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <div className="brand-and-social">
          <div className="brand">
            <img src="/images/ennoia_lat_logo.png" alt="Ennoia Lat" />
          </div>
          <ul className="nav-links">
            <li><a href="#banner">Inicio</a></li>
            <li><a href="#programs">Programas e Hitos</a></li>
            <li><a href="#cta">Comunidad</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/company/ennoia-latam/" target="_blank" rel="noopener noreferrer" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a>
            </li>
            <li>
              <a href="mailto:hola@ennoia.lat" className="icon solid fa-envelope"><span className="label">Email</span></a>
            </li>
          </ul>
        </div>
        <div className="legal">
          <div>© 2025 Ennoia Lat. Todos los derechos reservados</div>
          <div>Desarrollado por <a href="https://yanawebstudio.com" target="_blank" rel="noopener noreferrer">Yana Web Studio</a></div>
        </div>
      </div>
    </footer>
  );
}
