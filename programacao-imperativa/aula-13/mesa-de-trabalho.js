/*
A Função Conta, recebe parâmetros e cria um objeto em js, esse objeto mais tarde será convertido em
JSON para essas informações se comunicarem com outros sistemas
Parametros (Conta: número da conta, somente numeros, tipo:poupança ou corrente, saldo:valor apenas
    titular:nome completo do titular)
*/
function Conta(numero, tipo, saldo, titular)
{

    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;

    let contaBancaria = 
    {
        numeroConta: this.numero,
        tipoConta: this.tipo,
        saldoConta: this.saldo,
        titularConta:this.titular

    }

    return contaBancaria;

}

//Criando instancias para alguns clientes: 

let cliente1 = new Conta(5486273622, "Corrente",27771,	"Abigael Natte");
let cliente2 = new Conta(1183971869, "Poupança",8675	,"Ramon Connell");
let cliente3 = new Conta(9582019689, "Poupança",27363,	"Jarret Lafuente");
let cliente4 = new Conta(1761924656, "Poupança",32415,	"Ansel Ardley");
let cliente5 = new Conta(7401971607, "Poupança",18789,	"Jacki Shurmer");
let cliente6 = new Conta(630841470	, "Corrente",28776,	"Jobi Mawtus");
let cliente7 = new Conta(4223508636, "Corrente",2177	,"Thomasin Latour");
let cliente8 = new Conta(185979521	, "Poupança",25994,	"Lonnie Verheijden");
let cliente9 = new Conta(3151956165, "Corrente",7601	,"Alonso Wannan");
let cliente10 = new Conta(2138105881, "Poupança",33196,	"Bendite Huggett");

//Os comandos console abaixo imprime objetos
// console.log(cliente8);
// console.log(cliente1);
// console.log(cliente9);


// console.log("-----------------")
//O comando abaixo converte os Objetos em JSON e os imprime nesse formato

// console.log(JSON.stringify(cliente8));
// console.log(JSON.stringify(cliente1));
// console.log(JSON.stringify(cliente9));

//Criando uma lista para armazenar todos os clientes instanciados acima

let listaClientes = [cliente1,cliente2,cliente3,cliente4,cliente5,cliente6,cliente7,cliente8,cliente9];
// console.log(listaClientes);

// 6. o objeto do banco criará um método chamado consultarCliente que receberá um
// nome (titular) por parâmetro e deve pesquisar na lista de contas e retornar ao
// objeto do cliente que corresponde a esse nome inserido.

// Criação do objeto literal Banco

let banco = 
{
    contas:listaClientes,
    consulta: function consultarCliente(titular)
    {
        //Esse metodo verifica se o nome passado como parametro está associado a alguma conta 

        let clienteEncontrado = false;
        
        for(let i = 0; i < this.contas.length; i++)
        {
            if(titular == this.contas[i].titularConta)
            {
                this.clienteEncontrado = true;
                return this.contas[i];
            }
        }

        if(!this.clienteEncontrado)
        {
            return "Cliente pesquisado não consta na base de dados!";
        }
    }

    
}

function deposito(titular, valorDeposito)
{
    let resultadoConsulta = banco.consulta(titular);
    if(resultadoConsulta.titularConta == titular)
    {
        let saldo = resultadoConsulta.saldoConta = resultadoConsulta.saldoConta + valorDeposito;
        let mensagemDepositoSucess = "Depósito realizado, seu novo saldo é: " + "R$ " + saldo;
        return mensagemDepositoSucess;
    }else{
        let mensagemDepositoFail = "Depósito não realizado, pois a conta não pertence a nenhum cliente!";
        return mensagemDepositoFail;
    }
}


// console.log(deposito("Ansel Ardley", 150));

function saque(titular, valorSaque)
{
    let resultadoConsulta = banco.consulta(titular);
    let saldo = resultadoConsulta.saldoConta;
    if(resultadoConsulta.titularConta == titular)
    {
        if((resultadoConsulta.saldoConta - valorSaque) < 0)
        {
            let mensagemSaqueFail = "Fundos Insuficientes";
            return mensagemSaqueFail;
        }else
        {
            let mensagemSaqueSucess = "Saque feito com sucesso! Seu saldo atual é " + "R$ " + saldo;
            saldo = saldo - valorSaque;
           return mensagemSaqueSucess;
        }
    }else{
        let mensagemErro = "Saque não realizado, pois a conta não pertence a nenhum cliente!";
        return mensagemErro;
    }

}

console.log(saque("Jacki Shurmer", "300"));