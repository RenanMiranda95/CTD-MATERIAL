// MAP (Devolve um novo array como resultado)
// Pode receber três argumentos -> Valor atual, indice do elemento e o array completo

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Retorno o quadrado de cada elemento do array

let novoArray = numeros.map((element) =>
{
    return element ** 2
});

// console.log(novoArray);

// Retornando o valor do elemento somado ao indice dele

let indiceMaisElemento = numeros.map((element, index) =>
{
    return element + index;
});

// console.log(indiceMaisElemento);

// Metodo FILTER (também retorna um novo array com as condições filtradas)
// Seus parametros também sao elemento, index e array

// Função abaixo retorna apenas quem é impar

let impar = numeros.filter((elemento) =>
{
    return elemento % 2 != 0 ? elemento : '';
});

// console.log(impar);

// REDUCE é o unico que percorre o array e retorna um único valor
// Recebe 4 parametros : acumulador, valor atual, indice atual e array

// A função abaixo faz a soma dos valores do array

let somaArray = numeros.reduce((valorAnterior, elementoAtual) => valorAnterior + elementoAtual , 0 );

// console.log(somaArray);

//Mais metodos de Array

