'user strict';

const arr = [1, 2, 3, 4];
const arr2 = arr;
arr[4] = 5;
arr.push = 7;

console.log(arr[4]); // Imprime 5 en la consola
console.log(arr2[4]); // Imprime también 5 en la consola

console.log(arr);
