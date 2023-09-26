# APIREST
-Railway
Crear una base de datos MySql en Railway
create table usuarios (id int(10) not null auto_increment,nombre varchar(30) default null,apellido varchar(30) default null, direccion varchar(30) default null, primary key(id));

inser into usuarios(id,nombre,apellido,direccion)values(1,'nombre','apellido','direccion'),(2,'nombre','apellido','direccion'),(3,'nombre','apellido','direccion');

-Render
Crear un despliegue de web service
Conectar el repositorio Git
Npm install
Npm start

#Enviroment
DB_DATABASE
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
