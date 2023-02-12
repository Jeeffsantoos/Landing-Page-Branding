import Topo from "./componentes/Topo";
import Experiencia from "./componentes/SecaoExperiencia";
import Banner from "./componentes/SecaoBanner";
import Rodape from "./componentes/Rodape";
import "./App.css"
import { useState } from "react";

function App() {

  const [temaDark, settemaDark] = useState(true);

  function alterarTema() {
    settemaDark(!temaDark);
  }

  return (
    <main>
      <Topo alterartema={alterarTema} temaDark={temaDark} />
      <Banner temaDark={temaDark} />
      <Experiencia temaDark={temaDark} />
      <Rodape temaDark={temaDark} />
    </main>
  );
}

export default App;
