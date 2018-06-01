var username = document.getElementById("name");
var mensaje = document.getElementById("bienvenida");
var posicion = document.getElementById("bienvenida");

function	intro(){
	mensaje.innerHTML = "Bienvenid@ " + username.value;
	var reto = document.createElement("p");
	var confirma = document.createElement("button");
	var niega = document.createElement("button");
	reto.innerHTML = "¿Quieres comenzar con el reto?";
	confirma.innerHTML = "Sí";
	niega.innerHTML = "No";
	posicion.appendChild(reto);
	posicion.appendChild(confirma);
	posicion.appendChild(niega);
	niega.setAttribute("id","No");
	confirma.setAttribute("id","Sí");
	reto.setAttribute("id","hijo");
	niega.setAttribute("onclick","retirada();");
	confirma.setAttribute("onclick", "trivia();");
	}
function retirada(){
	mensaje.innerHTML = "¡Hasta Pronto!";
}
function trivia(){
	//ESTA FUNCION SE ACTIVA AL SER CONVOCADA, COMO LA TRIVIA NECESITA ELEMENTOS DE HTML VARIAS VECES Y MODIFICARLO VARIAS VECES, LA FUNCION AYUDA A QUE AGRUPEMOS LAS SENTENCIAS Y LAS PODAMOS EJECUTAR VARIAS VECES, CUANDO SEA NECESARIO
		var parent = document.getElementById("bienvenida");
		var child = document.getElementById("hijo");
		var child2 = document.getElementById("Sí");
		var child3 = document.getElementById("No");
		parent.removeChild(child);
		parent.removeChild(child2);
		parent.removeChild(child3);
		document.getElementById("contenedor").style.visibility = "visible";

		/*var pregunta1 =	 document.cuestionario.pregunta1.value; //NOMBRAR VARIABLES DE LAS PREGUNTAS Y DEL PUNTAJE
    var pregunta2 = document.cuestionario.pregunta2.value;
    var pregunta3 = document.cuestionario.pregunta3.value;
    var correcto = 0;
//INDICAMOS CUANDO ES QUE SE SUMA UN PUNTO AL PUNTAJE CON LA RESPUESTA CORRECTA
          if (pregunta1 == "Crear un archivo CSS separado y enlazarlo mediante una etiqueta HTML." ) {
            correcto ++;
          }

          if (pregunta2 == "Regresa el valor que contiene el div." ) {
            correcto ++;
          }

          if (pregunta3 == "margin" ) {
            correcto ++;
          }
//ESTO ES UN ARREGLO PARA QUE SE PUEDA NOMBRAR UNA VARIABLE Y DEFINIR VARIOS RESULTADOS DE UNA VEZ, ESTOS VALORES TIENEN RANGOS, EMPEZANDO POR EL 0
      var resultados = ["¡Excelente! Eres una Samurai Coder.",
      "¡Muy bien! Puedes mejorar aún más, así sigue afilando tu katana.",
      "¡Te falta mucha práctica, pequeña saltamontes! Por el momento regresa al dōjō para seguir entrenando.",
      "GAMEOVER Has caido en batalla por tu inexperiencia."];
      var imagenes = ["https://berenicelemus.com/trivia/images/onnaBugeisha0.jpg", "https://berenicelemus.com/trivia/images/onnaBugeisha1.jpg", "https://berenicelemus.com/trivia/images/onnaBugeisha2.jpg", "https://berenicelemus.com/trivia/images/onnaBugeisha3.jpg"];
//LO MISMO SE HACE CON UN ARREGLO PARA VARIABLE IMAGENES PARA TENER UN TEXTO CON IMAGENES
    //DESPUES DEFINIMOS UNA VARIABLE CON NOMBRE DE RANGO PARA EVALUAR LOS RESULTADOS DEL PUNTAJE DE MANERA CONDICIONAL, PARA QUE A CADA PUNTAJE, LE CORRESPONDA UNA RESPUESTA Y UNA IMAGEN COMO RESULTADO
      var rango;
           if (correcto > 2) {
             rango = 0
           }

           rango;
           if (correcto > 1 && correcto <3) {
             rango = 1
           }

           rango;
           if (correcto < 2 && correcto > 0) {
           rango = 2
           }

           rango;
           if (correcto < 1) {
           rango = 3
				 }*/


}
