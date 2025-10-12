import { useState } from "react";
import TextBox from "../components/ui/textBox";
import styles from "./Hide.module.css";

export default function Hide() {
  const [mensaje, setMensaje] = useState("");

  const handleHide = () => {
    console.log("Mensaje a ocultar:", mensaje);
    // Aquí luego se conectará la API Python (POST /hide)
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ocultar mensaje</h2>

      <TextBox
        placeholder="Escribe aquí tu mensaje secreto..."
        value={mensaje}
        onChange={setMensaje}
      />

      <button onClick={handleHide} className={styles.button}>
        Ocultar
      </button>
    </div>
  );
}
