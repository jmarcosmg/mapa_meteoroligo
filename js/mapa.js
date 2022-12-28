setTimeout(()=> {
var lat = document.querySelector("#lat"),
    long = document.querySelector("#long");


let map = L.map('mapa', {scrollWheelZoom: true
   }).setView([lat.innerText, longitude.innerText], 12);
// Tile type: openstreetmap normal
var openstreetmap = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Jeferson Marcos',
    maxZoom: 20,
    minZoom: 5
})

//mapas a serem carregados
var precipitacao = L.tileLayer(
  'https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid='+ChaveApi, {
    attribution: 'Jeferson Marcos',
    maxZoom: 20,
    minZoom: 5
})

var vento = L.tileLayer(
  'https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid='+ChaveApi, {
    attribution: 'Jeferson Marcos',
    maxZoom: 20,
    minZoom: 5
})


//Base layers definition and addition
var allOptions = {
  "Precipitação": precipitacao,
  "vento": vento
};

// Initialize with openstreetmap
openstreetmap.addTo(map);
precipitacao.addTo(map);

// Add baseLayers to map as control layers
L.control.layers(allOptions).addTo(map);

// let iconOption = {
//     iconUrl: './imagens/location-marker.svg',
//     iconSize: [40, 40]
// };
// let ourCustomIcon = L.icon(iconOption);


}, 1000);