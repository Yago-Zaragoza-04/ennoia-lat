import React from "react";
import BannerContent from "./BannerContent.jsx";
import "./Banner.css";

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
      <a href="#one" className="more scrolly">Conoce más</a>
    </section>
  );
}
