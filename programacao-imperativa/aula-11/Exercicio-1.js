// 1) Repetir como um papagaio

for(let i = 0; i < 5; i++)
{
    console.log("Olá mundo");
}


// 2) Contando números ímpares

for(let i = 1; i <= 10; i+=2)
{
    console.log(i);
}

// 3) Criando a tabuada
//Multiplicação

console.log("Tabuada de Multiplicação");

for(let i = 1; i <=10; i++)
{
    console.log("------------");
    for(let idx = 1; idx <= 10; idx++)
    {
        console.log(i + " x " + idx + " = " + i*idx);
    }
}