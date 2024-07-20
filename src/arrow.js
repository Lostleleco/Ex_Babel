const minhaFuncao = () => "Diz olá";

const retornarUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
})

console.log (minhaFuncao())
console.log (retornarUmCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function () {
        this.velocidadeAtual -= 10;
        
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual)