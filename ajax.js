$('#btnContinuar1').click(function(){
			let Nombre=document.getElementsById('NombreCompleto1').value;
			let Correo=document.getElementsById('Email').value;
			let Contrasena=document.getElementsById('Contrasena').value;
			let NickName=document.getElementsById('NickName').value;
			
			

			$.ajax({
				url:'insertarPerfilUsuario.php',
				type:'POST',
				dataType:'json', 
				data:{nombre:Nombre,correo:Correo,contrasena:Contrasena,nick:NickName},
				success:function(datos){
					$("#respuesta").html(datos);
				}
			})
			

		})