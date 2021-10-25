// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// ● o número de homens.

// Alunos do grupo 1: Eduardo Russo, Guilherme Tourinho, Rafael Camargo e Renan Miranda

const fs = require('fs');
let arquivoJson = fs.readFileSync("./dados.json", "utf-8");
arquivoJson = JSON.parse(arquivoJson)

let maiorMenor = () => 
{
    let maiorAltura = 0;
    let menorAltura;

    for(let i = 0; i < arquivoJson.length; i++)
    {
        menorAltura = arquivoJson[i]["altura"];
        arquivoJson[i]["altura"] < menorAltura ? menorAltura = arquivoJson[i]["altura"] : "";

        arquivoJson[i]["altura"] > maiorAltura ? maiorAltura = arquivoJson[i]["altura"] : "";
    }

    return console.log(`Maior altura é ${maiorAltura} e a menor altura é ${menorAltura}`);
}

let mediaMulheres = () =>
{
    let contador = 0;
    let totalAlturaMulheres = 0;
    for(let i = 0; i < arquivoJson.length; i++)
    {
        if(arquivoJson[i]["sexo"] == "F")
        {
            contador++
            totalAlturaMulheres += arquivoJson[i]["altura"];
        }
 
    }

    return `A media de altura das mulheres é ${(totalAlturaMulheres / contador).toFixed(2)}`;

}

let numeroHomens = () =>
{
    let contador = 0;
    for(let i = 0; i < arquivoJson.length; i++)
    {
        if(arquivoJson[i]["sexo"] == "M")
        {
            contador++;
        }
    }

    console.log("Há " + contador + " homens!");
}



console.log(mediaMulheres())
console.log(maiorMenor());
numeroHomens();