import React from "react";
import BannerContent from "./BannerContent.jsx";
import "./Banner.css";

function scrollToSectionOne(e) {
  e.preventDefault();
  const target = document.getElementById("one");
  if (!target) return;
  const header = document.getElementById("header");
  const offset = (header?.offsetHeight || 70) + 4; // small spacing
  const y = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Banner() {
  return (
    <section id="banner">
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/banner.jpg"
      >
        {/* Available format */}
        <source src="/videos/home-banner.webm" type="video/webm" />
      </video>
      <div className="bg-overlay" aria-hidden="true"></div>
      <BannerContent />
      <a
        href="#one"
        className="more scrolly"
        onClick={scrollToSectionOne}
      >
        Conoce más
      </a>
    </section>
  );
}
