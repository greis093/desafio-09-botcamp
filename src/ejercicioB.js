console.warn("b)Crea 2 variables: cantidad de gatitos y cantidad de pasos:");
alert("Ejercicio B");
var cantidadDeGatitos = prompt("Ingrese la cantidad de gatitos:");
var cantidadDePasos = prompt("Ingrese la cantidad de pasos: ");
let gatito = "🐈";
let pasos = "🐾";
for (let i = 1; i <= cantidadDeGatitos; i++) {
  let totalPasos = pasos.repeat(cantidadDePasos);
  console.log(`Gatos # ${i}: ${gatito} ${totalPasos}`);
}
