'use strict';




function getIva(a) {
  return "Precio sin IVA: " + a + "€, con IVA: " + a * 0.21 + "€ y Total: " + ((a * 0.21) + a);
}



const ivaPrice = getIva(10)


console.log(ivaPrice);