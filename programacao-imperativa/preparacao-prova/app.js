const fs = require('fs');
const dados = require("./dados.json", "utf-8");
const texto = fs.readFileSync("./arquivo.txt", "utf-8");
const matematica = require("./modulo");
const app = matematica();

// metodo slice

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let frutas = ["melão","uva","melancia","manga","abacaxi","pêra"];
let alfabeto = ["a", "b", "c", "d", "e", "f", "g"];

// Retorna uma fatia do array, é passado dois parametros, ambos opcionais

// Retorna os 3 ultimos elementos do array numeros
// console.log(numeros.slice(-3));

// Retorna os elementos do indice 2 em diante
// console.log(frutas.slice(3, 5));

//Retornando os dois ultimos elementos de um json
// console.log(dados.slice(-2));



//Se não incluir nenhum parametro é retornado todo o valor
// console.log(dados.slice());

// Join junta todos os elementos em um array 
//Split converte uma string em array

// let novoArray = texto.split(" ");

// console.log(novoArray);


console.log(app.soma(3, 2));