const _ = require('lodash');

let games = [
    {
        nome: 'Street Fighter',
        ano: 1990
    },
    {
        nome: 'Mortal Kombat',
        ano: 1991
    },
    {
        nome: 'Top Gear',
        ano: 1992
    }
]

//Imprima a lista de jogos de trás pra frente, utilizando lodash.

let resultado;
resultado = _.reverse(games);

console.log(resultado);