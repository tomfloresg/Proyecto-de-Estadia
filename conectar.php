<?php
header("Content-Type: text/json");
header("Control-Access-Allow-Origin: *");
function conectar(){
$servidor="localhost";
$usuario="root";
$password="1234";
$BaseDatos="bd_pruebas";
$conexion=mysql_connect($servidor, $usuario, $password, $bd_pruebas) or die ("error al conectar el servidor".mysql_error());
	mysql_select_db($BaseDatos,$BaseDatos);
	return $con;
}
?>