'use strict';

let myList = [];
function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    myList.push(i);
  }
  return myList;
}
get100Numbers();
console.log(myList);

//Otra forma, introduciendo UN PARÁMETRO

let otherList = [];
function get50Numbers(pepino) {
  for (let i = 1; i <= 50; i++) {
    pepino.push(i);
  }
  const otherList = pepino;
  return otherList;
}
get50Numbers(otherList);
console.log(otherList);
