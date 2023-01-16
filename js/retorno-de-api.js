//Esse arquivo retorna as informações da API openweathermap.org

var ChaveApi = "35a89d92019386407ade61fbe16452ec",
   url = new URLSearchParams(window.location.search),
   cidade = url.get("cidade"),
   latitude = url.get("lat"),
   longitude = url.get("lon");

if (latitude == null || longitude == null) {
   latitude = "-16.73";
   longitude = "-43.86";
}

if (cidade == null) {
   cidade = "Montes Claros - MG";
}

//Leitura Json da API
var requisicaoJson = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt&lat=" + latitude + "&lon=" + longitude + "&appid=" + ChaveApi;
fetch(requisicaoJson)
   .then(res => res.json())
   .then((out) => {
      //Carreggamento das informações no html
      document.getElementById('lat').innerText = (out['coord'].lat);
      document.getElementById('long').innerText = (out['coord'].lon);
      document.getElementById('visibilidade').innerText = (out['visibility'] / 1000);
      document.getElementById('umidade').innerText = (out['main'].humidity);
      document.getElementById('description').innerText = (out.weather[0].description);
      document.getElementById('pressao').innerText = (out['main'].pressure);
      document.getElementById('temp').innerText = parseFloat((out['main'].temp).toFixed(0)); //Função parseFloat limita número de ponto flutuante
      document.getElementById('velocidade').innerText = parseFloat((out['wind'].speed * 3.6).toFixed(0));
      document.getElementById('cidade').innerText = cidade;
      document.getElementById('icone').src = ("https://openweathermap.org/img/wn/" + out.weather[0].icon + "@2x.png");
      document.getElementById('vento').style.transform = "rotate(" + out['wind'].deg + "deg)";
      document.getElementById('nascer').innerText = (new Date(out['sys'].sunrise * 1000).toLocaleTimeString("pt-BR", {
         timeStyle: 'short'
      })); //Conversão UNIX timestamp em Horas para o Brasil
      document.getElementById('por').innerText = (new Date(out['sys'].sunset * 1000).toLocaleTimeString("pt-BR", {
         timeStyle: 'short'
      }));

   });
