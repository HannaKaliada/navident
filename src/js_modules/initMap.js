export default function initMap(){
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFubmFrYWxpYWRhIiwiYSI6ImNrZDZkMGpoejBna3cydHJhaDRmcnRjOTAifQ.OZEFHU2CqB5X5wi91OXTJA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        zoom: 16,
        center: [27.438395, 53.905617]
    });

    var marker = new mapboxgl.Marker({ color: '#DB162F' })
        .setLngLat([27.437736, 53.906207])
        .addTo(map);
}