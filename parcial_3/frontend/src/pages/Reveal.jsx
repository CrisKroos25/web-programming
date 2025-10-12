import { useState } from "react";
import TextBox from "../components/ui/TextBox";
import { revealSecret } from "../api/secretApi";
import styles from "./Reveal.module.css";

export default function Reveal() {
  const [key, setKey] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleReveal = async () => {
    try {
      setError(null);
      const data = await revealSecret(key);
      setMessage(data.message);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Revelar mensaje</h2>
      <TextBox
        placeholder="Ingresa la key generada..."
        value={key}
        onChange={setKey}
      />
      <button onClick={handleReveal} className={styles.button}
      >Revelar</button>

      {message && <p>💬 Mensaje: {message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
