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

//cambiar propiedades
miMascota.edad = 11;
console.log(miMascota);

miPerrita['edad'] = 13;
console.log(miPerrita);

//declarar variable SÓLO de propiedad
const myDogAge = 'edad';
miMascota[myDogAge] = 7;

console.log(miMascota);

//Añadir nuevas propiedades
miMascota.dueño = 'Sagra';
miMascota.more = 'tiene colita';

console.log(miMascota);
