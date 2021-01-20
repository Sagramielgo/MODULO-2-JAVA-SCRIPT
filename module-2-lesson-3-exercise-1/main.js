'use strict';

const age = document.querySelector(".age");
const year = 365 * 24;
const totalHours = year * parseInt(age.innerHTML)

console.log(`Has vivido ${totalHours} horas`);