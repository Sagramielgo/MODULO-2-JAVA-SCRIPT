'use strict';

const welcomeMessageElement = document.querySelector('.welcomeText');

const isAdmin = false;
const adminText = isAdmin && 'administradora';
const isModerator = true;
const moderatorText = isModerator && 'moderadora';

// Como la primera expresión es `falsy`, se devuelve la segunda expresión
welcomeMessageElement.innerHTML = `Bienvenida ${adminText || moderatorText}. ¡Es genial verte de nuevo!`;