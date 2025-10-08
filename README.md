<h1>Instrucciones y procedimiento para realizar la ejecución correcta de la aplicación.</h1>

Proyecto Web con Django y PostgreSQL (Docker Compose)

El proyecto implementa una aplicación web en Django conectada a una base de datos PostgreSQL,
contenedorizada mediante Docker y orquestada con Docker Compose.

El objetivo es demostrar la correcta integración entre los servicios de aplicación y base de datos,
así como el uso de variables de entorno y dependencias dentro de un entorno aislado.

<h2>Estructura del Proyecto</h2>

<img width="445" height="552" alt="image" src="https://github.com/user-attachments/assets/c2c16466-448a-499e-9a92-37f557860572" />

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

<h2>Variables de entorno</h2>

El archivo .env contiene las credenciales y configuración de la base de datos:

<img width="472" height="407" alt="image" src="https://github.com/user-attachments/assets/9a42c991-adf3-48c0-9f72-57bcd98fe133" />

Este archivo debe estar en la raíz del proyecto y tener el mismo nombre .env.

Archivos principales

<h2>Dockerfile</h2>

Define la imagen base de Django y los pasos para construir el entorno:

<img width="637" height="842" alt="image" src="https://github.com/user-attachments/assets/3f1391ab-273c-4cdc-b2c9-8ba6c0a8ffa8" />

<h2>docker-compose.yml</h2>

Orquesta los servicios del sistema:

<img width="723" height="900" alt="image" src="https://github.com/user-attachments/assets/cc2c0734-e58b-45a7-b8f7-2ab5da8eaf0e" />

Ejecución del proyecto:

<h4>Construir las imágenes:</h4>
docker-compose build

<h4>Iniciar los contenedores:</h4>
docker-compose up

<h4>Verificar que los servicios están corriendo:</h4>
docker ps

<h4>Acceder a la aplicación:</h4>
Abrir el navegador y comprobar entrando a:
🔗 http://localhost:8000

Se deberia ver la pantalla inicial de Django.

<h4>Detener los servicios:</h4>
Para detener los contenedores:

docker-compose down

Si se desea eliminar los volúmenes (datos de PostgreSQL):

docker-compose down -v

<h2>Notas de desarrollo</h2>
<ul>
  <li>El contenedor web usa Python 3.13 y ejecuta la app Django en el puerto 8000.</li>
  <li>La base de datos PostgreSQL persiste sus datos en el volumen postgres_data.</li>
  <li>El archivo wait_for_db.py asegura que la base de datos esté lista antes de ejecutar las migraciones.</li>
</ul>

<h2>Anexos</h2>
<img width="1537" height="295" alt="image" src="https://github.com/user-attachments/assets/e42f93ee-90ed-4138-a190-f80b4e977e68" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/74dbf38a-a7ec-4de3-b658-f9beea63dc59" />
