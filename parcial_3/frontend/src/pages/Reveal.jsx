import { useState } from "react";
import TextBox from "../components/ui/textBox"; 

export default function Reveal() {
  const [key, setKey] = useState("");           // Donde el usuario escribe la key
  const [message, setMessage] = useState(null); // Mensaje revelado
  const [error, setError] = useState(null);     // Para mostrar errores

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
    <div style={{ padding: "2rem" }}>
      <h2>Revelar mensaje</h2>

      <TextBox
        placeholder="Ingresa la key generada..."
        value={key}
        onChange={setKey}
      />

      <button
        onClick={handleReveal}
        style={{
          marginTop: "1rem",
          padding: "0.7rem 1.2rem",
          borderRadius: "8px",
          background: "#00b4d8",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Revelar
      </button>

      {/* Resultado */}
      <div style={{ marginTop: "1.5rem" }}>
        {message && (
          <div
            style={{
              background: "#e0ffe5",
              padding: "1rem",
              borderRadius: "8px",
              color: "#1b5e20",
            }}
          >
            <strong>Mensaje:</strong> {message}
          </div>
        )}

        {error && (
          <div
            style={{
              background: "#ffe0e0",
              padding: "1rem",
              borderRadius: "8px",
              color: "#b71c1c",
            }}
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
}