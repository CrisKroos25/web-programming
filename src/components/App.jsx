import React, { useState, useEffect } from "react";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState(() => {
    const datosGuardados = localStorage.getItem("tareas");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  // Sincronizar con localStorage cada vez que cambie "tareas"
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Manejar creación de tarea
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tarea.trim()) {
      alert("Escribe una tarea");
      return;
    }

    const nuevaTarea = {
      id: Date.now(), // ID único
      nombre: tarea,
      estado: "Pendiente"
    };

    setTareas([...tareas, nuevaTarea]);
    setTarea(""); // limpiar input
  };

  // Cambiar estado de tarea (Pendiente <-> Completado)
  const toggleEstado = (id) => {
    const nuevasTareas = tareas.map((t) =>
      t.id === id
        ? { ...t, estado: t.estado === "Pendiente" ? "Completado" : "Pendiente" }
        : t
    );
    setTareas(nuevasTareas);
  };

  // Eliminar tarea
  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((t) => t.id !== id);
    setTareas(nuevasTareas);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Tareas</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe una tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <hr />

      <ul>
        {tareas.map((t) => (
          <li key={t.id}>
            <span
              style={{
                textDecoration: t.estado === "Completado" ? "line-through" : "none"
              }}
            >
              {t.nombre} - {t.estado}
            </span>
            {" "}
            <button onClick={() => toggleEstado(t.id)}>
              {t.estado === "Pendiente" ? "Marcar Completada" : "Marcar Pendiente"}
            </button>
            <button onClick={() => eliminarTarea(t.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
