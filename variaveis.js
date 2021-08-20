var nome = "vanessa araujo";
console. log(nome);
//todo codigo

nome = "elisama"
console.log(nome)

let nomeDaPessoa ="elisama"
console.log(nomeDaPessoa)
//escopo local

let idade = (value) => {
    let age = value;
    console.log (age)
}

idade(22);

//console.log(age);

const aluna = 'nadia';
console.log(aluna);

//aluna = "larissa"
//console.log(aluna); gera erro na const

//criando objeto
let pessoa = { //objeto chave e valor
    name: 'nadia', //string
    age: 32, //int tipo numerico inteiro
    stature: 1.73, //float numero fracionado
    isWoman: true, //borlean
}
 console.log(pessoa.name)

 //arrays, vetor, organizado por indice, inicia por indice 0

 const newArr = [1, 'nome', true, 2.2];
 console.log(newArr[1]);

 /*console.log(typeof Symbol())

 let estaVerificado = 'nome'

 console.log(!! estaVerificado)*/

 let estaVerificado = 'nome'
 console.log(!! estaVerificado)//faz validadção como borleando

 let sim = true;
 let nao = false;

 console.log(sim);

 //uso da negação na pratica

 const inscricao = (person) => {
    let woman = person.isWoman;

   /* if(!woman){
        console.log(`${person.name}desenvolvedor`)
    } else{
        console.log(`${person.name}desenvolvedora`)
    }*/
 

    !woman ? (console.log(`${person.name} Desenvolvedor`)) : (console.log(`${person.name} Desenvolvedora e tem ${person.age}`))

    woman && console.log(`Desenvolvedora`) //validação unica
}

inscricao (pessoa);
