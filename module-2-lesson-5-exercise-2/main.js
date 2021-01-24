"user strict";


const hiButton = document.querySelector('.button');

let nameElement = document.querySelector (".text");



hiButton.addEventListener('click', function changeText () {
    console.log(`Hola ${nameElement.value}`)}
);