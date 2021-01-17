'use strict';

const mainElement = document.querySelector('.container');

const title = "<h1>Lorem Ipsum </h1>"

const image = "<img src=http://via.placeholder.com/350x150>"

const text = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>"


mainElement.innerHTML = title + image + text;