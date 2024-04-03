const chalk = require('chalk');
const inquirer = require('inquirer');

//Função principal que escuta

function main() {
    console.log("Olá")
    console.log(chalk.bgRed.white("Bem vindo ao questionário"))
    // Perguntar ao usuário seu nome   
    inquirer.prompt({
        name: 'name',
        message: 'Qual é o seu nome?'
    })
    //Promise - Javascript
    .then((nomeResponder) => {
        //Pergunta ao usuário sua idade 
        return inquirer.prompt({
            name: 'age',
            message: 'Quantos anos você tem?'
        })
        .then((idadeResponder) => {

            // Imprimir meensagem na tela
            console.log(chalk.bgBlue.black(`Olá, ${nomeResponder.name}! Você tem ${idadeResponder.age} anos!`))
        })
    })
}

main();