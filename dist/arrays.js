"use strict";

//Exemplo1

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
//Exemplo2

redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
//Exemplo3

var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'Frontend'
  };
  return itemAtual;
});
console.log(alunos2);
var Paula = alunos2.find(function (item) {
  //exepressao de busca
  return item.nome == 'Paula';
});
console.log(Paula); //mensagem de retorno

//Exemplo4
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);