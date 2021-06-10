import { Cercle } from "./components/Cercle";

function App() {
  const numeroCercles = 5;
  const cercles = new Array(numeroCercles);
  cercles.fill("", "");

  return (
    <>
      <ul>
        {cercles.map((cercle) => (
          <Cercle key={cercle} />
        ))}
      </ul>
    </>
  );
}

export default App;
