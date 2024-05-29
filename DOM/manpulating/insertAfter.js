let menu = document.getElementById('menu');
// create a new li node
let li = document.createElement('li');
li.textContent = 'this is after Services';

// insert a new node after the last list item
menu.insertAfter(li,menu.lastElementChild);
