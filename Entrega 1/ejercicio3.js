//? 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function esMultiplo(numero) {
  if (numero % 5 === 0) {
    console.log(`El numero ${numero} SI es multiplo de 5`);
  } else {
    console.log(`El número ${numero} NO es multiplo de 5`);
  }
}
esMultiplo(10);
