const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const email = document.getElementById("email")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length ==0){
        warnings += `Debes completar con tu nombre <br>`
        entrar = true
    }
    if(apellido.value.length ==0){
        warnings += `Debes completar con tu apellido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})




























/*
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
  apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const campos = {
	nombre: false,
  apellido: false,
	email: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, "nombre");
		break;
    case "apellido":
			validarCampo(expresiones.apellido, e.target, "apellido");
		break;
		case "email":
			validarCampo(expresiones.email, e.target, "email");
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		campos[campo] = true;
	} else {
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
 
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const consulta = document.getElementByName('consulta');
	if(campos.nombre && campos.apellido && campos.email && consuta.checked){
		formulario.reset();

    alert("Consulta enviada con exito")
	} else {
    alert("Completa correctamente todos los campos")
  }
});







/*

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validacion); 
  });
  
  function validacion(e) {
    e.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('Debes rellenar este campo');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
      alert('Debes rellenar este campo');
      return;
    }
    var email = document.getElementById('email').value;
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
     alert("La dirección de email " + valor + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
      return;
    }
    this.submit();
  }
    function validarRadio(e){
      e.preventDefault();
      if (formulario.consulta[0].checked == true || 
          formulario.consulta[1].checked == true ||
          formulario.consulta[2].checked == true){
      } else{
          alert("Elige el tema de la consulta");
          e.preventDefault();
      }
    };
   
  if(nombre && apellido && email && validarRadio ){
		formulario.reset();
    alert("Consulta enviada con exito")
  }
*/
  /*
  function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
     alert("La dirección de email " + valor + " es correcta.");
    } else {
     alert("La dirección de email es incorrecta.");
    }
  }

function mifuncion(){
  var formulario = document.getElementsById('formulario'),
  elementos = formulario.elements,
  boton = document.getElementById('enviar');

  var validarNombre = function(e){
    if (formulario.nombre.value == 0){
        alert("Debes completa este campo");
        e.preventDefault();
        //https://www.w3schools.com/jsref/event_preventdefault.asp
        //Evita que un enlace abra la URL
    }
  };
  var validarRadio = function(e){
    if (formulario.consulta[0].checked == true || 
        formulario.consulta[1].checked == true ||
        formulario.consulta[2].checked == true){
    } else{
        alert("Elige el tema de la consulta");
        e.preventDefault();
    }
  };

  var validar = function(e){
    validarNombre(e);
    validarRadio(e);
  };
  formulario.addEventListener("submit", validar);
}

validar();*/