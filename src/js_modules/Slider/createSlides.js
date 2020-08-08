export default function createSlides() {
    const slidesText = [
        'Какой-то текст',
        'Какой-то текст',
        'Какой-то текст',
        'Какой-то текст',
        'Какой-то текст',
        'Какой-то текст',
        'Какой-то текст',
        'Какой-то текст',
    ];
    const slidesWrapper = document.querySelector('.swiper-wrapper');
    slidesText.forEach((text, index) => {
        const link = require(`../../assets/images/slider/${index}.png`);
        slidesWrapper.insertAdjacentHTML('beforeend', `<img class="swiper-slide" src='${link}'></img>`);
    })
}