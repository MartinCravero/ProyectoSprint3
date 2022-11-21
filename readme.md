Guía de Instalación del SERVIDOR
El proyecto se ejecutó a través del editor de código VisualCode pero puede utilizarse cualquier otro que desee.

1) Descargar e instalar el entorno de ejecución Node JS através del siguiente link: https://nodejs.org/es/

2) Clonar el repositorio (o descargar) donde se encuentra todo el proyecto y las utilidades: https://github.com/MartinCravero/ProyectoSprint3

3) Abrir el editor de código y en la terminal(consola) ubicándose en la carpeta raíz del proyecto descargado y ejecutar la instrucción "npm i"

Provocará que el sistema detecte todas las instancias listadas en el archivo package.json (necesarias para la ejecución del proyecto) y las instale localmente utilizando el gestor de descarga de NodeJs.

Guía de Instalación de la BASE de DATOS
1) Descargar e Instalar un gestor de base de datos MYSQL, en nuestro caso utilizamos XAMPP que se puede obtener en el siguiente link: "https://www.apachefriends.org/download.html"

2) Navegar en consola hasta la raíz del proyecto, carpeta “utilities” y ejecutar los archivos “delilahTables.sql” y luego el archivo “InitialSQLData.sql” 
El primer archivo creara las tablas para la base de dato necesarias para el proyecto y el segundo archivo hará un volcado inicial de datos en dichas tablas.

Configuraciones:

1) En la Raíz del proyecto “utilities/db_context.js” se encuentran los datos para conectar a la base de datos Mysql, dichos datos deben COINCIDIR con las configuraciones en XAMPP

    database = {
        NAME: 'delilah',
        HOST: 'localhost',
        USER: 'root',
        dialect: 'mysql',
        PORT: 3306
    }

2) El puerto Utilizado para hostear el servidor es el PORT 5000 y para acceder al mismo se utiliza el link: "localhost:5000/"

3) El proyecto tiene seguridad JWT cuya contraseña de encriptación es: jwtSecret = 'D3l1l4h';


Levantar Servidor
Para iniciar la API se debe acceder a la raíz del proyecto en la Consola del Visual Code y ejecutar el comando: "node .\app.js"

Testear la API
Para testear los distintos Endpoints utilizamos Postman cuyo link de descarga es: https://www.postman.com/downloads/

En la raíz del proyecto “utilities/Delilah.postman_collection.json” se puede utilizar dicho archivo para ser importado en Postman y probar todos los Endpoins.

Documentación
La documentación de los Endpoints de la Api se encuentra en la raíz del proyecto, su ubicación es “utilities/swagger.yaml”. Dicha documentación fue elaborada con Swagger.