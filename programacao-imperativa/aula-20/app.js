// import filtrarOpniao from "modulo";

const fs = require('fs');
const dados = JSON.parse(fs.readFileSync('./dados.json', 'utf-8'));

// const modulo = require('./modulo');

console.log()

// Imprime na tela a media de idade de pessoas que responderam Ótimo
// console.log(`A média de idade de pessoas que responderam Ótimo é ${modulo(dados, "Ótimo")} anos!`);

// Quantidade de pessoas que responderam Regular

// console.log(`A quantidade de pessoas que responderam Regular é ${filtrarOpniao(dados, 'Regular').length}`);

// Porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

// console.log(`${porcentagemPorOpniao(dados, 'Bom').toFixed()}% responderam bom!`);

// console.log(filtrarOpniao(dados, "Regular"));

