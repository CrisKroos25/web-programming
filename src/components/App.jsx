import React, { useState, useEffect } from "react";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState(() => {
    const datosGuardados = localStorage.getItem("tareas");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const [filtro, setFiltro] = useState("Todas"); // Nueva variable de estado

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tarea.trim()) {
      alert("Escribe una tarea");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      nombre: tarea,
      estado: "Pendiente",
    };

    setTareas([...tareas, nuevaTarea]);
    setTarea("");
  };

  const toggleEstado = (id) => {
    const nuevasTareas = tareas.map((t) =>
      t.id === id
        ? { ...t, estado: t.estado === "Pendiente" ? "Completada" : "Pendiente" }
        : t
    );
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((t) => t.id !== id);
    setTareas(nuevasTareas);
  };

  // 🔎 Filtrado según categoría seleccionada
  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "Pendientes") return t.estado === "Pendiente";
    if (filtro === "Completadas") return t.estado === "Completada";
    return true; // Todas
  });

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

      {/* Botones de filtrado */}
      <div>
        <button onClick={() => setFiltro("Todas")}>Todas</button>
        <button onClick={() => setFiltro("Pendientes")}>Pendientes</button>
        <button onClick={() => setFiltro("Completadas")}>Completadas</button>
      </div>

      <h3>{filtro}:</h3>
      <ul>
        {tareasFiltradas.map((t) => (
          <li key={t.id}>
            <span
              style={{
                textDecoration: t.estado === "Completada" ? "line-through" : "none",
                color: t.estado === "Completada" ? "green" : "red",
              }}
            >
              {t.nombre} - {t.estado}
            </span>{" "}
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
