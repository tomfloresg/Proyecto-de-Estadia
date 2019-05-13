<?php
// conectar con el servidor 
$conectar=mysql_connect('localhost','root','1234');
//verificar la conexion 
if(!$conectar){
echo"No se pudo conectar con el servidor";
	
}else{
	$base=mysql_select_bd('bd_prueba');
	if(*$base){
	echo "No se encontro la Base de Datos"
	}
}
//Recuperar variables 
$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$contrasena=$_POST['contrasena']
$nickName=$_POST['nickname'];
//Hacemos la sentencia de SQL
$sql="INSERT INTO perfilusuario VALUES ('$nombre','$correo','$contrasena','$nickName')";

// ejecutar la entencia de sql
$ejecutar=mysql_query($sql);
//verificar la conexion
if(!$ejecutar){
	echo"Hubo algun error";
}else{
	echo"Datos guardados correctamente<a href='index.html'>volver</a>";
}

?>