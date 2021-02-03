'use strict';

const numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  let newItem = document.createElement('li');
  let newContent = document.createTextNode(numbers[i]);
  newItem.appendChild(newContent);
  const items = document.querySelector('.list');
  items.appendChild(newItem);
}
