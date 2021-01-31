'user strict';

const adalaber1 = document.querySelector('.description1');
{
  adalaber1.name = 'Susana';
  adalaber1.age = 34;
  adalaber1.job = 'periodista';
}
adalaber1.innerHTML = `Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;

/* console.log(adalaber1.age); */

adalaber1.run = () => {
  console.log('Estoy corriendo');
};

//misma manera de hacerlo
/* adalaber1.run = () => 'Estoy corriendo';
adalaber1.run = () => {
  return 'Estoy corriendo';
}; */

adalaber1.run();

adalaber1.runMarathon = (distance) => {
  return `Estoy corriendo un maratón de ${distance} kilómetros.`;
};

console.log(adalaber1.runMarathon(50));
