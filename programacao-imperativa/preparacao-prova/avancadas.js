//Importar modulo dados.json
const modulo = require('./modulo');
const dados = require('./dados.json');

// JOIN -> Junta todos os elementos de um array em uma string
//SPLIT -> Junta todos os elementos de uma string em um array

let frase = ["melao","e","melancia","são","muito","bom"];

//Se eu omitir ele vai separar com virgulas
// console.log(frase.join(" "));

//Função que acessa um JSON e refina a frase dos dados de cada objeto nele existente

// dados.forEach((element) => console.log(`${element.nome} tem ${element.idade} anos de idade!`));

//USO DE SPLIT

let paragrafo = "o Rato roeu a roupa do rei de roma e a rainha mandou remendar!";

// console.log(paragrafo.split());

//SLICE -> indice final é opcional

let numbers = 
[
 "one", "two", "three", "four", "five"
];

// console.log(numbers.slice(3));


// Pegando os 3 ultimos
// console.log(numbers.slice(-3));

// Pegando do indice 2 ao 3
// console.log(numbers.slice(2, 3));

//usando limitador negativo

// console.log(numbers.slice(2, -1));

// ------------------------------

//METODO SPLICE(adicionando novos elementos enquanto remove elementos antigos.)

let candidatos = 
[
    "Renan", "Lucas", "Maria", "Diego", "Laís", "Amanda", "Luiza"
]

//Retorna uma lista de elementos removidos
// console.log(
//     candidatos.splice(2, 1, "Alan", "Galdino", "Prego", "Bill Gates", "Mark")
// );

// console.log(candidatos);

// Removendo elemento do indice 2 e escrevendo drum

// console.log(candidatos.splice(2, 1, "drum"));

// console.log(candidatos);

// ------------------------------

// .SORT

// let vogais = ['a', 'b', 'x','B','A'];

// console.log('A'.charCodeAt());

// console.log(vogais.sort());

// Tentando ordenar a lista de candidatos usada na tarefa anterior
//Nesse caso estaria em ordem alfabetica , pois os nomes estão com letras maiusculas

// console.log(candidatos.sort());

// candidatos = 
// [
//     "renan", "Lucas", "Maria", "diego", "Laís", "amanda", "Luiza"
// ];

let maisNumeros = 
[
    5, 3, 17, 10, 6, 0, 8, 2, 44, 9, 20
];

// Total de elementos do array
// console.log(maisNumeros.length);

// console.log(maisNumeros.sort());

// let ordenacao = maisNumeros.sort((a, b) => -1);

// console.log(ordenacao);


//MODULOS

console.log(soma(1, 2));
console.log(subtrair);