const fs = require('fs');

const modulo = require('./funcao');

let dados = JSON.parse(fs.readFileSync('./dados.json', 'utf-8'));

// Pegando a menor altura

let menorAltura = () =>
{
    let menorValor = dados[0]['altura'];

    dados.forEach(element => {
        return element.altura < menorValor ? menorValor = element.altura : '';
    });

    return menorValor;
}

// Pegando a maior altura
let maiorAltura = () => 
{
    let maiorValor = dados[0]['altura'];
    dados.forEach((element) =>
    {
        return element.altura > maiorValor ? maiorValor = element.altura : '';
    });

    return maiorValor;
}

// Altura total de mulheres
let totalAlturaMulheres = dados.reduce((valorAnt, elemento) => valorAnt + elemento.altura, 0);

// Media de altura das mulheres (total de altura - numero de mulheres)
let mediaAlturaMulheres = () =>
{
    const quantidadeMulheres = numeroMulheres;
    const somaAlturaMulheres = totalAlturaMulheres;

    return somaAlturaMulheres / quantidadeMulheres.length;
};

//Numero de mulheres
let numeroMulheres = dados.filter((elemento) => elemento.sexo == 'F');

//Numero de Homens
let numeroHomens = dados.filter((elemento) => elemento.sexo == 'M');

console.log(maiorAltura());
