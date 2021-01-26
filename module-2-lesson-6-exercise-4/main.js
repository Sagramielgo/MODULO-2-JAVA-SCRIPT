"user strict";


const buttonElement = document.querySelector (".button");

function handleButton (event){
 console.log(event);

}
buttonElement.addEventListener ("click", handleButton);