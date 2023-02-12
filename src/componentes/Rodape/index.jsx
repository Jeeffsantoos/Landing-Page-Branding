import React from "react";
import "./style.css";

import Logo from "../../assets/logo.png";
import iconeFacebook from "../../assets/facebook.png";
import iconeTwitter from "../../assets/twitter.png";
import iconeLinkedin from "../../assets/linkedin.png";
import iconeDribble from "../../assets/dribble.png";
import iconeBehance from "../../assets/behance.png";
import iconeGoogle from "../../assets/google-plus.png";




export default function Rodape(props) {
  return (
    <footer className="footer-claro">
      <img className="logo-rodape" src={Logo} alt="Logo" />
      <div id="footer-txt" className="footer-txt-claro">
        <p>
          Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
          ferramentas e tecnologias personalizadas.
        </p>
      </div>
      <div className="icones">
        <img src={iconeFacebook} alt="Facebook" />
        <img src={iconeTwitter} alt="Twitter" />
        <img src={iconeLinkedin} alt="LinkedIn" />
        <img src={iconeDribble} alt="Dribble" />
        <img src={iconeBehance} alt="Behance" />
        <img src={iconeGoogle} alt="Google" />
      </div>
      <div id="copy" className="copy-claro">
        <p>Copyright 2022 &copy; <span>Jefferson Lima</span></p>
      </div>
    </footer>
  );
}