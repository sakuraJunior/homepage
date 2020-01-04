(() => {
  'use strict';
  Array.from(document.getElementsByClassName('menu_bar')).forEach(element => {
    console.log(element)
    element.addEventListener('click', () => {
      document.body.classList.toggle('active');
    });
  });
})();