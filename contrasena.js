$(document).ready(function() {

	$('#RepetirContrasena').keyup(function(){
		let pass1=$('#Contrasena').val(); 
		let pass2=$('#RepetirContrasena').val();

		if (pass1===pass2){
			$('error2').text("Coinciden").css("color"," green");
		}else { 
			$('error2').text("No coinciden").css("color"," red");	
		}
		if (pass2 == ""){
			$('#error2').text("No se puede dejar en blanco").css("color"," red");
		}

	})

})