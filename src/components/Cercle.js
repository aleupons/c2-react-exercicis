import { useState } from "react";

export const Cercle = () => {
  const [estat, setEstat] = useState(false);
  const modificaEstat = () => {
    setEstat(estat ? false : true);
  };
  const classe = estat ? "cercle taronja" : "cercle";
  return (
    <li
      className="cercle"
      onClick={modificaEstat}
      style={{ backgroundColor: estat ? "orange" : "lightgrey" }}
    ></li>
  );
};
