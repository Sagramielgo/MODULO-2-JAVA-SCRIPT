'use strict';

const miMascota = {
  name: 'Wisla',
  edad: 10,
  color: 'rubio',
};
console.log(miMascota);

//lo mismo con otra sintaxis
const miPerrita = {};
miPerrita.name = 'Olma';
miPerrita.edad = 8;
miPerrita.color = 'negro';

console.log(miPerrita);

//Asignar funciones a una PROPIEDAD

/* function maullar() {
  console.log('Miaaaauuuu');
}
miMascota.maullar = maullar;
miMascota.maullar(); */

//Asignar con ARROWFUNCTION
miMascota.maullar = () => {
  console.log('Miaaaauuuu');
};
miMascota.maullar();

//ARROWFUNCTION con PARÁMETRO
miMascota.maullar = (name) => {
  console.log(`Guau, guau, soy ${name}`);
};
miMascota.maullar('Wisla');
