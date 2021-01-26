'use strict';
//EJEMPLO
/* const score = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

let acc = 0;

for (let i = 0; i < score.length; i++) {
  acc += score[i];
}

console.log('La puntuación final es ' + acc); */

const piuke = [7, 3, 7, 8, 8];

function average(numbers) {
  let acc = 0;
  for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
  }
  const media = acc / numbers.length;
  return media;
}
const averageResult = average(piuke);

console.log(`La media es ${averageResult}`);
