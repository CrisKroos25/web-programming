<h1>ENTREGABLES</h1>

<h2>Explicación de los hooks utilizados y el por qué de su utilización.</h2>

En la rama 'hw-04' se realizo la utilizacion de hooks, dicha tarea consistia en crear un gestor de tareas y que el estado de cada tarea se guarde en el local storage del navegador. 
Se implementaron 2 hooks para la realizacion de la misma, el primero <b>'useState'</b> y el segundo <b>'useEffect'</b>.

Al inicio del componente se crean dos useState:
<img width="725" height="147" alt="image" src="https://github.com/user-attachments/assets/3ea36dc3-0ca2-459e-89c0-fe5bff34cd5f" />

el primero para una tarea individual el cual esta enlazado al input (el unico que existe) por medio de la propiedad value={tarea}, esto con el fin de que cada vez que el usuario teclee un nuevo nombre para una tarea el estado inicial del nombre de la tarea ("") se actualice. 

<img width="471" height="222" alt="image" src="https://github.com/user-attachments/assets/98655fb5-9cf5-4126-8741-f716e8ad6562" />

y el segundo para el array pero aca hay un detalle y es que le pasamos una función que React ejecuta solo una vez, cuando el componente se monta (lazy initialization).
Lo que hace la funcion es ir a buscar el id "tareas" al localStorage y lo guarda en la constante datosGuardados como string si existe y sino retorna null, en la siguiente linea si "usuarios" existe lo convierte a un objeto y sino crea un array vacio.

Luego se hace uso de los useEffect:

<img width="582" height="102" alt="image" src="https://github.com/user-attachments/assets/7993564e-f0b9-4273-aef6-04d098eced28" />

Se crea un useEffect que tiene como dependencia a 'tareas' lo que significa que cada que cambie tareas (se use setTareas) se vuelve a guardar en el local storage, es decir convierte tarea a string y lo enlaza a la clave 'usuarios' del local storage

Luego cuando el usuario le de en click a enviar:  

<img width="860" height="625" alt="image" src="https://github.com/user-attachments/assets/2d2daad9-788b-48e2-ab34-b309400de2d9" />

revisa que el input no este vacio, crea un objeto con un id unico, el nombre de la tarea (toma el valor de la variable de estado tarea) y el estado lo deja por defecto como 'pendiente', finalmente crea un nuevo array y agrega el objeto al final (tarea nueva).

Luego se crea otro useEffect:

<img width="862" height="56" alt="image" src="https://github.com/user-attachments/assets/e74d8a22-c135-4f4c-8e78-7d0a6b8640eb" />

Que controla el estado de las tareas y las filtra segun el valor, recibe un valor por defecto de "todas".

<img width="762" height="167" alt="image" src="https://github.com/user-attachments/assets/c143c846-66a2-4fdb-864f-b5876b429cb4" />

Si el filtro es “Pendientes” solo retorna las tareas con estado "Pendiente". Lo mismo para "Completadas" y si es "Todas" no retorna nada.

Por ultimo retornamos el HTML:
QUe lo que hace es que el input va a estar 'seteando' el valor de estado de tarea todo el rato cuando el usuario escriba en el input.
Se crean 3 botones de filtrado (todas, pendientes, completadas) que segun lo que escoja el usuario va a 'setear' el valor de estado de filtro.
Recorremos las tareas ya filtradas por algun estado, se muestra cada una en un li y se aplican estilos dinamicos segun si esta compleada o no
E incluye un boton para cambiar el estado de cada tarea individualmente.
