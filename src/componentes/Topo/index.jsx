import React from "react";
import "./style.css";
import Logo from "../../assets/logo.png"
import iconeLua from "../../assets/moon.png"

export default function Topo() {
  return (
    <header className="header-claro">
      <img className="logo" src={Logo} alt="Logo" />
      <button className="botao-claro">
        <img className="iconeBtn" src={iconeLua} alt="Lua" />
      </button>
    </header>
  )
}