'use strict';

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const titleElement = document.querySelector('.title');

const winner1Element = document.querySelector('.name1');
const winner2Element = document.querySelector('.name2');


// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
titleElement.innerHTML = titleElement.innerHTML + winner2Element.innerHTML;