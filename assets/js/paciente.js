window.onload=function(){
  var nombre = document.getElementById("nombre-pac");
  var apellidos = document.getElementById("apellido-pac");
  var edad = document.getElementById("edad-pac");
  var genero = document.getElementById("genero-pac")
  var ciudad = document.getElementById("ciudad-pac");
  var pais = document.getElementById("pais-pac");

  var objetoPaciente = JSON.parse(localStorage.getItem("nuevoPaciente"));

  nombre.innerText=
}
