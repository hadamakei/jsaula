// = operador de atribuição, atribui valor a uma variavel
// == operador de comparação, compara valores
// === compara valor e tipo, estritamente igual
// ! nega ele mesmo
// != nega o valor
//!== nega estritamente

let a = 12;
let b = 12;
console.log(a == b);

b = '12';
console.log (a === b);

b = '12';
console.log(a !== b);
console.log(a != b);

// > maior
// >= maior igual
//<= menor igual
//< menor

console.log (1 < 2);
console.log (1 > 2);
console.log (1 >= 2);
console.log (1 <= 2);

// || compara 2 objeto

let isWoman = true;
let isMan = false;

isWoman ? console.log('sim') : console.log('nao')

// && compara um ou outro

isWoman || isMan ? console.log('sim') : console.log('nao')

isWoman && isMan ? console.log('sim') : console.log('nao')

isWoman || !isMan ? console.log('sim') : console.log('nao')

