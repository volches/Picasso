import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function chiefProductSliderFunc(){
    var swiper = new Swiper('.chief-product-slider', {
        // mousewheel: true,
        // mouseWheel:{
        //   invert: true,
        // },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        loop:true,
        // parallax: true,
        // freeMode: true,
        grabCursor: true,
        // autoplay: true,
        speed:1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        slidesPerView: 1,
        spaceBetween: 45,
      });
      
}

export default chiefProductSliderFunc;