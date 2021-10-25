// 1) O Que os Codigos Retornam

// 1 - Retorna undefined, pois a o algoritmo pede para exbir o indice 5 do array
// sendo que o maior indice dele é 4

// 2 - Retorna a String SpiderMan. grupoDeAmigos é uma matriz!

// 3 - Retorna o valor “una string qualquer”

//2) Função imprimirReverso()

// let listaStream = ["Netflix", "Amazon", "Disney Plus", "Hbo Max"];

// function imprimirInverso(array)
// {
//     let idx = array.length - 1;
//     for(idx; idx >= 0; idx--)
//     {
//         console.log(array[idx]);
//     }
// }

// imprimirInverso(listaStream);

// function inverter (array)
// {
//     let novoArrayInvertido = [];
//     let idx = array.length - 1;
//     for(idx; idx >= 0; idx--)
//     {
//         novoArrayInvertido.push(array[idx]);
//     }

//     return novoArrayInvertido;
// }

// console.log(inverter(listaStream));


// let numeros = [1, 4, 5, 6];

// function somar(array)
// {
//     let soma = 0;
//     soma += array[0];
//     soma += array[1];
//     soma += array[2];
//     soma += array[3];

//     return soma;
// }

// console.log(somar(numeros));

// let saudacao = ["o", "l", "a", "m","u","n","d","o"];

// function join(array)
// {
//     let varJoin = "";
//     let index = 0
//     for(index; index < array.length; index++)
//     {
//         varJoin += array[index];
//     }

//     return varJoin;
// }


// console.log(join(saudacao));


let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

function maiusculo(array)
{

    array[0] = array[0].toUpperCase();
    array[1] = array[1].toUpperCase();
    array[2] = array[2].toUpperCase();
    array[3] = array[3].toUpperCase();
    array[4] = array[4].toUpperCase();

}

maiusculo(filmes);

// console.log(filmes);

let maisFilmes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

function addArrays(array1, array2)
{
    return array1 + array2;
}

console.log(addArrays(filmes, maisFilmes))