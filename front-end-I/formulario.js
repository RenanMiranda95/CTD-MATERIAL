
// function capturarDados()
// {
//     let nome = document.getElementById("nome").value;
//     let email = document.getElementById("email").value;
//     let nascimento = document.getElementById("data_nasc").value;

//     armazenarDados(nome, email, nascimento);

//     console.log("Olá Renan")
// }


// function armazenarDados(nome, email, nascimento)
// {
//     let fs = require('fs');

//     this.nome = nome;
//     this.email = email;
//     this.nascimento = nascimento;

//     let usuario =
//     {
//         nome: this.nome,
//         email: this.email,
//         nascimento: this.nascimento
//     }

//     usuario = JSON.stringify(usuario);

//     console.log("2 função")

//     return fs.appendFileSync("formulario.json", usuario);


// }

const fs = require('fs');

function ArmazenarUsuario(nome, email, nascimento)
{

    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;

    let dadosUsuarios = 
    {

        nome: this.nome,
        email: this.email,
        nascimento: this.nascimento

    }

    dadosUsuarios = JSON.stringify(dadosUsuarios);

    return fs.appendFileSync("formulario.json", dadosUsuarios);
     
}

ArmazenarUsuario("Renan", "renanmirandae@gmail.com","28/02/1995");











