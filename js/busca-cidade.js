//Esse arquivo carrega as cidades brasileiras listadas em arquivo json

function busca() {

   var busca = document.getElementById('busca-cidade'), //Retorno da busca do campo busca-cidade no index
      valor = new RegExp(busca.value, 'gi'); //Essa linha permite uma busca com expressão regular, não diferenciando maiúsculas ou minúsculas


   if (busca.value.length >= 3) { //A busca só começa após três caracteres digitados no campo de busca

      document.getElementById("sugestao").classList.remove("oculto");

      var cidadesIbge = "cidades.json",
         sugestao = document.querySelector("#sugestao");

      sugestao.innerHTML = ("");
      //Leitura do arquivo Json e escrita de sugestão
      fetch(cidadesIbge)
         .then(res => res.json())
         .then((out) => {

            for (let i = 0; i <= out.length; i++) {
               if (out[i].Nome.match(valor)) {
                  sugestao.innerHTML = document.querySelector("#sugestao").innerHTML + "<li><a href='?lat=" + (out[i].lat) + "&lon=" + (out[i].lon) + "&cidade=" + (out[i].Nome) + "'>" + (out[i].Nome) + "</a></li>";
               }
            }

         });
      //*******
   }
}
