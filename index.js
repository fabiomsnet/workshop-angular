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

// Precisa buscar e printar os anos maiores ou iguais a 1991

let resultado;
resultado = _.filter(games, (jogo_atual) => {
    return jogo_atual.ano >= 1991; 
})

console.log(resultado);