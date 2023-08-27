//? 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function palabraNumero(palabra, numero) {
  let resultado = "";
  for (let i = 0; i < numero; i++) {
    resultado += palabra;
  }
  return resultado;
}
console.log(palabraNumero("David", 5));
