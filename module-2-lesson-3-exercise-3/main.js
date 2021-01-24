'use strict';
const number = document.querySelector(".Marinumber")
const myNumber = parseInt(number.innerHTML);

if (myNumber === 0) {
    console.log('El número es 0');
}
  else if (myNumber < 0) {
    console.log('El número es negativo')
  } 
  else if ( (myNumber +2) > 13 && (myNumber +2) <= 20) {
    console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
  } 
  
  else if( (myNumber > 20) && myNumber < 50) {
console.log('El número es mayor que 20 pero menor que 50')
}

else if (myNumber === 8)
 { console.log('Sois las mejores y lo habéis conseguido!!!!!!')
  } 

  else 
  {console.log('el número es whatever')
  }