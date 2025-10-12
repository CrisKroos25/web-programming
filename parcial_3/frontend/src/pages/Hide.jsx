import { useState } from "react";
import TextBox from "../components/ui/TextBox";
import { hideSecret } from "../api/secretApi";
import styles from "./Hide.module.css";

export default function Hide() {
  const [mensaje, setMensaje] = useState("");
  const [key, setKey] = useState(null);
  const [error, setError] = useState(null);

  const handleHide = async () => {
    try {
      setError(null);
      const data = await hideSecret(mensaje);
      setKey(data.key);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ocultar mensaje</h2>
      <TextBox
        placeholder="Escribe aquí tu mensaje secreto..."
        value={mensaje}
        onChange={setMensaje}
      />
      <button onClick={handleHide} className={styles.button}
      >Ocultar</button>

      {key && <p>🔑 Tu key es: <strong>{key}</strong></p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

