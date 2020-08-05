import '@/styles/style.scss';
import initMap from './js_modules/initMap';
import scrollHandler from './js_modules/Menu/scrollHandler';
import changeActiveLinkOnScroll from './js_modules/Menu/changeActiveLinkOnScroll';
import switchActiveService from './js_modules/switchActiveService';
import initSwiper from './js_modules/Slider/initSwiper';
import openSlider from './js_modules/Slider/openSlider';
import closeSlider from './js_modules/Slider/closeSlider';
import createSlides from './js_modules/Slider/createSlides';
import closeSliderObBlur from './js_modules/Slider/closeSliderOnBlur';
import toggleMenu from './js_modules/Menu/toggleMenu';
import hideLoader from './js_modules/hideLoader';

window.addEventListener('DOMContentLoaded', () => {
    hideLoader();
    scrollHandler();
    createSlides();
    initMap();
    changeActiveLinkOnScroll();
    switchActiveService();
    initSwiper();
    openSlider();
    closeSlider();
    closeSliderObBlur();
    toggleMenu();
});