export default function closeMenuOnLinkClick() {
    const nav = document.querySelector('.header__nav');
    const menuBtn = document.querySelector('.header__menu-btn');
    nav.addEventListener('click', (event) => {
        if (event.target.classList.contains('header__nav__link')
            && nav.classList.contains('opened')) {
            nav.classList.remove('opened');
            menuBtn.classList.remove('rotate');
        }
    })
}