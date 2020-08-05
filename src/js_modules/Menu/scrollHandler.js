export default function scrollHandler() {
    const headerBottom = document.querySelector('.header__bottom');
    const headerTop = document.querySelector('.header__top');
    const nav = document.querySelector('.header__nav');
    const navLinks = nav.querySelectorAll('a');
    window.addEventListener('scroll', () => {
        if (pageYOffset > headerTop.offsetHeight - 10) {
            headerBottom.style.top = '0';
        } else {
            headerBottom.style.top = headerTop.offsetHeight + 'px';
            navLinks.forEach((link) => link.classList.remove('active'));
        }
    })
}