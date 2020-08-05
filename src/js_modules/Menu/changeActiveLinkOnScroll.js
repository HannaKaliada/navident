export default function changeActiveLinkOnScroll() {
    const sections = document.querySelectorAll(".scroll-to-section");
    const navLinks = document.querySelector('.header__nav').querySelectorAll('a');
    const sectionMargin = document.querySelector('.header__bottom').offsetHeight;
    window.addEventListener('scroll', () => {
        const current = sections.length - [...sections].reverse().findIndex((section) => window.pageYOffset >= section.offsetTop - sectionMargin) - 1;
        if (current < 4) {
            navLinks.forEach((link) => link.classList.remove('active'));
            navLinks[current].classList.add('active');
        }
    })
}