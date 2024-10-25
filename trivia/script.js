const botaoCorreto = document.getElementById("RespostaCorreta");

botaoCorreto.addEventListener("click", function () {
  this.classList.toggle("botao-clicado");
});

const botoes = document.querySelector(".errado");

botoes.addEventListener("click", function () {
  this.classList.toggle("botao-clicado-errado");
});
