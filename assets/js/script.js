var pacientes = [];
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellido");
var edad = document.getElementById("edad");
var ciudad = document.getElementById("ciudad");
var pais = document.getElementById("pais");

var letras = function(e){
    var codigoTecla = e.keyCode;
  console.log(codigoTecla);
    if((codigoTecla>= 97 && codigoTecla<=122) || (codigoTecla >=65 && codigoTecla <= 90) || codigoTecla==39 ||codigoTecla==32)  {
      return true;
    }
    else{
      return false;
    }
  }
var numero = function(e){
  var codigoTecla = e.keyCode;
  console.log(codigoTecla);
  if((codigoTecla >= 48 && codigoTecla <= 57)){
    return true;
  }
  else{
    return false;
  }
}

nombre.onkeypress = letras;
apellidos.onkeypress = letras;
ciudad.onkeypress = letras;
pais.onkeypress = letras;
edad.onkeypress = numero;

var inputs = document.getElementsByClassName("input-registro");
console.log(inputs);
var validarImput = function(){
  if(this.value.trim().length==0){
    this.value = "";
    this.nextElementSibling.nextElementSibling.innerText = "*Este campo es obligatorio";
  }
  else{
    this.nextElementSibling.nextElementSibling.innerText = "";
  }
}


function crearFicha(evento){
  evento.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad = document.getElementById("edad").value;
  var genero = document.getElementById("genero").option;
  var ciudad = document.getElementById("ciudad").value;
  var pais = document.getElementById("pais").value;

  function Paciente (nombre, apellido, edad, genero, ciudad, pais){
     this.nombre = nombre;
     this.apellido = apellido;
     this.edad = edad;
     this.genero = genero;
     this.ciudad = ciudad;
     this.pais = pais;
   };
  var nuevo = new Paciente(nombre,apellido, edad, genero, ciudad, pais);
  pacientes.push(nuevo);
  var mostrar = document.createElement("div");
              mostrar.innerHTML = "<br>" + "Nombre: " + pacientes[pacientes.length-1].nombre + " " + pacientes[pacientes.length-1].apellido + "<br>" +               "Edad: " + pacientes[pacientes.length-1].edad + " años" + "<br>" + "País: " + pacientes[pacientes.length-1].pais;

   document.body.appendChild(mostrar);
 formulario.reset();
}

document.getElementById("enviar").addEventListener("click", crearFicha)
