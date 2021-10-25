// 1. Programa em Javascript que mostra os números ímpares
// Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.

console.log("Exercicio 1");
console.log("-----------------");

let contador = 1;

while(contador <= 100)
{
    console.log(contador);
    contador += 2;
}

// 2. Programa em Javascript que mostra os números pares
// Escreva um aplicativo em Javascript que mostre todos os números pares de 1 até 100.

contador = 1;

console.log("Exercicio 2");
console.log("-----------------");

while(contador <= 100)
{
    if(contador % 2 == 0)
    {
        console.log(contador);
    }
    contador++;
}

// 3. Programa em Javascript que mostra os números pares e ímpares 
// Escreva um aplicativo em Javascript que recebe um número inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.

console.log("Exercicio 3");
console.log("-----------------");

let numeroRecebido = 39;
contador = 1;

while(contador <= numeroRecebido)
{
    if(contador % 2 == 0)
    {
        console.log(contador + " é par!");
    }else{
        console.log(contador + " é Ímpar!");
    }
    contador++;
}

// 4. Programa em Javascript que calcula a média das notas de uma turma
// Escreva um programa que pergunte ao usuário quantos alunos tem na sala dele.
// Em seguida, através de um laço while, pede ao usuário para que entre com as notas de todos os alunos da sala, um por vez.
// Por fim, o programa mostra a média aritmética da turma.

console.log("Exercicio 4");
console.log("-----------------");

const entradaDados = require("prompt-sync")({sigint: true});
contador = 1;
let numeroAlunos;
let media;
var notas = 0;

numeroAlunos = parseInt(entradaDados("Digite o número de alunos desta sala: "));

while(contador <= numeroAlunos)
{
    notas += parseFloat(entradaDados("Digite a nota do " + contador + "º" + "aluno(a)"));
    contador++;

}

console.log("A média dessa turma é: " + notas/numeroAlunos);




