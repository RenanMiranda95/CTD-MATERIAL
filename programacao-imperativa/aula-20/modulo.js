// a média das idades das pessoas que responderam ótimo;


// A função abaixo filtra pela opniao que é colocada no segundo parametro:

let filtrarOpniao = (array, resposta) =>
{
    let filtro = array.filter((element) => element.opniao == resposta);

    return filtro;
}

//A função abaixo retorna a média de idade das pessoas, aplicando o filtro de opniao

let mediaIdadePorOpniao = (array, opniao) =>
{
    let arrayFiltrado = filtrarOpniao(array, opniao);

    let media = arrayFiltrado.reduce((valAnt, valAtual) => valAnt + valAtual.idade, 0);

    return media / arrayFiltrado.length;
}

// Porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
let porcentagemPorOpniao = (array, opniao) =>
{
    let filtro = filtrarOpniao(array, opniao);

    return (filtro.length * 100) / array.length;
}
