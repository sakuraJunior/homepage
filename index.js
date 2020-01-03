(() => {
  'use strict';
  document.getElementById('menu-bar').addEventListener('click', () => {
    document.getElementById('menu-bar').classList.toggle('active');
  });
})();