import React, { useState, useEffect } from "react";

function App() {
  // Estado para manejar los inputs
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");

  // Estado para la lista de usuarios: inicializado desde localStorage
  const [usuarios, setUsuarios] = useState(() => {
    const datosGuardados = localStorage.getItem("usuarios");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  // Guardar en localStorage cada vez que cambia usuarios
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  // Manejar el submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoUsuario = { nombre, apellido, edad };

    // Evitar agregar vacíos
    if (!nombre || !apellido || !edad) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Agregar al array existente
    setUsuarios([...usuarios, nuevoUsuario]);

    // Limpiar inputs
    setNombre("");
    setApellido("");
    setEdad("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registro de Usuarios</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <br />

        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <br />

        <button type="submit">Guardar</button>
      </form>

      <hr />

      <h3>Usuarios guardados:</h3>
      <ul>
        {usuarios.map((u, i) => (
          <li key={i}>
            {u.nombre} {u.apellido}, Edad: {u.edad}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
