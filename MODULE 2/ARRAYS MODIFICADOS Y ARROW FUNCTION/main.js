'use strict';
//mi array
const numbers = [7, 3, 7, 8, 8];

//mi variable acumulador
let acc = 0;

//mi bucle
for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i];
}
//hallamos la media
let averageResult = acc / numbers.length;
console.log(`La media es ${averageResult}`);

//EJERCICIO 2

//añadimos número al array amentando el divisor
numbers[5] = 7;

//repetimos bucle
for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i];
}
//hallamos media
let averageResult2 = acc / numbers.length;
console.log(`Ahora la media ha cambiado y es ${averageResult2}`);

// arrow function convertir la media en función

const average = (averageResult2) => {
  return;
};

console.log(`La media final es ${averageResult2}`);
