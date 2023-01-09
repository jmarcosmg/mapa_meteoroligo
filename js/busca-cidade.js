function busca(){

  var busca = document.getElementById('busca-cidade'),
      valor = new RegExp(busca.value, 'gi');


if (busca.value.length >= 3) {
  console. clear();

  document.getElementById("sugestao").classList.remove("oculto");
  var cidadesIbge = "cidades.json",
      sugestao = document.querySelector("#sugestao");

      sugestao.innerHTML = ("");

  fetch(cidadesIbge)
    .then(res => res.json())
    .then((out) => {
           
      for (let i = 0; i <= out.length; i++) {
       if(out[i].Nome.match(valor)){
              sugestao.innerHTML = document.querySelector("#sugestao").innerHTML+"<li><a href='?lat="+(out[i].lat)+"&lon="+(out[i].lon)+"&cidade="+(out[i].Nome)+"'>"+(out[i].Nome)+"</a></li>";
        }
      }

});

}
}
