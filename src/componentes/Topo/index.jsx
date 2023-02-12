import React from "react";
import "./style.css";
import Logo from "../../assets/logo.png";
import iconeLua from "../../assets/moon.png";
import iconeSol from "../../assets/sun.png";

export default function Topo() {
  return (
    <header className="header-escuro limitar-secao-header">
      <img className="logo" src={Logo} alt="Logo" />
      <button className="botao-escuro">
        <img className="iconeBtn" src={iconeSol} alt="sol" />
      </button>
    </header>
  )
}