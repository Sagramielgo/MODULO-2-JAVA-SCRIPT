'use strict';
//declaramos una constante

// Lista de contactos (array con objetos dentro)
const adalabers = [
  {
    name: 'María',
    age: 29,
    job: 'Diseñadora',
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'Ingeniera química',
  },
  {
    name: 'Susana',
    age: 34,
    job: 'Periodista',
  },
  {
    name: 'Rocío',
    age: 25,
    job: ' Actriz',
  },
  {
    name: 'Inma',
    age: 21,
    job: 'Diseñadora',
  },
];

// pinta "María"
console.log(adalabers[0].name);
//pinta "Lucía y "Actriz
console.log(
  `El nombre de la segunda adalaber es ${adalabers[1].name}, y el trabajo de la cuarta adalaber es ${adalabers[3].job}.`
);
//1 número de adalabers en el listado

//1.1 CON PARÁMETRO
function countAdalabers(adaArray) {
  return adaArray.length;
}
console.log(countAdalabers(adalabers));

//1.2 SIN PARÁMETRO
function countAdalabers() {
  return adalabers.length;
}
console.log(countAdalabers());

//2 age average

function averageAge(adaArray) {
  let totalAge = 0;
  for (let i = 0; i < adaArray.length; i++) {
    totalAge += adaArray[i].age;
  }
  const averageAge = totalAge / adaArray.length;
  return averageAge;
}
console.log(averageAge(adalabers));

// 3 The youngest adalaber con LEO
function theYoungest(adaArray) {
  let youngest = adaArray[0]; //hipothesis

  for (let i = 1; i < adaArray.length; i++) {
    if (adaArray[i].age < youngest.age) {
      //he encotrado una más joven
      youngest = adaArray[i];
      //sustituyo youngest por la más joven encontrada
    }
  }
  return youngest.name;
}
console.log(theYoungest(adalabers));

// el nombre de la adalaber más joven
// let theYoungest = "";
// let lowestAge = 0;
// for (let i = 0; i < adaArray.length; i++) {
//   if (lowestAge === 0) {
//     theYoungest = adaArray[i].name;
//     lowestAge = adaArray[i].age
//   } else if (adaArray[i].age < lowestAge) {
//     theYoungest = adaArray[i].name;
//     lowestAge = adaArray[i].age
//   }
// }f

function theYoungest(adaArray) {
  let theYoungestName = adaArray[0].name;
  let lowestAge = adaArray[0].age;
  // empiezo por 1 porque 0 es el valor inicial
  for (let i = 1; i < adaArray.length; i++) {
    if (adaArray[i].age < lowestAge) {
      theYoungestName = adaArray[i].name;
      lowestAge = adaArray[i].age;
    }
  }
  return theYoungestName;
}
console.log(theYoungest(adalabers));

//número de diseñadoras
function countDesigners(adaArray) {
  let numberDesigners = 0;
  for (let i = 0; i < adaArray.length; i++) {
    if (adaArray[i].job === 'Diseñadora') {
      numberDesigners += 1;
    }
  }
  return numberDesigners;
}
console.log(countDesigners(adalabers));
