
let list = document.querySelector('#list');

list.insertAdjacentHTML('beforebegin', '<h2> beforebegin - Web Technology</h2>');
list.insertAdjacentHTML('afterbegin', '<li> afterbegin  -HTML</li>');
list.insertAdjacentHTML('beforeend', '<li> beforeend - JavaScript</li>');
list.insertAdjacentHTML('afterend', '<p> afterend - For frontend developers</p>');
