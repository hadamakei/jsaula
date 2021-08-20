let pessoas = [
    {
        nome:'nadia', 
        idade: 17
    },
    {
        nome: 'chauana',
        idade: 23
    },
]

console.log(pessoas[0]);
console.log(pessoas[1]);

let filtrando = pessoas.filter( value => value.idade >= 18)

console.log(filtrando)

let mapeando = pessoas.map( (pessoa, index) => console.log('usando map', pessoa.nome, index));
mapeando

let procura = pessoas.find (pessoa => pessoa.nome === 'chauana')
console.log(procura)

let calcula = (valor, soma) => valor.idade + soma.idade;
let reducao = pessoas.reduce (calcula)
console.log('reduce', reducao);