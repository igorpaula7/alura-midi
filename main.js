const botoes = document.querySelectorAll(".tecla") // pegando todos os elementos no documento com o seletor tecla

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio)
  if (elemento != null && elemento.localName === "audio") {
    elemento.play()
  } else {
    window.alert("Elemento inválido.")
  }
} // criando função genérica

// repetição usando while ->
/*
let contador = 0

while (contador < botoes.length) {
  const tecla = botoes[contador] //pega a tecla baseado no index e na posição atual do contador
  const instrumentos = tecla.classList[1] // pesquisa no elemento a segunda classe
  tecla.onclick = function () {
    tocaSom(`#som_${instrumentos}`) // executa a função baseado no id. ex: som_tecla_pom
  }
  contador++ // alimenta o contador
}
*/

// repetição usando for ->
for (let i = 0; i < botoes.length; i++) {
  // declara variável; impõe condição; alimenta contador
  const tecla = botoes[i] // pega a tecla atual baseando no index
  const instrumentos = tecla.classList[1] // pega o nome do instrumento baseado na segunda classe
  tecla.onclick = function () {
    //função baseada no id
    tocaSom(`#som_${instrumentos}`)
  }

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa")
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa")
  }
}
