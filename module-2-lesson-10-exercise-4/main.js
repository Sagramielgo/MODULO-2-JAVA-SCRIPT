'use strict';
function getRepos() {
  fetch('https://dog.ceo/api/breeds/list')
    .then((response) => response.json())
    .then((data) => {
      console.log('Breeds data response: ', data);

      const ul = document.querySelector('ul');
      const breeds = data.message;
      let ulContent = '';

      for (const breed of breeds) {
        const breedContent = `<li>${breed}</li>`;
        ulContent += breedContent;
      }
      ul.innerHTML = ulContent;
    });
}
const searchElement = document.querySelector('.js-button');
searchElement.addEventListener('click', getRepos);
