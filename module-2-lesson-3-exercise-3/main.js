'use strict';
const number = document.querySelector(".Marinumber")

if (parseInt(number) === 0) {
    console.log('El número es 0');
}
  else if (parseInt(number) < 0) {
    console.log('El número es negativo')
  } 
  else if ((parseInt(number) +2) > 13 && (parseInt(number) +2) < 20 || (parseInt(number) +2) === 20) {
    console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
  } 
  
  else if ((parseInt(number) > 20) && (parseInt(number) < 50)) {
console.log('El número es mayor que 20 pero menor que 50')
}

else if ( (parseInt(number)) === 8)
 { console.log('Sois las mejores y lo habéis conseguido!!!!!!')
  } 

  else 
  {console.log('el número es whatever')
  }