(() => {
  'use strict';
  Array.from(document.getElementsByClassName('menu_bar')).forEach(element => {
    console.log(element)
    element.addEventListener('click', () => {
      element.classList.toggle('active');
    });
  });
})();