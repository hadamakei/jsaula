function calculoImc(altura, peso){
    console.log((peso / (altura * altura)).toFixed(2))
}

calculoImc(1.93, 92);

let funcaoArrow = (altura, peso) => {
    console.log((peso / (altura * altura)).toFixed(2))
}

funcaoArrow(1.70, 75);

const product = {
    name: 'iphone',
    price: 6000,
    discount: 5,
    finalPrice: function(){
       let result = (this.price - (this.price * this.discount)/ 100);
       return Intl.NumberFormat('pt-Br', {
            style: 'currency', 
            currency: 'BRL' }).format(result);
    }
}
console.log(product.finalPrice());


const queDiaeHoje = new Date();
//console.log(queDiaeHoje.toDateString());
console.log(new Intl.DateTimeFormat('pt-Br').format(queDiaeHoje));

