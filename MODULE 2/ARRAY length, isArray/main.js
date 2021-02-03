'use strict';

const arr = [1, 2, 3];

console.log(arr.length); // Mostrará un mensaje con la longitud del array (3)

const list = [1, 2, 3];
Array.isArray(list); // true
const name = 'Ada';
Array.isArray(name); // false

/* 
Ejecutar el siguiente código antes de cualquier otro código creará un Array.isArray()  */

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
