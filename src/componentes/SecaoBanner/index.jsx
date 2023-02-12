import React from "react";
import "./style.css";

export default function Banner(props) {
  return (
    <section id="secao-banner">
      <div id="banner-imagem" className={props.temaDark ? "banner-claro" : "banner-escuro"}></div>

      <div className="banner-texto">
        <p>BRANDING / UI / UX / TECNOLOGIA</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>

    </section>
  )
}