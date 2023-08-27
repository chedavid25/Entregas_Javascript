//? 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function mayorMenorIgual(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(`El numero ${numero1} es mayor`);
  } else if (numero2 > numero1) {
    console.log(`El numero ${numero2} es mayor`);
  } else {
    console.log(`El ${numero1} y el ${numero2} son iguales`);
  }
}

mayorMenorIgual(6, 16);
