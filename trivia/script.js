const botaoCorreto = document.getElementById("RespostaCorreta");

botaoCorreto.addEventListener("click", function () {
  this.classList.toggle("botao-clicado");
});

const botoes = document.querySelectorAll("button");

botoes.addEventListener("click", function () {
  this.classList.toggle("botao-clicado-errado");
});
