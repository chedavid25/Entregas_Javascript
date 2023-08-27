//?1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function adivinarNumero(numero) {
  if (numero % 2 == 0) {
    console.log(`El numero ${numero} es Par`);
  } else {
    console.log(`El numero ${numero} es Impar`);
  }
}

adivinarNumero(6);
