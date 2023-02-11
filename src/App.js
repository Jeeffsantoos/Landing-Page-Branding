import Topo from "./componentes/Topo";
import Experiencia from "./componentes/SecaoExperiencia";
import Banner from "./componentes/SecaoBanner";
import Rodape from "./componentes/Rodape";
import "./App.css"

function App() {
  return (
    <main>
      <Topo />
      <Banner />
      <Experiencia />
      <Rodape />
    </main>
  );
}

export default App;
