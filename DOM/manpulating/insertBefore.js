let menu = document.getElementById('menu');
// create a new li node
let li = document.createElement('li');
li.textContent = 'before - Home';

// insert a new node before the first list item
menu.insertBefore(li, menu.firstElementChild);
