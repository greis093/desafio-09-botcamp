console.warn("c)Adaptar el ejercicio anterior");
alert("Ejercicio C");
var cantidadDeGatitos = prompt("Ingrese la cantidad de gatitos: ");
var cantidadDePasos = prompt("Ingrese la cantidad de pasos: ");
let arrayGatitos = ["🐈", "🐈‍⬛"];
let paso = "🐾";
let min = 0;
let max = arrayGatitos.length;
for (let i = 1; i <= cantidadDeGatitos; i++) {
  if (min < max) {
    let totalPasos = paso.repeat(cantidadDePasos);

    console.log(`Gato #${i}:` + arrayGatitos[min], totalPasos);
    min++;
  } else {
    min = 0;
    i--;
  }
}
