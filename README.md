# ejercicio-node-xacademy

## API REST para manejar librerías y libros

Para manejar cada ruta se utiliza un provider que se comunica con la base de datos. El provider es llamado por las funciones de service que aplicarán la lógica de negocio de ser necesario. El controller se encarga de manejar las peticiones a la API y es quien llama a los servicios necesarios. Por último los routers tienen en cuenta el path de las peticiones y los métodos para disbuirlas y lammar a las correspondientes funciones de los controllers.

## Rutas
- /library
- /book
- /user



