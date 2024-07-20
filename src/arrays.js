//Exemplo1

const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0 ; i < redesSociais.length; i++){
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}
//Exemplo2

redesSociais.forEach(function (nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})
//Exemplo3

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map (function ( itemAtual) {
    itemAtual = {
        nome: itemAtual ,
        curso: 'Frontend'
    }
    return itemAtual
})

console.log(alunos2)

const Paula = alunos2.find (function (item) {//exepressao de busca
    return item.nome == 'Paula'
})
console.log(Paula)//mensagem de retorno

//Exemplo4
const numeros = [1 , 2 , 3 , 4 ,5]
const dobroDosNumeros = numeros.map (function(numeroAtual) {
    return numeroAtual * 2;
})
console.log (dobroDosNumeros)