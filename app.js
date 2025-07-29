/*****************************************************************************
 * Objetivo: Apresentar comandos basicos do node.js
 * Autor: Alex Henrique Da Cruz Gomes
 * Data: 29/07/2025
 * Versao: 1.0
 * 
 *****************************************************************************/

//Comentário em linha
/*
   Comentário em bloco
*/

//Import da classe readline do node.js
var readline = require(`readline`)

//Cria uma interface de comunicacao com o terminal para entrada e saida de dados
//interagindo com o usuario
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('digite seu nome:', function(nome){

    var nomeUsuario = nome

    //validacao de entrada de dados vazio
    if(nomeUsuario == ''){
        console.log('ERRO BILADA: Não foi possivel processar a requisição, campo não preenchido')
    }else{

        //String() -> converte o conteudo de uma variavel em MAIUSCULO
        //toUpperCase() -> converte o conteudo de uma variavel em maiusculo
        console.log('O nome digitado foi: ' + String(nomeUsuario).toUpperCase())
        console.log(nome)
    }
})

/*
//Console.log permite escrever um conteudo de uma string ou objeto no terminal
console.log('aula 01 de node.js');

var nome = 'Alex Henrique da Cruz Gomes'

//exemplo de concatenacao de conteudos (String + variavel)
console.log('O nome digitado foi: ' + nome)


//concatena usando a crase no lugar da aspas para colocar a variavel dentro do bloco
console.log(`O nome digitado foi: ${nome}`)

//typeof() -> Retorna o tipo de dados de uma variavel ou objeto
console.log(typeof(nome))
*/