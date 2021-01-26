'use strict';

let acc = 0;
for (let i = 0; i < 11; i++) {
  acc = acc + 2;

  console.log(`El índice del bucle es: ${i}`);

  console.log(`El resultado parcial es ${acc}`);
}
console.log(`El resultado final es  ${acc}`);
