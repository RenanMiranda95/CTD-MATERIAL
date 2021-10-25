


function soma() {
    let numeroUm = parseInt(document.getElementById("number1").value);
    let numeroDois = parseInt(document.getElementById("number2").value);
    let divResult = document.getElementById("result");

    return divResult.innerHTML = numeroUm + numeroDois;
}