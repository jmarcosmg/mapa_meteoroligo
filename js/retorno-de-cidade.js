var ChaveApi = "35a89d92019386407ade61fbe16452ec",
    url = new URLSearchParams(window.location.search),
    cidade = url.get("cidade");

    var zero = 0;

if (cidade == null) {
  var valor = "Montes Claros"
}else{
  var valor = cidade;
}

  var requisicaoJson = "https://api.openweathermap.org/data/2.5/weather?q="+valor+"&appid="+ChaveApi,
      latitude = document.getElementById('lat'),
      longitude = document.getElementById('long'),
      visibilidade = document.getElementById('visibilidade'),
      umidade = document.getElementById('umidade'),
      pressao = document.getElementById('pressao'),
      temperatura = document.getElementById('temp'),
      local = document.getElementById('cidade'),
      icone = document.getElementById('icone');
  fetch(requisicaoJson)
    .then(res => res.json())
    .then((out) => {
    latitude.innerText = (out['coord'].lat);
    longitude.innerText = (out['coord'].lon);
    visibilidade.innerText = (out['visibility']/1000);
    umidade.innerText = (out['main'].humidity);
    pressao.innerText = (out['main'].pressure);
    temperatura.innerText = parseFloat((out['main'].temp - 273.15).toFixed(2));
    local.innerText = (out['name']);
   icone.src = ("https://openweathermap.org/img/wn/"+out.weather[0].icon+".png");

});
