//Requisitando a importação do pacote prompt sync para entrada de dados via teclado
const entradaDados = require("prompt-sync")({sigint: true});

//Importação de módulos criados
const opMat = require("./operacoesMat");

// Esse algoritmo faz operações de soma com dois operandos. A entrada de dados é feita pelo usuario
// via teclado

let x , y, resultado;

x = parseInt(entradaDados("Digite o primeiro número:"));
y = parseInt(entradaDados("Digite o segundo número: "));

resultado = opMat.somar(x, y);

console.log("O resultado da soma é: \n");
console.log(resultado);