# APIREST
-Railway
Crear una base de datos MySql en Railway
create table booking (codigo int(100) not null auto_increment,codigo_habitacion int(100) not null,nombre_cliente int(100) not null,telefono_cliente int(100) not null,fecha_reservacion int(100) not null,fecha_entrada int(100) not null,fecha_salida int(100) not null, primary key(codigo));

alter table booking add key(id);

create table rooms (id int(100) not null auto_increment,numero int(100) not null,tipo varchar(100) not null,valor int(100) not null, primary key(id));

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
