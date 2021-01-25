"user strict";
const buttonElement = document.querySelector('.button');

function (event) {
  console.log(event.currentTarget);
}

buttonElement.addEventListener('click', handleButtonClick);