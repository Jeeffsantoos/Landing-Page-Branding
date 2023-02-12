import React from "react";
import "./style.css";
import Logo from "../../assets/logo.png";
import iconeLua from "../../assets/moon.png";
import iconeSol from "../../assets/sun.png";

export default function Topo(props) {

  return (
    <header id="limitar-secao-header" className={props.temaDark ? "header-claro" : "header-escuro"}>
      <img className="logo" src={Logo} alt="Logo" />
      <button onClick={props.alterartema} className={props.temaDark ? "botao-claro" : "botao-escuro"}>
        <img className="iconeBtn" src={props.temaDark ? iconeLua : iconeSol} alt="Tema" />
      </button>
    </header>
  )
}