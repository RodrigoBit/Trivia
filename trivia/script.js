// Seleciona o botão com a resposta correta
const botoesCorretos = document.querySelectorAll(".correto");

// Adiciona o evento quando clica no botão com a resposta correta
botoesCorretos.forEach((botao) => {
  botao.addEventListener("click", function () {
    this.classList.toggle("botao-clicado-correto");
    this.classList.toggle("desabilitar-hover-v");
  });
});

// Seleciona o botão com a resposta errada
const botoesErrados = document.querySelectorAll(".errado");

// Adiciona o evento (PARA CADA BOTÃO) quando clica no botão com a resposta errada
botoesErrados.forEach((botao) => {
  botao.addEventListener("click", function () {
    this.classList.toggle("botao-clicado-errado");
    this.classList.toggle("desabilitar-hover-f");
  });
});
// Seleciona a caixa de texto que receberá a resposta
const box = document.querySelectorAll('.box');
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

// Seleciona o botao que enviará a resposta
const enviar1 = document.querySelector("#enviar1");
const enviar2 = document.querySelector("#enviar2");

// Limpa a seleção
// function limpar(params) {
//   box.value = '';
// }

function checar1() {
  if (box1.value.toUpperCase() === "BRASIL" || box1.value.toUpperCase() === "BRAZIL") {
    box1.classList.toggle("respostaAbertaCorreta", true);
    console.log("Resposta Correta");
  } else {
    box1.classList.toggle("respostaAbertaErrada", true);
    console.log("Resposta Errada");
  }
  // limpar();
}
function checar2() {
  if (box2.value.toUpperCase() === "C") {
    box2.classList.toggle("respostaAbertaCorreta", true);
    console.log("Resposta Correta");
  } else {
    box2.classList.toggle("respostaAbertaErrada", true);
    console.log("Resposta Errada");
  }
  // limpar();
}
box.forEach(b => {
  b.addEventListener("click", function () {
    this.classList.toggle("respostaAbertaCorreta", false);
    this.classList.toggle("respostaAbertaErrada", false);
  });
});
enviar1.addEventListener("click", checar1);
enviar2.addEventListener("click", checar2);