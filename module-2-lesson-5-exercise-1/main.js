"user strict";


const hiButton = document.querySelector('.button');

let helloElement = document.querySelector (".welcome");



hiButton.addEventListener('click', function changeText () {
    helloElement.innerHTML = helloElement.innerHTML + " Mi primer click, ¡Soy the best Programmer!"});