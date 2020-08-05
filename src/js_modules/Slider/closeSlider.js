export default function closeSlider() {
    document.querySelector('.slider__close-btn').addEventListener('click', () => {
        document.querySelector('.gallery__slider').classList.add('hidden');
    })
}