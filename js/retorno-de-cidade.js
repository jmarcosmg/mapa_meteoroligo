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

  var requisicaoJson = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt&lat="+latitude+"&lon="+longitude+"&appid="+ChaveApi,
      latitude = document.getElementById('lat'),
      longitude = document.getElementById('long'),
      visibilidade = document.getElementById('visibilidade'),
      velocidade = document.getElementById('velocidade'),
      vento = document.getElementById('vento'),
      umidade = document.getElementById('umidade'),
      description = document.getElementById('description'),
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
    description.innerText = (out.weather[0].description);
    pressao.innerText = (out['main'].pressure);
    temperatura.innerText = parseFloat((out['main'].temp).toFixed(0));
    velocidade.innerText = parseFloat((out['wind'].speed * 3.6).toFixed(0));
    local.innerText = cidade;
    icone.src = ("https://openweathermap.org/img/wn/"+out.weather[0].icon+"@2x.png");
    document.getElementById('vento').style.transform = "rotate("+out['wind'].deg+"deg)";

});
