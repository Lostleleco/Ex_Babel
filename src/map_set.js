let meuMap = new Map ();
meuMap.set("nome", "Alex");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome)

console.log (meuMap.size)

//set

const cpfs = new Set ();

cpfs.add('00785716009')
cpfs.add('23974937056')
cpfs.add('31131279042')

console.log(cpfs);

// para nao duplicar itens

const array = ['Alex soares','Jose Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Alex Soares']

const arrayComoSet= new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);