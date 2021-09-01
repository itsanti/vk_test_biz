document.addEventListener("DOMContentLoaded", function () {
    const animation = bodymovin.loadAnimation({
      container: document.querySelector('.main-screen__img--desktop'),
      path: '/js/m2.json',
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });

    let d = function() {
        i = new Swiper(".begin__swiper",{
        spaceBetween: 8,
        slidesPerView: 1.04,
        breakpoints: {
        320: {
          spaceBetween: 8,
          slidesPerView: 1.04
        },
        560: {
          slidesPerView: 1.04,
          spaceBetween: 16
        }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: !0,
          renderBullet: (e,t)=>'<span class="' + t + '"></span>'
        }
          });
      };
      d();
  });