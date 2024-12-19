console.warn("a)Ingresar cantidad de gatitos a visualizar:");

let arrayGatitos = ["😺", "😹", "😽"];
var cantidadDeGatitos = prompt("Ingrese la cantidad de gatitos que desee ver:");
let min = 0;
let max = arrayGatitos.length;

//El array se repita la cantidad de veces indicada
for (let i = 1; i <= cantidadDeGatitos; i++) {
  if (min < max) {
    console.log(`Gato # ${i}:` + arrayGatitos[min]);
    min++;
  } else {
    min = 0;
    console.log(`Gato # ${i}:` + arrayGatitos[min]);
    min = 1;
  }
}
