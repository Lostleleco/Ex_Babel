//function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//   this.nome = nomeDoPokemon;
// this.tipo = tipoDoPokemon;
//}

//const pikachu = new Pokemon ("pikachu", "elétrico")

class Pokemon {
    nome = '';
    tipo = '';

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon
    }
    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }
}

const pikachu = new Pokemon('pikachu', 'elétrico');
pikachu.atacar('choque do trovão')
//pikachu.nome = 'pikachu';
//pikachu.tipo = 'elétrico'*/

console.log(pikachu)