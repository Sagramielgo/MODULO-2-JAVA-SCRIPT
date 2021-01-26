'use strict';
//AÑADIR
function workWithMovies() {
  const movies = ['El diario de Noah', 'Dirty dancing', 'El show de Truman'];
  movies[3] = 'Peters friends';
  movies[3] = 'El sexto sentido';
  movies[0] = 'Peters friends';
  console.log(movies);
}
workWithMovies();
