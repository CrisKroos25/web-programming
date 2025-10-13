<h1>Instrucciones y procedimiento para realizar la ejecución correcta de la aplicación.</h1>

Paso a paso para ejecutar correctamente toda la aplicación fullstack (React + FastAPI + Redis).

<h2>Estructura del Proyecto</h2>

<img width="192" height="686" alt="image" src="https://github.com/user-attachments/assets/97f4dba0-12ce-4732-8dbe-884b75b308c0" />

Requisitos previos:

Antes de ejecutar la aplicación, tener instalado:
<ul>
  <li>Docker Desktop o Docker Engine</li>
  <li>Docker Compose</li>
  <li>Git (para clonar el repositorio)</li>
</ul>

Verificar las versiones en la terminal con:
<ul>
  <li>docker --version</li>
  <li>docker compose version</li>
</ul>

<h2>Archivos importantes</h2>

backend/requirements.txt

<img width="440" height="220" alt="image" src="https://github.com/user-attachments/assets/005d4549-6369-48f6-9c3e-d831723ecdb0" />

<h2>Construcción de contenedores</h2>
Desde la raíz del proyecto (parcial_3/), ejecutar:
docker compose up --build

Esto hará que Docker:

<ul>
  <li>Construya la imagen del frontend (React)</li>
  <li>Construya la imagen del backend (FastAPI)</li>
  <li>Descargue la imagen de Redis</li>
  <li>Levante el visualizador Redis Commander</li>
  <li>Cree una red interna para la comunicación entre servicios</li>
</ul>

<h2>Verificacion de servicios activos</h2>
Se tendra que ver algo asi.

<img width="567" height="327" alt="Screenshot 2025-10-12 172442" src="https://github.com/user-attachments/assets/7a319182-4ee8-453f-8317-87a98d0d12ea" />

Abrir una nueva terminal y ejecutar:

docker ps
y se tendra que ver algo asi:

<img width="1316" height="247" alt="image" src="https://github.com/user-attachments/assets/3a41c7ae-aaa5-4ed0-a863-5d6d3b2f33cc" />

<h2>Acceso a los servicios</h2>

<img width="507" height="377" alt="image" src="https://github.com/user-attachments/assets/f067892b-a238-4d3c-972d-18af373808e1" />

| Servicio              | URL                                                      | Descripción                                      |
| --------------------- | -------------------------------------------------------- | ------------------------------------------------ |
| **Frontend (React)**  | [http://localhost:5173](http://localhost:5173)           | Interfaz web con secciones *Ocultar* y *Revelar* |
| **Backend (FastAPI)** | [http://localhost:8000/docs](http://localhost:8000/docs) | Documentación interactiva Swagger                |
| **Redis Commander**   | [http://localhost:8081](http://localhost:8081)           | Interfaz visual para ver las claves en Redis     |

<h2>Flujo de funcionamiento</h2>
1. Ocultar mensaje
<ul>
  <li>En el frontend, ir a la pestaña “Ocultar”.</li>
  <li>El backend genera una key única y la guarda en Redis.</li>
  <li>En pantalla se muestra la key generada.</li>
</ul>

<img width="1920" height="916" alt="image" src="https://github.com/user-attachments/assets/e61bda0b-ec6f-435a-bec2-28e20ad66231" />

2. Revelar mensaje
<ul>
  <li>Cambiar a la pestaña “Revelar”.</li>
  <li>Pegar la key generada.</li>
  <li>El backend busca el valor en Redis y lo devuelve.</li>
  <li>La clave se elimina automáticamente después de revelar el mensaje.</li>
</ul>

<img width="1920" height="922" alt="image" src="https://github.com/user-attachments/assets/5343c46f-edcc-44a6-af76-0856846d2102" />

<h2>Verificación en Redis Commander</h2>

Abrir http://localhost:8081
<ul>
<li>Se verán las claves generadas por /api/hide</li>
<li>Después de /api/reveal, se eliminan automáticamente.</li>
</ul>
<img width="1215" height="702" alt="image" src="https://github.com/user-attachments/assets/a10beb74-e473-403b-9590-45b8ae5c17fd" />

<h2>Detener los contenedores</h2>

Para detener todo:
docker compose down

Para detener y eliminar datos de Redis:
docker compose down -v


