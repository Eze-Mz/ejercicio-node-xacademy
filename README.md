# ejercicio-node-xacademy
# Lo que me falta
- Este readme 
- Validaciones
- Revisar el código, ver qué puedo mejorar (ver la coherencia en el manejo de errores por ej.)
- Revisar si al borrar una librería, los libros que estaban en ella actualizan el id de la librería a null

## API REST para manejar librerías y libros

Para manejar cada ruta se utiliza un provider que se comunica con la base de datos. El provider es llamado por las funciones de service que aplicarán la lógica de negocio de ser necesario. El controller se encarga de manejar las peticiones a la API y es quien llama a los servicios necesarios. Por último los routers tienen en cuenta el path de las peticiones y los métodos para disbuirlas y lammar a las correspondientes funciones de los controllers.

## Rutas
(describir  las opciones de la API)
- /library
  - GET / --> Ver todas las librerías con sus libros
  - GET /id --> Ver todas las librerías y sus libros
  - /library/id/book --> Crear un libro en la librería con ese id
- /book
- /user
  Al inicializar el servidor se crean dos usuarios: 
  name: admin
  password: admin
  name: pepe
  password: pepe
Para realizar algunas acciones es necesario loggearse. Hay dos roles "USER" y "ADMIN". Algunas rutas van a estar disponibles solo para el rol "ADMIN" (agregar, modificar y eliminar librerías).
El CRUD de usuarios solo puede ser accedido por el "ADMIN", al principio es uno solo creado al inicio del server (entiendo que dependiendo de para qué se vaya a utilizar la api, sería las decisiones acerca de creación de usuarios ya acceso a las rutas).
Para loggearse se debe enviar el nombre de usuario y la password en formato json.

Un comentario: al implementar el loggin se me han ido ocurriendo varias posibilidades distintas, y los posibles casos de uso. Supongo que se trata de encontrar la mejor opción y la más segura de acuerdo a los requerimientos concretos de un proyecto.




