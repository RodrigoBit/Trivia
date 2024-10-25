// Seleciona o botão com a resposta correta
const botoesCorretos = document.querySelectorAll(".correto");

// Adiciona o evento quando clica no botão com a resposta correta
botoesCorretos.forEach((botao) => {
  botao.addEventListener("click", function () {
    this.classList.toggle("botao-clicado-correto");
    this.classList.toggle('desabilitar-hover-v');
  });
});

// Seleciona o botão com a resposta errada
const botoesErrados = document.querySelectorAll(".errado");

// Adiciona o evento (PARA CADA BOTÃO) quando clica no botão com a resposta errada
botoesErrados.forEach((botao) => {
  botao.addEventListener("click", function () {
    this.classList.toggle("botao-clicado-errado");
    this.classList.toggle('desabilitar-hover-f');
  });
});
// Seleciona a caixa de texto que receberá a resposta
const box = document.querySelector(".box");

// Seleciona o botçao que enviará a respsta
const enviar = document.querySelector(".enviar");

// Limpa a seleção
// function limpar(params) {
//   box.value = '';
// }

function checar(params) {
  if (box.value.toUpperCase() === "BRASIL") {
    box.classList.toggle("respostaAbertaCorreta");
    console.log("Resposta Correta");
  } else {
    box.classList.toggle("respostaAbertaErrada");
    console.log("Resposta Errada");
  }
  // limpar();
}
box.addEventListener("click", function (params) {
  this.classList.toggle("respostaAbertaCorreta", false);
  this.classList.toggle("respostaAbertaErrada", false);
});
enviar.addEventListener("click", checar);

console.log(box.value);
