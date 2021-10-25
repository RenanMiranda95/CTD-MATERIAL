const alicia = [23, 69, 32];
const bob = [12, 67, 43];


function encontrarGanhador(a, b) {

    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;

    let contador = 0;

    for(contador; contador < 3; contador++)
    {
        if(a[contador] > b[contador])
        {
            // Vitoria do primeiro participante
            pontosPrimeiroParticipante++;
        }else if(a[contador] < b[contador])
        {
            // Vitoria do segundo participante
            pontosSegundoParticipante++;
        }
    }

    if(pontosPrimeiroParticipante > pontosSegundoParticipante)
    {
        console.log("O ganhador é o primeiro participante!!!");
    }else if(pontosPrimeiroParticipante < pontosSegundoParticipante)
    {
        console.log("O ganhador é o segundo participante!!!");
    }else
    {
        console.log("Empatou!!! :|")
    }

}

// encontrarGanhador(alicia, bob);


// Bônus (Atividade Extra)

// Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve
// imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
// ● Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido,
// você deve exibir a string "Digital" em vez do número.
// ● Se o número a ser impresso for um múltiplo do segundo parâmetro inserido,
// você deve exibir a string "House" em vez disso.
// ● Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você
// deve exibir a string "Digital House" em vez do número.

function digitalHouse(a, b)
{
    for(let contador = 1; contador <= 100; contador++)
    {
        if(contador % a == 0)
        {
            console.log("Digital");
        }else if(contador % b == 0)
        {
            console.log("House");
        }else if((contador % a == 0) && (contador % b == 0))
        {
            console.log("Digital House");
        }else{
            console.log(contador);
        }
    }
}

// digitalHouse(2, 5);

// somaArray()... Reloaded
// Vamos pegar o exercício sumArray() que fizemos na classe arrays, mas desta vez
// vamos modificá-lo para que ele possa receber um array de números de qualquer
// quantidade de elementos.
// Se você não se lembrar da instrução original:
// 4
// Você deve criar uma função somaArray que aceita uma matriz de números e retorna
// a soma de todos eles.

let arrayNumeros = [1, 4, 5, 9, 10, 40, 30, 100];
let soma = 0;

function somaArray(array)
{
    for(let i = 0; i < array.length; i++)
    {
        soma += array[i];
    }

    return soma;
}

// console.log("Valor da soma do Array é: " + somaArray(arrayNumeros));

// JOIN

let arrayJoin = ["O", "l", "á", " ", "M", "u", "n", "d", "o","!"];
let arrayJoin2 = ["D", "e", "v", "H", "o", "u", "s", "e"];
let concatenar = "";

function join(array)
{
    for(let i = 0; i < array.length; i++)
    {
        concatenar += array[i];
    }

    console.log(concatenar);
    concatenar = "";
}

join(arrayJoin);
join(arrayJoin2);
