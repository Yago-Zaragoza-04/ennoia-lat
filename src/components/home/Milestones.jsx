import React, { useEffect, useState } from "react";
import "./Milestones.css";
import { HITOS } from "../../data/hitos";

export default function Milestones() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const openModal = (item) => { setActive(item); setOpen(true); };
  const closeModal = () => { setOpen(false); setTimeout(() => setActive(null), 250); };

  return (
    <section id="milestones" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Hitos</h2>
          <p>Todo lo que logramos y activamos durante el año.</p>
        </header>

        <div className="grid">
          {HITOS.map((h) => (
            <article
              key={h.id}
              className="card"
              onClick={() => openModal(h)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openModal(h)}
              role="button"
              tabIndex={0}
              aria-label={`Abrir ${h.title}`}
            >
              <div className="media">
                <img src={h.image} alt={h.title} />
              </div>
              <h3 className="title">{h.title}</h3>
              {h.credit && <div className="credit">{h.credit}</div>}
            </article>
          ))}
        </div>
      </div>

      <div className={`programs-modal ${open ? "open" : ""}`} onClick={closeModal} aria-hidden={!open}>
        <div className="dialog" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
          <header>
            <h3>{active?.title}</h3>
            <button className="close-btn" onClick={closeModal} aria-label="Cerrar">Cerrar</button>
          </header>
          <div className="body">
            <p>{active?.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
