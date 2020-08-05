import prices from "./pricesData";

export default function showPrice(tableNumber){
    const servicesBlock = document.querySelector('.services__prices');
    servicesBlock.textContent = '';
    for(let key in prices[tableNumber]){
        servicesBlock.insertAdjacentHTML('beforeend', 
        `<div class="service">
                <div class="service__name">${key}</div>
                <div class="service__price">${prices[tableNumber][key]} руб.</div>
        </div>`)
    }
}