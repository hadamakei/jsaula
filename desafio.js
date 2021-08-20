/*let ano = (2021, idade) => {
    console.log( 2021 - idade)
}*/


const pessoaA = {
    nome: 'ana',
    peso: 65,
    altura: 1.70,
    idade: 20,
    IMC: function () {
        console.log((this.peso/(this.altura * this.altura)).toFixed(2));
      
    }
    
    nascimento: function () {
        console.log(2021 - this.idade);
    }

}

const pessoaB ={
    nome: 'bia',
    peso: 45,
    altura: 1.50,
    idade: 25
}

/*function IMC (altura, peso) {
    console.log((peso / (altura * altura)).toFixed(2))
}

function ano() {
    console.log(2021 - idade)
}*/

console.log(pessoaA.IMC());