'use strict';
const number = document.querySelector(".Marinumber")

function getMedia(a, b, c, d) {
  return (a + b + c + d) / 4;
}

const media = getMedia(4, 7, 5, 8)
console.log("La media de estos números es:", media);