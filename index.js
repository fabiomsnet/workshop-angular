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

/* Procure na documentação do lodash o método responsável 
   e ordene a lista de jogos em ordem crescente de nome.*/

let resultado;
resultado = _.orderBy(games, ['nome'], ['asc']);

console.log(resultado);