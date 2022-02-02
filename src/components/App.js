import "bootstrap/dist/css/bootstrap.min.css";

// Não se esqueça de importar os componentes!
import Greeting from "./Greeting"

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      {/* Não se esqueça de invocar seus componentes aqui! */}
      <small>Interpolação de variáveis</small>
      <Greeting name="Danielle" />

      <small>Imagens</small>
      <hr />

      <small>Renderização de listas</small>
      <hr />

      <small>Renderização condicional</small>
      <hr />
    </div>
  );
}

export default App;
