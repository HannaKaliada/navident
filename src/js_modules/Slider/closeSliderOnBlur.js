export default function closeSlider() {
    const slider = document.querySelector('.gallery__slider');
    slider.addEventListener('click', (event) => {
        if(!event.target.closest('.swiper-container')){
            slider.classList.add('hidden');
        }
    })
}