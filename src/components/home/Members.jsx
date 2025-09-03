import React, { useState } from "react";
import "./Members.css";
import { MEMBERS } from "../../data/members";

function Initials({ name }) {
  const letters = (name || "?")
    .split(" ")
    .filter(Boolean)
    .map((s) => s[0].toUpperCase())
    .slice(0, 2)
    .join("");
  return <span className="initials" aria-hidden>{letters}</span>;
}

export default function Members() {
  const [active, setActive] = useState(null);
  return (
    <section id="members" className="members wrapper style2 special">
      <div className="inner">
        <header className="major">
          <h2>Nuestro Equipo</h2>
          <p>Personas que conectan ciencia, industria e inversión para acelerar impacto real.</p>
        </header>

        <div className="members-grid">
          {MEMBERS.map((m) => {
            const photoSrc = m.photo || "/images/members/placeholder.svg";
            return (
              <article
                key={m.id}
                className="member-card"
                aria-label={`${m.name}, ${m.role || ""}`}
                onMouseEnter={() => setActive(m)}
                onMouseLeave={() => setActive((cur) => (cur?.id === m.id ? null : cur))}
              >
                <div className="avatar">
                  <img src={photoSrc} alt={`Foto de ${m.name}`} onError={(e)=>{ e.currentTarget.src = "/images/members/placeholder.svg"; }} />
                </div>
                <h3 className="name">{m.name}</h3>
                {m.role && <div className="role" title={m.role}>{m.role}</div>}
                {active?.id === m.id && m.description && (
                  <div className="member-modal" role="dialog" aria-label={`Más info de ${m.name}`}>
                    <div className="member-modal__content">{m.description}</div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
