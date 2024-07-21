"use strict";

var minhaFuncao = function minhaFuncao() {
  return "Diz olá";
};
var retornarUmCarro = function retornarUmCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
console.log(minhaFuncao());
console.log(retornarUmCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);