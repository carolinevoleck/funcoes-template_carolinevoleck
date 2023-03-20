// Resolva o Exercício de Fixação!
//a) Declare uma função que imprima Olá, [SEU NOME]!. Chame esta função.
function meuNome ()  {
    const nome = "Carol";
    return `Olá, meu nome é ${nome}`;
}
console.log(meuNome());

//b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.
function tabuada (numero) {
    for ( let i = 1; i <=10; i ++){
        
        console.log(numero + " x " + i + " = " + numero*i);
    }
}
tabuada(7)



