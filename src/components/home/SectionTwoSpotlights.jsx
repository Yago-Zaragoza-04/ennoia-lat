import React, { useEffect } from "react";
import "./SectionTwoSpotlights.css";

export default function SectionTwoSpotlights() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = Array.from(document.querySelectorAll("#two .spotlight"));
    if (!("IntersectionObserver" in window)) {
      sections.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
          } else {
            e.target.classList.remove("is-visible");
          }
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );

  sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src="/images/pic01.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Qué es Ennoia</h2>
          <p>
            Somos una plataforma de colaboración y laboratorio de futuros que
            conecta ciencia, industria e inversión para acelerar ideas con
            impacto real.
            <br />
            Impulsamos proyectos que cruzan fronteras disciplinarias y
            geográficas, y acompañamos a investigadores, emprendedores y
            organizaciones a transformar conocimiento en soluciones concretas.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src="/images/pic02.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Nuestro propósito</h2>
          <p>
            Acelerar la ciencia con impacto y propósito desde América Latina,
            cruzando puentes entre ideas, industria y territorio. Activando
            ciencia y acelerando futuro.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src="/images/pic03.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Cómo potenciamos tu ciencia</h2>
          <p>
            Ennoia funciona como una red viva: ofrece entrenamientos, mentorías,
            hubs temáticos y alianzas estratégicas. 
            <br />
            Trabajamos con empresas,
            gobiernos y fondos para diseñar hojas de ruta, crear prototipos y
            generar impacto sostenible
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src="/images/pic02.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Acuerdo Comunidad</h2>
          <p>
            Proponemos un modelo de retorno ético y flexible: si los proyectos
            escalan, se activa una contribución solidaria para financiar nuevas
            generaciones. Basado en confianza, comunidad y éxito compartido.
          </p>
        </div>
      </section>
    </section>
  );
}
