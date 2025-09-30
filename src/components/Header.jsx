import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header({ alt = false }) {
  const [open, setOpen] = useState(false);
  // Close on Esc and lock scroll when drawer is open
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);
  useEffect(() => {
    // Re-initialize Spectral's header behavior after React hydration
    const reinitializeHeader = () => {
      if (typeof window !== 'undefined' && window.$ && window.$('#banner').length > 0) {
        const $window = window.$(window);
        const $banner = window.$('#banner');
        const $header = window.$('#header');
        
        // Only proceed if scrollex exists and header starts as .alt
        if ($header.hasClass('alt') && typeof $banner.scrollex === 'function') {
          // Clean up any existing events (namespaced)
          $window.off('resize.spectral');
          $banner.off('.spectral');
          
          // Re-setup the scrollex behavior
          $window.on('resize.spectral', function() { $window.trigger('scroll'); });
          
          $banner.scrollex({
            bottom: $header.outerHeight() + 1,
            terminate: function() { $header.removeClass('alt'); },
            enter: function() { $header.addClass('alt'); },
            leave: function() { $header.removeClass('alt'); }
          });
        }
      }
    };
    
  // Wait briefly for jQuery to be available and theme scripts to attach
  const t = setTimeout(reinitializeHeader, 200);
  return () => clearTimeout(t);
  }, []);
  
  return (
  <header
      id="header"
      suppressHydrationWarning
      className={alt ? "alt" : ""}
    >
      <h1>
        <a href="/">
          <img src="/images/ennoia_lat_logo.png" alt="Ennoia Lat" className="site-logo" />
        </a>
      </h1>
      <nav id="nav" aria-label="Principal">
        {/* Botón hamburguesa (móvil) */}
        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <span className="bars" />
        </button>
        {open && (
          <button
            type="button"
            className="menu-close"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden>×</span>
          </button>
        )}
        {/* Mobile overlay */}
        <div className={`nav-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
        <ul id="nav-links" className={`nav-links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
          <li><a href="#banner">Inicio</a></li>
          <li><a href="#programs">Programas e Hitos</a></li>
          <li><a href="#cta">Comunidad</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
