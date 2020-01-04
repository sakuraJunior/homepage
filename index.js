(() => {
  'use strict';
<<<<<<< HEAD
  Array.from(document.getElementsByClassName('menu_bar')).forEach(element => {
    console.log(element)
    element.addEventListener('click', () => {
      element.classList.toggle('active');
    });
=======
  document.getElementById('menu-bar').addEventListener('click', () => {
    document.getElementById('menu-bar').classList.toggle('active');
>>>>>>> origin/master
  });
})();