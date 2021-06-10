import { Circulo } from "./components/Circulo";
import { useState } from "react";
function App() {
  const numeroCirculos = 5;
  const circulos = new Array(numeroCirculos);
  const [estado, setEstado] = useState(false);
  const modificaState = () => {
    setEstado(true);
  };
  return (
    <ul>
      {circulos.map((circulo, i) => (
        <Circulo
          className="circulo"
          estado={estado}
          onClick={modificaState}
          key={i}
        />
      ))}
    </ul>
  );
}

export default App;
