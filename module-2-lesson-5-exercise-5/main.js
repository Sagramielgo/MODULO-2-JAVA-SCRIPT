"user strict";
const myPage = document.querySelector(".main");
/* const text = document.querySelector(".message") */

function changeColor(event) {
 console.log(event.code);
  if (event.code === "KeyR") {
    myPage.classList.add ("red");
    myPage.classList.remove ("purple");

  /*   text.innerHTML = "BIEEEEN!! Has pulsado la tecla R" */
  }
  else if (event.code === "KeyM") {
    myPage.classList.add ("purple");
    myPage.classList.remove ("red");
  /*   text.innerHTML = "YUPIIIIIII!! Has pulsado la tecla M"
  } */
} 
}

myPage.addEventListener("keydown", changeColor);

