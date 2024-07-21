//rest

function somar () {
   let soma = 0 ;

   for (let i = 0 ; i< arguments.length; i++){
    soma += arguments[i]
   }
    return soma ;
}
console.log (somar(10, 20, 30))

//utilizando a mesma funcao com rest operator

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20 , 30))

//spread

const numeros =[1, 2 , 3 ,4]
console.log(...numeros)

const timesDeFutebolDeSp = ['santos','palmeiras','bragantino','sao paulo'];
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo','fluminense'];

const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
console.log(timesDeFutebol)

