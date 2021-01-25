"user strict";
const teacher = document.querySelector('.teacher');
const favorite = document.querySelector (".favorite");

function showBorder () {
  teacher.classList.toggle ("teacher--selected");
  favorite.classList.toggle(favorite.innerHTML = "Quitar" );

}

teacher.addEventListener ("mouseover", showBorder);
favorite.addEventListener ("click", showBorder);
