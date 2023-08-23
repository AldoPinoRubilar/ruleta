function validarYAzar() {
   var apuestaInput = document.getElementById("apuesta");

   if (apuestaInput.value === "") {
      document.getElementById("mensaje").innerHTML = "Por favor, ingresa una apuesta antes de continuar.";
   } else {
      azar();
      document.getElementById("mensaje").innerHTML = "";
   }
}

function azar() {
   numeroRandom = Math.floor(Math.random() * 33);
   document.getElementById("random").innerHTML = numeroRandom;

   var datoApuesta = $("#apuesta").val();
   document.getElementById("apostado").innerHTML = datoApuesta;

   if (datoApuesta == numeroRandom) {
      document.getElementById("acertado").innerHTML = "Has acertado";
   } else {
      document.getElementById("acertado").innerHTML = "No has acertado";
   }

   if (numeroRandom % 2 == 0) {
      document.getElementById("premio").innerHTML = "Rojo, Ha salido par";
   } else {
      document.getElementById("premio").innerHTML = "Negro, Ha salido impar";
   }

   if (numeroRandom == 0) {
      document.getElementById("premio").innerHTML = "Ha tocado el 0";
   }
}