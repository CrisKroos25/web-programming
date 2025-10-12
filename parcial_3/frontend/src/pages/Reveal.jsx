import { useState } from "react";
import TextBox from "../components/ui/textBox";
import styles from "./Reveal.module.css";

export default function Reveal() {
  const [key, setKey] = useState("");           
  const [message, setMessage] = useState(null); 
  const [error, setError] = useState(null);     

  const handleReveal = async () => {
    setError(null);
    setMessage(null);

    // Simulación temporal mientras se conecta el backend
    if (key === "123abc") {
      setMessage("Este es el mensaje secreto guardado en Redis");
    } else {
      setError("La key ingresada no existe o ya fue utilizada.");
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

      <button onClick={handleReveal} className={styles.button}>
        Revelar
      </button>

      <div className={styles.resultContainer}>
        {message && (
          <div className={`${styles.resultBox} ${styles.success}`}>
            <strong>Mensaje:</strong> {message}
          </div>
        )}

        {error && (
          <div className={`${styles.resultBox} ${styles.error}`}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
