var ChaveApi = "35a89d92019386407ade61fbe16452ec",
    url = new URLSearchParams(window.location.search),
    lat = url.get("lat"),
    long = url.get("lon");

if (lat == null || long == null) {
  lat = "-16.73";
  long = "-43.86";
}


let map = L.map('mapa', {scrollWheelZoom: true
   }).setView([lat, long], 12);
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


