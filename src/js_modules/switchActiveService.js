import showPrice from "./showPrice";

export default function switchActiveService() {
    const servicesBlock = document.querySelector('.services__list');
    const services = servicesBlock.querySelectorAll('.service');
    servicesBlock.addEventListener('click', (event) => {
        if (!event.target.closest('.service').classList.contains('active')) {
            services.forEach((service) => service.classList.remove('active'));
            const targetService = event.target.closest('.service');
            targetService.classList.add('active');
            const tableNumber = targetService.dataset.table;
            showPrice(tableNumber);
        }
    })
}