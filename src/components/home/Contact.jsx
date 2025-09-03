import React, { useEffect, useMemo, useState } from "react";
import "./Contact.css";

const TABS = [
  { id: "consultas", label: "Consultas generales", aside: "Escribinos tus dudas, propuestas o pedidos de información." },
  { id: "postula", label: "Postulación de proyecto", aside: "Contanos sobre tu proyecto: equipo, estado, necesidades y objetivos." },
  { id: "desafio", label: "Presentá tu desafío", aside: "¿Tenés un reto de I+D? Describilo para conectar con equipos y soluciones." },
  { id: "invierte", label: "Invertí con impacto", aside: "Sumate como partner: vehículos, foco temático y volumen de inversión." },
];

export default function Contact() {
  const [tab, setTab] = useState(TABS[0].id);
  const [toast, setToast] = useState(null); // { type: 'success'|'error', message: string }
  const [sending, setSending] = useState(false);

  // Sync selected tab from hash (#contact?tab=postula or #contact/postula)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const applyFromHash = () => {
      const h = window.location.hash || "";
      const match = h.match(/contact(?:[/?](\w+)|\?tab=(\w+))?/i);
      const selected = match && (match[1] || match[2]);
      if (selected && TABS.some(t => t.id === selected)) setTab(selected);
    };
    applyFromHash();
    window.addEventListener("hashchange", applyFromHash);
    return () => window.removeEventListener("hashchange", applyFromHash);
  }, []);

  const active = useMemo(() => TABS.find(t => t.id === tab) || TABS[0], [tab]);

  const handleSubmit = async (e, meta) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", meta.subject);
    data.append("_template", "table");
    data.append("_captcha", "false");
    data.append("origen", meta.origin);
    try {
      setSending(true);
  const res = await fetch("https://formsubmit.co/ajax/hola@ennoia.lat", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("send-failed");
      await res.json();
      form.reset();
      setToast({ type: "success", message: "Gracias, recibimos tu mensaje. Te responderemos pronto." });
    } catch (err) {
      setToast({ type: "error", message: "No pudimos enviar el formulario. Probá de nuevo en unos minutos." });
    } finally {
      setSending(false);
      // auto-hide after a few seconds
      setTimeout(() => setToast(null), 6000);
    }
  };

  return (
    <section id="contact" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>Contacto</h2>
          <p>Elegí el tipo de contacto y completá el formulario correspondiente.</p>
        </header>

        {toast && (
          <div className={`toast ${toast.type}`} role="status" aria-live="polite">
            <span>{toast.message}</span>
            <button
              type="button"
              className="toast-close"
              aria-label="Cerrar notificación"
              onClick={() => setToast(null)}
            />
          </div>
        )}

        <div className="tabs" role="tablist" aria-label="Tipo de contacto">
          {TABS.map(t => (
            <button
              key={t.id}
              className="tab-btn"
              role="tab"
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid">
          <aside className="aside">
            <h3>{active.label}</h3>
            <p>{active.aside}</p>
          </aside>

          <div role="tabpanel" id={`panel-${active.id}`} aria-labelledby={active.id}>
            {active.id === "consultas" && (
              <ConsultasForm onSubmit={(e) => handleSubmit(e, { subject: "[Ennoia LAT] Consultas generales", origin: "Sección Contacto — Consultas generales" })} sending={sending} />
            )}
            {active.id === "postula" && (
              <PostulacionForm onSubmit={(e) => handleSubmit(e, { subject: "[Ennoia LAT] Postulación de proyecto", origin: "Sección Contacto — Postulación de proyecto" })} sending={sending} />
            )}
            {active.id === "desafio" && (
              <DesafioForm onSubmit={(e) => handleSubmit(e, { subject: "[Ennoia LAT] Presentá tu desafío", origin: "Sección Contacto — Presentá tu desafío" })} sending={sending} />
            )}
            {active.id === "invierte" && (
              <InversionForm onSubmit={(e) => handleSubmit(e, { subject: "[Ennoia LAT] Invertí con impacto", origin: "Sección Contacto — Invertí con impacto" })} sending={sending} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label>
      {label}
      {children}
    </label>
  );
}

function Actions({ sending }) {
  return (
    <div className="actions">
  <button type="submit" className="button primary" disabled={!!sending}>{sending ? "Enviando..." : "Enviar"}</button>
      <button type="reset" className="button secondary">Limpiar</button>
    </div>
  );
}

function ConsultasForm({ onSubmit, sending }) {
  return (
    <form onSubmit={onSubmit}>
      <Field label="Nombre y Apellido">
        <input type="text" name="nombre" required />
      </Field>
      <Field label="Email">
        <input type="email" name="email" required />
      </Field>
      <Field label="Asunto">
        <input type="text" name="asunto" />
      </Field>
      <Field label="Mensaje">
        <textarea name="mensaje" required />
      </Field>
  <Actions sending={sending} />
    </form>
  );
}

function PostulacionForm({ onSubmit, sending }) {
  return (
    <form onSubmit={onSubmit}>
      <Field label="Nombre del Proyecto">
        <input type="text" name="proyecto" required />
      </Field>
      <Field label="Equipo / Institución">
        <input type="text" name="equipo" required />
      </Field>
      <Field label="Etapa actual">
        <select name="etapa">
          <option>Idea</option>
          <option>Investigación en curso</option>
          <option>Prototipo</option>
          <option>Piloto</option>
          <option>Escalando</option>
        </select>
      </Field>
      <Field label="Resumen del Proyecto">
        <textarea name="resumen" required />
      </Field>
      <Actions sending={sending} />
    </form>
  );
}

function DesafioForm({ onSubmit, sending }) {
  return (
    <form onSubmit={onSubmit}>
      <Field label="Organización">
        <input type="text" name="organizacion" required />
      </Field>
      <Field label="Desafío a resolver">
        <textarea name="desafio" required />
      </Field>
      <Field label="Vertical / Área">
        <input type="text" name="vertical" />
      </Field>
      <Field label="Plazo deseado">
        <input type="text" name="plazo" />
      </Field>
      <Actions sending={sending} />
    </form>
  );
}

function InversionForm({ onSubmit, sending }) {
  return (
    <form onSubmit={onSubmit}>
      <Field label="Nombre / Fondo / Empresa">
        <input type="text" name="inversor" required />
      </Field>
      <Field label="Intereses (temas)">
        <input type="text" name="intereses" />
      </Field>
      <Field label="Ticket estimado">
        <input type="text" name="ticket" />
      </Field>
      <Field label="Mensaje">
        <textarea name="mensaje" required />
      </Field>
      <Actions sending={sending} />
    </form>
  );
}
