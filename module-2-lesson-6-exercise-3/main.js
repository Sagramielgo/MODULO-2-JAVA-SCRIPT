"user strict";


const adalaber1 = document.querySelector (".description1");
{
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.job = "periodista";
}
 adalaber1.innerHTML = `Mi nombre es ${adalaber1.name} tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;

 adalaber1.showBio = function() {
   return 'Mi nombre es ' + this.name + " tengo " + this.age + " años y soy " + this.job + ".";
 };
 
 console.log(adalaber1.showBio());


const adalaber2 = document.querySelector (".description2");
{
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.job = "Actriz";
}


adalaber2.innerHTML = `Mi nombre es ${adalaber2.name} tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;

adalaber2.showBio = function() {
    return 'Mi nombre es ' + this.name + " tengo " + this.age + " años y soy " + this.job + ".";
  };
  
  console.log(adalaber2.showBio());