import React from "react";
import "./Partners.css";
import { PARTNERS } from "../../data/partners";

export default function Partners() {
  return (
    <section id="partners" className="partners wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Socios</h2>
          <p>Instituciones que acompañan y potencian nuestra misión.</p>
        </header>
      </div>

      {/* Full-bleed grid like the reference design */}
      <div className="partners-grid">
        {PARTNERS.map((p) => (
          <a
            key={p.id}
            className="partner-tile"
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.name}
          >
            <img src={p.logo} alt={p.name} />
          </a>
        ))}
      </div>
    </section>
  );
}
