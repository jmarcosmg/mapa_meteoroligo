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
var temperatura = L.tileLayer(
  'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{x}.png?appid='+ChaveApi, {
    attribution: 'Jeferson Marcos',
    maxZoom: 20,
    minZoom: 5
})




// Initialize with openstreetmap
openstreetmap.addTo(map);
temperatura.addTo(map);




