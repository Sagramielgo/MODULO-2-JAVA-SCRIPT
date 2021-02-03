'use strict';
let myList = [];
function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    myList.push(i);
  }
  return myList;
}

function getReversed100Numbers() {
  get100Numbers();
  myList.reverse();
  return myList;
}
console.log(getReversed100Numbers());

//Otra forma, introduciendo UN PARÁMETRO

let otherList = [];
function get50Numbers(list) {
  for (let i = 1; i <= 50; i++) {
    list.push(i);
  }
  let otherList = list;
  return otherList;
}

function getReversed50Numbers(list) {
  get50Numbers(list);
  otherList.reverse(list);
  return otherList;
}
console.log(getReversed50Numbers(otherList));
