//refatorando
class personRefec{
    constructor({nome, idade,altura, peso}){
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
        this.nome = nome;
    }

    //getter
    get result(){
        return this.concatResult();
    }

    imc(){
        return (this.peso / (this.altura * this.altura)).toFixed(2)
    }

    calculaAno(){
        let date = new Date();
        return ( date.getFullYear() - this.idade);
    }

    concatResult(){
        return{
            imc: this.imc(),
            anoDeNasc: this.calculaAno(),
            nome: this.nome,
        }
    }

    //setters
    //set valor (){

   // }
}

let testandoClase = new personRefec ({ altura:1.75, peso:80, idade: 30, nome: 'ana'});
console.log('classe', testandoClase.result)

let alunos = [
    {name: 'elisama'},
    {name: 'lorena'}
]

alunos.map( val => console.log(val.name))