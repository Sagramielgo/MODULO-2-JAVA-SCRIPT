"user strict";


const adalaber1 = document.querySelector (".description1");
{
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.job = "periodista";
}
 adalaber1.innerHTML = `Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;

/* console.log(adalaber1.age); */



adalaber1.run = phrase => `Yo estoy ${phrase}`;
adalaber1.runAMarathon = distance => `una maratón de ${distance} km`;
 distance = 50;
console.log(adalaber1.run('corriendo'), adalaber1.runAMarathon
);
