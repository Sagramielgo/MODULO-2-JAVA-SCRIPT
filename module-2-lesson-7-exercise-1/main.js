'use strict';
//AÑADIR
const arr = []; // Creamos un array vacío
arr[0] = 'Hola'; // Añadimos un elemento en el índice 0, la primera posición del array
arr[2] = '¿qué tal?'; // Añadimos un elemento en el índice 2, la segunda posición del array
arr[1] = 'guapa'; // índice 1, SEGUNDA posición

// arr será igual a ['Hola', '¿qué tal?']
console.log(arr);

const arr1 = [1, 2, 3];
arr1[8] = 24; // Saltamos del índice 2 al 7 (5 espacios) para añadir un valor en el 8
console.log(arr1); // Muestra 1,2,3,,,,,,24 (un array con 5 espacios vacíos)

//MODIFICAR
const fruta = ['plátano', 'manzana', 'pera']; // Creamos un array con tres elementos
console.log(fruta);

fruta[1] = 'limón'; // Sobrescribimos el valor que hay en la segunda posición del array

console.log(fruta);
// Tras los pasos anteriores arr será igual a  ['plátano', 'limón', 'pera']
