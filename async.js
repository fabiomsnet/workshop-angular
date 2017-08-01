// Execução sincrona e assincrona

//Exemplo assincrono

console.log('loading..');

somar(2, 2).then((soma) => {
    console.log('Soma: ', soma);
    dividir(soma, 2)
    .then((divisao) => {
        console.log('Dividir: ', divisao);
    })
    .catch((e) => {
        console.log('erro ao dividir');
    })
});

function somar(a, b) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let resultado = a + b;
            resolve(resultado);
        }, 10 * 1000);

    });
}

function dividir(a, b) {
    return new Promise((resolve, reject) => {
        let resultado = a / b;

        if (resultado <= 2) {
            reject('Resultado incorreto');
        }else{
            resolve(resultado)
        }
    })
}