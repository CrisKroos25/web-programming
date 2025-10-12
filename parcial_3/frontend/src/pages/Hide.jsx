import { useState } from "react";
import TextBox from "../components/ui/textBox";

export default function Hide() {
  const [mensaje, setMensaje] = useState("");

  const handleHide = () => {
    console.log("Mensaje a ocultar:", mensaje);
    // Aquí luego se conectará la API Python
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Ocultar mensaje</h2>
      <TextBox
        placeholder="Escribe aquí tu mensaje secreto..."
        value={mensaje}
        onChange={setMensaje}
      />
      <button onClick={handleHide} style={{ marginTop: "1rem" }}>
        Ocultar
      </button>
    </div>
  );
}
