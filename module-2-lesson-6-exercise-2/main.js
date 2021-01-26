"user strict";


const adalaber1 = document.querySelector (".description1");
{
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.job = "periodista";
}
 adalaber1.innerHTML = `Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;

/* console.log(adalaber1.age); */



adalaber1.run = () => {
console.log('Estoy corriendo');
};

adalaber1.run ();

adalaber1.runMarathon = (distance) => {
    console.log(`Estoy corriendo una maratón de ${distance} kilómetros`);
};

adalaber1.runMarathon (50);