import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

export default function initSwiper() {
    Swiper.use([Navigation]);
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 400,
        effect: 'fade',
        autoHeight: true,
        slidesPerView: 1,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
}