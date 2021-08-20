class Exemplo{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodo tipo função
    speak (){
    console.log(this.person);
    }

    set person(person){
        this.name = nome;
        this.age = age;
    }
}

let issoEUmaClasse = new Exemplo();

issoEUmaClasse.speak()

//set value
let setandoValores = new Exemplo();
setandoValores.person('renata', 22)
setandoValores.speak();

//rest operator
let arrTester = {name: 'aluno'};
let arrTesterNovo = {name: 'aluno'};

let arrStudents = [];

let usandoOSpread = [ ...arrStudents, arrTesterNovo ]

//resultado do spread

console.log('resuldado do spread', usandoOSpread)

console.log(arrTester);
console.log(arrTesterNovo);


console.log(arrTester);


let pessoa ={
    name: 'pessoa',
    age: 33
}

console.log( pessoa.age);
//pessoa.age= 22

console.log({...pessoa, stature: 1.70});

console.log({...pessoa, age: 22});
