'use strict';

const resetElement = document.querySelector('.js-reset');
const characterElement = document.querySelector('.js-input');
const searchElement = document.querySelector('.js-button');
const nameElement = document.querySelector('.js-text');
const valueElement = characterElement.value;
//función que recoge el value del input

function getNameList() {
  const valueElement = characterElement.value;
  console.log(valueElement);
  fetch(`https://swapi.dev/api/people/?search=${valueElement}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);

      let html = '';

      for (let i = 0; i < data.results.length; i++) {
        const name = data.results[i].name;
        const gender = data.results[i].gender;
        const hair = data.results[i].hair_color;

        html += '<ul>';
        html += `<li> Nombre: ${name} </li>`;
        html += `<li> Género: ${gender} </li>`;
        html += `<li> Color de pelo: ${hair} </li>`;
        html += '</ul>';
      }
      nameElement.innerHTML = html;
    });
}

function resetInfo() {
  location.reload();
}

function start(ev) {
  ev.preventDefault();
  getNameList();
}

resetElement.addEventListener('click', resetInfo);
searchElement.addEventListener('click', start);
