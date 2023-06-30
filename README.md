# ejercicio-node-xacademy

## API REST para manejar librerías y libros

Para manejar cada ruta se utiliza un provider que se comunica con la base de datos. El provider es llamado por las funciones de service que aplicarán la lógica de negocio de ser necesario. El controller se encarga de manejar las peticiones a la API y es quien llama a los servicios necesarios. Por último los routers tienen en cuenta el path de las peticiones y los métodos para disbuirlas y lammar a las correspondientes funciones de los controllers.

## Rutas
(describir  las opciones de la API)
- /library
  - /library/:libraryId/book --> Crear un libro en la librería con ese id
- /book
- /user
  Al inicializar el servidor se crean dos usuarios: 
  name: admin
  password: admin
  name: pepe
  password: pepe
Para acceder a cualquier dato primero va a ser necesario loggearse. Hay dos roles "USER" y "ADMIN". Algunas rutas van a estar disponibles solo para el rol "ADMIN".
El CRUD de usuarios solo puede ser accedido por el "ADMIN", al principio es uno solo creado al inicio del server (entiendo que dependiendo de para qué se vaya a utilizar la api, sería las decisiones acerca de creación de usuarios ya acceso a las rutas).

## Dudas y tareas
- ¿Qué opciones hay para actualizar un elemento/una fila? ¿Qué conviene devolver al request al actualizar?
- Validaciones: del isbn, del teléfono...
- En general, una vez que todo funciones podría ordenar mucho en cuanto a los errores y a los mensaje que otorga la api a los usuarios.
  - Por ejemplo, ¿Qué pasa al agregar un libro a una librería que no existe?



