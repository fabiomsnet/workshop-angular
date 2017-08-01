// Execução sincrona e assincrona

// Exemplo sincrono

let soma = somar(1, 2);
let divisao = dividir(10, 2);

console.log('Soma: ', soma);
console.log('Divisão: ', divisao);

function somar(a, b) {
    return a + b;
}

function dividir(a, b) {
    return a / b;
}