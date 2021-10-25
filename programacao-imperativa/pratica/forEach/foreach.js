// Executa uma função em cada elemento de um array

const fs = require('fs');
let file = fs.readFileSync('./alunos.json', 'utf-8');

file = JSON.parse(file);

// Usando o Foreach para percorrer os itens da lista

// Quantos elementos há nesse JSON

// console.log(file.length);

// Imprimindo o nome dos alunos com idade inferior a 30 anos

// file.forEach(elemento =>
// {
//     if(elemento.idade < 30) console.log(elemento.nome);
// });

// Imprima o nome e o index de cada elemento do JSON

// file.forEach((elemento, index) =>
// {
//     console.log(`${elemento.nome} tem o índice ${index} no Array`);
// }
// );

// console.log(file);

let array = [1,2,3,4,5,6];
let array2 = [9,8,7,6,5,4];

let novoArray;

console.log(array.find("1"));

// novoArray = array.concat(array2);

// console.log(novoArray);