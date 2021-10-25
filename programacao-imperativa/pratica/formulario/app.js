// import { appendFileSync } from 'fs';

function armazenaDados(nome, email)
{
    this.nome = nome;
    this.email = email;

    let usuario =
    {
        nome: this.nome,
        email: this.email
    }

    let objeto = JSON.stringify(usuario);

    console.log("ola");

// return appendFileSync("./usuarios.json", objeto);

}

// armazenaDados("Renan", "email@email.com");