export default function toggleMenu() {
    const menuBtn = document.querySelector('.header__menu-btn');
    const nav = document.querySelector('.header__nav');

    const changeMenuState = () => {
        menuBtn.classList.toggle('rotate');
        nav.classList.toggle('opened');
    }

    menuBtn.addEventListener('click', () => {
        changeMenuState();
    })

    document.addEventListener('click', (event) => {
        if (nav.classList.contains('opened') &&
            !event.target.closest('.header__menu-btn') &&
            !event.target.closest('.header__nav')) {
            changeMenuState();
        }
    })
}