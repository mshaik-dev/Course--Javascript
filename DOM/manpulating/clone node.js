let menu = document.querySelector('#menu');
let clonedMenu = menu.cloneNode(true);
clonedMenu.id = 'menu-mobile';
document.body.appendChild(clonedMenu);
