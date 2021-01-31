'use strict';
//declarar array
const pelisFavos = [
  'Zootopia',
  'Kubo and the Two Strings',
  'La tortue rouge',
  'Ma vie de Courgette',
  'Moana',
];

// bucle for
for (let i = 0; i < pelisFavos; i++) {
  console.log(`"${pelisFavos[i]}" was nominated to 89th Academy Awards`);
}

// bucle for...of
for (const movie of pelisFavos) {
  console.log(`"${movie}" was nominated to 89th Academy Awards`);
}
