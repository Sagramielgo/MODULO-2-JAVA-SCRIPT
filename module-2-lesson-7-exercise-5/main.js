'use strict';
//EJEMPLO
/* const score = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];

let acc = 0;

for (let i = 0; i < score.length; i++) {
  acc += score[i];
}

console.log('La puntuación final es ' + acc); */

const scores = [7, 3, 7, 8, 5];

let acc = 0;

for (let i = 0; i < scores.length; i++) {
  acc += scores[i];
}

const media = acc / scores.length;

console.log(`La media es ${media}`);
