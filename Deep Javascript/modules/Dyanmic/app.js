const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  import('./greeting.js')
    .then((greeting) => {
      greeting.sayHi();
    })
    .catch((error) => {
      console.error(error);
    });
});