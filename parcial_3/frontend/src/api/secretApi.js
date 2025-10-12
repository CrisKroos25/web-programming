// src/api/secretApi.js
const API_URL = "http://127.0.0.1:8000/api";

export async function hideSecret(message) {
  const response = await fetch(`${API_URL}/hide`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) throw new Error("Error al ocultar el mensaje");

  return await response.json(); // { key: "..." }
}

export async function revealSecret(key) {
  const response = await fetch(`${API_URL}/reveal/${key}`);

  if (!response.ok) throw new Error("La key no existe o ya fue utilizada");

  return await response.json(); // { message: "..." }
}
