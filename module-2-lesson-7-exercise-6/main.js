'use strict';
const input1 = document.querySelector('.js-input--1');
const input2 = document.querySelector('.js-input--2');
const form = document.querySelector('.form');

function handlePrintFilms(event) {
  const arrayFilms = [input1.value, input2.value];
  for (const movie of arrayFilms) {
    console.log(`A mi también me encantó "${movie}"`);

    event.preventDefault(); //así no me recarga la página de nuevo al terminar el submit
  }
}
