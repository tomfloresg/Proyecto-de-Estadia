<?php
header("Content-Type: text/json");
header("Control-Access-Allow-Origin: *");
include ("conectar.php");
if ($_POST) { //Esto cuando se presiona con enviar
	$nombre=$_POST['NombreCompleto'];
	$correo=$_POST['Email'];
	$contrasena=$_POST['Contrasena'];
	$nickname=$_POST['NickName'];
	mysql_query("insert into perfilusuario (nombre,correo,contrasena,nickname)values('$nombre','$correo','$contrasena','$nickname')")or die(mysql_error());
	echo "";


}

?>

