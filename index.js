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

//Remova da lista o jogo Top Gear, utilizando lodash.

_.pullAt(games, 2);

console.log(games);