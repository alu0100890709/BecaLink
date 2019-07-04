function cambiar(esto)
{
	vista=document.getElementById(esto).style.display;
	if (vista=='none')
		vista='block';
	else
		vista='none';

	document.getElementById(esto).style.display = vista;
}



function enviar(pagina){
	document.nombreDelFormulario.action = pagina;
	document.nombreDelFormulario.submit();
	
}

function mover(pagina){
	location.href=pagina;
	
}


function go(){
	if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
			document.form.submit(); 
		} 
		else{ 
			 alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
		} 
	} 

function navbarInf(){
	var elemento = document.getElementById("Info");
    if (elemento.className == "active") {
	  elemento.className = "desactive";

    }else {
	  elemento.className = "active";
	  cambiar('Información');
	  if(document.getElementById("Requirements").className == "active"){ navbarReq(); cambiar('Requisitos');}
	  if(document.getElementById("Contact").className == "active"){ navbarCont(); cambiar('Contactos');}
    }
}

function navbarReq(){
	var elemento = document.getElementById("Requirements");
    if (elemento.className == "active") {
	  elemento.className = "desactive";
	  
    }else {
	  elemento.className = "active";
	  cambiar('Requisitos');
	  if(document.getElementById("Info").className == "active"){ navbarInf();  cambiar('Información');}
	  if(document.getElementById("Contact").className == "active"){ navbarCont(); cambiar('Contactos');}
	  
    }
}

function navbarCont(){
	var elemento = document.getElementById("Contact");
    if (elemento.className == "active") {
      elemento.className = "desactive";
    }else {
	  elemento.className = "active";
	  cambiar('Contactos');
	  if(document.getElementById("Info").className == "active"){ navbarInf();  cambiar('Información');}
	  if(document.getElementById("Requirements").className == "active"){ navbarReq(); cambiar('Requisitos');}
    }
}




function mostrar(id) {
    if (id == "2") {
        $("#prueba").show();

    }
}