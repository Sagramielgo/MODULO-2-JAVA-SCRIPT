'use strict';
const lostNumbers = [4, 8, 15, 16, 23, 42];

let evenArray = [];
// Crear ARRAY números pares
function bestLostNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    }
  }
  return evenArray;
}
console.log(bestLostNumbers(lostNumbers));

//Crear array múltiplos de 3
let threeArray = [];
function forThreeLostNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      threeArray.push(array[i]);
    }
  }
  return threeArray;
}
console.log(forThreeLostNumbers(lostNumbers));

const resultNumbers = evenArray.concat(threeArray);
console.log(resultNumbers);
