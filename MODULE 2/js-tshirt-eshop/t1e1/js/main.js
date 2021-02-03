'use strict';

//paso 1
const cardsElement = document.querySelector('.js-cards');

/* function getProductHtmlCode() {
  let htmlCode = `<p>Camiseta 1<p>`;
  return htmlCode;
}

const htmlCodeOk = getProductHtmlCode();
console.log(htmlCodeOk); */

//paso 2

function getProductHtmlCode() {
  let htmlCode = `<article class="card">`;
  htmlCode += `  <img src="./images/node-js.jpg" class="card__img" alt="Camiseta de Node JS">`;
  htmlCode += `  <h3 class="card__title">Node JS</h3>`;
  htmlCode += `<p class="card__description">12 €</p>`;
  htmlCode += `<button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}

const htmlCode = getProductHtmlCode();

/* function getProductHtmlCode(name, price, imageUrl) {
  let htmlCode = `<article class="card">`;
  htmlCode += `  <img src="${imageUrl}" class="card__img" alt="Camiseta de ${name}">`;
  htmlCode += `  <h3 class="card__title">${name}</h3>`;
  htmlCode += `  <p class="card__description">${price} €</p>`;
  htmlCode += `  <button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}

getProductHtmlCode() */

/* function paintProducts() {
  const product1 = getProductHtmlCode('Node JS', '12,00', './images/node-js.jpg');
  const product2 = getProductHtmlCode('JavaScript', '15,00', './images/javascript.jpg');
  const product3 = getProductHtmlCode('React JS', '13,00', './images/react.jpg');
  cardsElement.innerHTML = product1 + product2 + product3;
}

paintProducts(); */
