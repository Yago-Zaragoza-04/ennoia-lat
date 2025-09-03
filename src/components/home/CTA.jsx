import React from "react";
import "./CTA.css";

export default function CTA() {
  const goToContact = (tab, e) => {
    if (e) e.preventDefault();
    // Update hash so Contact selecciona la pestaña correcta
    window.location.hash = `contact/${tab}`;
    // Desplazar a la sección de contacto como un item de menú
    const el = document.getElementById("contact");
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section id="cta" className="wrapper style4 community">
      {/* Background video */}
      <video
        className="bg-video"
        src="/videos/ennoia_comunidad_fondo.webm"
  poster="/images/ennoia_lat_fondo.png"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="inner">
        <aside className="intro">
          <p className="lead">
            ¿Tenés una idea? ¿Un fondo? ¿Una agenda de innovación? 
            <br />
            Buscamos científicos, aliados estratégicos, empresas, gobiernos e inversores que
            quieran ser parte de lo que viene.
          </p>
          <h3 className="subtitle">3 caminos para sumarte:</h3>
          <ul className="paths">
            <li>Soy científico/a</li>
            <li>Represento a una organización</li>
            <li>Quiero invertir con impacto</li>
          </ul>
        </aside>

        <div className="content">
          <header className="major">
            <h2>Sé parte de la comunidad</h2>
          </header>
          <p>
            Nos dimos cuenta que la ciencia sola no alcanza, que la industria
            necesita equipos de I+D para mantenerse competitiva y crecer, y que
            las startups están en expansión. Es el momento, tenemos un propósito
            común.
          </p>
          <p>Juntamos nuestras experiencias y creamos un do-tank.</p>
        </div>

        <div className="cta-buttons">
          <ul className="actions">
            <li><a href="#contact/postula" className="button ghost" onClick={(e) => goToContact("postula", e)}>Postulá tu proyecto</a></li>
            <li><a href="#contact/desafio" className="button ghost" onClick={(e) => goToContact("desafio", e)}>Presentá tu desafío</a></li>
            <li><a href="#contact/invierte" className="button ghost" onClick={(e) => goToContact("invierte", e)}>Invertí con impacto</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
