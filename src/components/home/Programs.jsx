import React from "react";
import "./Programs.css";
import { PROGRAMS } from "../../data/programs";

export default function Programs() {
  return (
    <section id="programs" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Programas</h2>
          <p>Iniciativas y servicios que impulsan impacto científico y tecnológico.</p>
        </header>

        <div className="grid">
      {PROGRAMS.map((p) => (
            <article
              key={p.id}
              className="card"
              role="group"
              tabIndex={0}
              aria-label={p.title}
            >
              <div className="media">
        <img src={p.image} alt={p.title} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/images/ennoia_lat_logo.png"; }} />
              </div>
              <h3 className="title">{p.title}</h3>
              {p.credit && <div className="credit">{p.credit}</div>}
              <div className="overlay">
                <p>{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
