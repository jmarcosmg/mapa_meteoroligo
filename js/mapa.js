//Esse arquivo carrega o mapa open street map e mapa de calor open weather map

var ChaveApi = "35a89d92019386407ade61fbe16452ec", //chave api openstreetmap.org
   url = new URLSearchParams(window.location.search), //retorno da url atual
   lat = url.get("lat"), //retorno de latitude da url
   long = url.get("lon"); //retorno de longitude da url

if (lat == null || long == null) { // se latitude ou longitude não existir ele retorna por padrão a cidade de Montes Claros - MG
   lat = "-16.73";
   long = "-43.86";
}

//Carregamento do mapa, documentação disponível em https://leafletjs.com/
let map = L.map('mapa', {
   scrollWheelZoom: true
}).setView([lat, long], 12);

var openstreetmap = L.tileLayer(
   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { //carregamento do tipo de camapa
      attribution: '<a target="_blank" href="https://github.com/jmarcosmg">Jeferson Marcos</a> | <a target="_blank" href="https://openweathermap.org">OpenWeather</a>', //Carregamento de atribuções ao projeto
      maxZoom: 20, // níveis de zoom
      minZoom: 5
   })

var temperatura = L.tileLayer(
   'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{x}.png?appid=' + ChaveApi, {
      maxZoom: 20,
      minZoom: 5
   })


// Carregamento das camadas ao mapa
openstreetmap.addTo(map);
temperatura.addTo(map);
