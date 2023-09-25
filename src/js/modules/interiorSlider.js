import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function interiorSlider(){
    var swiper = new Swiper('.interior-slider', {
        // mousewheel: true,
        // mouseWheel:{
        //   invert: true,
        // },
        navigation: {
        nextEl: '.interior-slider__btn-next',
        prevEl: '.interior-slider__btn-prev',
        },
        loop:true,
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

export default interiorSlider;