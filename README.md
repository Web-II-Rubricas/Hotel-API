# APIREST
-Railway
Crear una base de datos MySql en Railway
//QUERYS
create table bookings(codigo int(100) not null auto_increment,codigo_habitacion int(100) not null,nombre_cliente varchar(50) not null,telefono_cliente int(100) not null,fecha_reservacion int(100) not null,fecha_entrada int(100) not null,fecha_salida int(100) not null, primary key(codigo));

alter table bookings add key(codigo_habitacion);

create table rooms(id int(100) not null auto_increment,numero int(100) not null,tipo varchar(100) not null,valor int(100) not null, primary key(id));

//VALORES
insert into rooms(numero,tipo,valor)values(1,'normal',10000);

insert into bookings(codigo, codigo_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida )values(001,1,'juan',300301020,021023,021023,021026);

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
