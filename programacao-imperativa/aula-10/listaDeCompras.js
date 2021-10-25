// Declarando a variavel indexada e populando-a:
let listaDeCompras = ["Feijão", "Arroz", "Leite", "Açucar", "Café"]

//Join()
//O join retorna uma string com a concatenação de todos os elementos de um array, podemos definir um separador
//como parametros

let concatenandoElementos = listaDeCompras.join(","); // Os itens serão separados por vírugula como inserido no parametro

console.log(concatenandoElementos);

//Pop()
// O pop deleta o ultimo elemento de um array

listaDeCompras.pop();

console.log(listaDeCompras);

//Push()
//Adicionando um elemento no ultimo index do array

listaDeCompras.push("Ovos");

console.log(listaDeCompras);

//Shift()
//Deletando o primeiro elemento do array

listaDeCompras.shift();
console.log(listaDeCompras);

//Unshift()
//Adicionando um elemento no array na primeira posição

listaDeCompras.unshift("Carne Bovina");
console.log(listaDeCompras);
