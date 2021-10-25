const dados = require("./dados");

// Filtrando por sexo masculino

let homens = dados.filter((dado) => dado.sexo == "M");

console.log(homens.length);