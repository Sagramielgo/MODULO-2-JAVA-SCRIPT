'use strict';
//declaramos una constante

function average(numbers) {
  let acc = 0;
  for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i];
  }
  const media = acc / numbers.length;
  return media;
}
const piuke = [7, 3, 7, 8, 8];
const averageResult = average(piuke);

console.log(`La media es ${averageResult}`);

// ARROW FUNCTION
const averageArrow = (tali) => {
  let acc = 0;
  for (let i = 0; i < tali.length; i++) {
    acc += tali[i];
  }
  const media = acc / tali.length;
  return media;
};
const result = averageArrow([1, 2, 3, 4, 5, 6]);

console.log(`La nueva media es ${result}`);
