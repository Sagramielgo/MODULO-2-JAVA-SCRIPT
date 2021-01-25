"user strict";


const boxElement = document.querySelector('.container');


window.addEventListener('scroll', function changeColor () { 
    
    if (window.scrollY < 500) {boxElement.classList.add("pink")}

    else if (window.scrollY > 500){boxElement.classList.add("blue")}
}
);

