'use strict';

let myList = [];
function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    myList.push(i);
  }
  return myList;
}
console.log(get100Numbers());

//Otra forma, introduciendo UN PARÁMETRO

let otherList = [];
function get50Numbers(list) {
  for (let i = 1; i <= 50; i++) {
    list.push(i);
  }
  const otherList = list;
  return otherList;
}
console.log(get50Numbers(otherList));
