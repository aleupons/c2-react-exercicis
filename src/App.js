import { Cercle } from "./components/Cercle";
import { useState } from "react";
function App() {
  const numeroCercles = 5;
  const cercles = new Array(numeroCercles);
  const [estat, setEstat] = useState(false);
  const modificaEstat = () => {
    setEstat(true);
  };
  return (
    <ul>
      {cercles.map((cercle, i) => (
        <Cercle
          className="cercle"
          estat={estat}
          onClick={modificaEstat}
          key={i}
        />
      ))}
    </ul>
  );
}

export default App;
