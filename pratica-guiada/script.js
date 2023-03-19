// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!
function number (num1, num2){
    const soma = num1 + num2;
    return soma;
};
console.log(number(2,6));

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.
function comparacao (number1, number2){
    const maiorIgual = number1 <= number2;
    return maiorIgual;
};
console.log(comparacao(2,3));
//c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.
function par (number){
    const parOuImpar = number % 2 === 0;
    return parOuImpar;
};
console.log(par(7))
//d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.
function salarioComDesconto (salario){
    const salarioLiquido = salario *  (10/100);
    return salario - salarioLiquido;
};
console.log(salarioComDesconto(9000));
//Exercício 3
function somar (numero1, numero2){
    const soma0 = numero1 + numero2;
    return `O resultado da soma é ${soma0} :)`;
};
function subracao (numero1, numero2){
    const subracao0 = numero1 - numero2;
    return `O resultado da subtração é ${subracao0} :)`;
};
function multiplicacao (numero1,numero2){
    const multiplicacao0 = numero1 * numero2
    return `O resultado da multiplicação é ${multiplicacao0} :)`;
};
function divisao (numero1, numero2){
    const divisao0 = numero1 / numero2;
    return `O resultado da divisão é ${divisao0} :)` ;
};

const digiteNumber1 = parseInt(prompt("Digite um numero"));
const digiteNumber2 = parseInt(prompt("Digite outro numero"));


console.log(somar(digiteNumber1,digiteNumber2));
console.log(subracao(digiteNumber1,digiteNumber2));
console.log(multiplicacao(digiteNumber1,digiteNumber2));
console.log(divisao(digiteNumber1,digiteNumber2));