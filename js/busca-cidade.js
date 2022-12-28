function busca(){

  var busca = document.getElementById('busca-cidade'),
      valor = new RegExp(busca.value, 'gi'),
      ChaveApi = "35a89d92019386407ade61fbe16452ec";


if (busca.value.length >= 3) {
  console. clear();

  document.getElementById("sugestao").classList.remove("oculto");
  var cidadesIbge = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome",
      sugestao = document.querySelector("#sugestao"),
      x = 0;

      sugestao.innerHTML = ("");

  fetch(cidadesIbge)
    .then(res => res.json())
    .then((out) => {
      for (let i = 0; i <= out.length; i++) {
       if((out[i]?.nome.match(valor))){
          fetch("https://api.openweathermap.org/data/2.5/weather?q="+out[i].nome+"&appid="+ChaveApi)
          .then(response => response.json())
          .then((saida) => {
            if (saida.cod != "404") {
              sugestao.innerHTML = document.querySelector("#sugestao").innerHTML+"<li><a href='?cidade="+(out[i].nome)+"'>"+(out[i].nome)+"</a></li>";
            }

          }); 
        }

      }

});

}
}
