// Você deve criar uma função chamada propriedadeUnica que recebe uma array de
// objetos como parâmetro e uma string. Você deve devolver um novo array de objetos,
// tendo apenas a propriedade que foi passada como string.
// exemplo:
// let array = [ { nome: &quot;Lean&quot;, idade: 27 }, { nome: &quot;Eze&quot;, idade: 49} ]

// propriedadeUnica(array, &quot;idade&quot;) deve retornar [ { idade: 27 }, { idade: 49 } ]
// propriedadeUnica(array, &quot;nome&quot;) deve retornar [ { nome: &quot;Lean&quot;}, { nome: &quot;Eze&quot; } ]


let alunos = [{nome: "Marcos", matricula: 334477, idade: 29},
            {nome: "Wiliam", matricula: 70934, idade: 18},
            {nome: "Laís", matricula: 6786756, idade: 22},
            {nome: "Lucas", matricula: 996747, idade: 44},
            {nome: "Amanda", matricula: 616521, idade: 50}]

function propriedadeUnica(array, chave)
{
    this.array = array;
    this.chave = chave;

    let novoArray = [];

    for(let i = 0; i < this.array.length; i++)
    {
        novoArray.push({[this.chave]: this.array[i][this.chave]});
    }
    
    return novoArray;
}

// console.log(propriedadeUnica(alunos, "matricula"));


// Calculadora de notas
// Crie o objeto do aluno,que consistirá nas seguintes propriedades básicas:
// ● número
// ● Número do arquivo
// ● Lista de notas
// Gostaríamos de calcular a média do aluno e se ela é aprovada com base em uma nota
// de aprovação que será dada. Para este exercício vamos deixar você pensar sobre
// todos os métodos e propriedades que podem ser necessários para que nosso
// programa funcione corretamente da maneira solicitada.

let aluno2 = 
{
    numero:,
    numeroArquivo:,
    listaNotas
}

function mediaAluno()
{
    
}