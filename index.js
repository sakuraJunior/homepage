(() => {
  'use strict';
  Array.from(document.getElementsByClassName('menu_bar')).forEach(element => {
    console.log(element)
    element.addEventListener('click', () => {
      document.body.classList.toggle('active');
    });
  });
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    spaceBetween: 0,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    // on:でコールバック関係
    on: {
      // スライドが変わった後のコールバック
      slideChange: function () {
        // thisの中にいろんなスライダー情報
        console.log(this);
        // スライドのdom情報（配列になってる）
        console.log(this.slides);
        // 今のスライドが何枚目か数字で返す
        console.log(this.realIndex);
      }
    }
  });
})();