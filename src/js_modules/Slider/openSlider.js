export default function openSlider(){
    document.querySelector('.gallery__preview').addEventListener('click', () => {
        document.querySelector('.gallery__slider').classList.remove('hidden');
    })
}