function validar(){
	let nombreCompleto, email, contrasena, nickName, expresion;
	nombreCompleto=document.getElementById("NombreCompleto1").value;
	email=document.getElementById("Email").value;
	contrasena=document.getElementById("Contrasena").value;
	nickName=document.getElementById("NickName").value;
	expresion=/\w+@\w+\.+[a-z]/;

	if (nombreCompleto===""||email===""||contrasena===""||nickName==="") {
		alert("El campo esta vacío");
		return false;
	}else if(nombreCompleto.length>30){
		alert("El nombre es muy largo");
		return false;
	}else if (email.length>100){
		alert("El correo es muy largo");
		return false;		
	}
	else if (!expresion.test(email)) {
		alert("El correo no es válido");
		return false;
	}
	else if (contrasena.length>20) {
		alert("La contraseña es muy larga");
		return false;
	}else if (nickName.length>30) {
		alert("El NickName es muy largo");
		return false;		
	}
}
