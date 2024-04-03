const chalk = require('chalk');
const inquirer = require('inquirer');
//Função para somar 2 números
function somarNumeros(num1, num2) {
    return num1 + num2;
}

function subtrairNumeros(num1, num2){
    return num1 - num2;
}

function multiplicarNumeros(num1, num2){
    return num1 * num2;
}

function dividirNumeros(num1, num2){
    return num1 / num2;
}
function main() {
    console.log(chalk.bgRed.white("Olá, seja bem vindo"));
    // Perguntar ao usuário dois números 
    inquirer.prompt([

        {
            name: 'operacao',
            message: 'Que operação deseja realizar? (+, -, *, /)'
        },
        {
            name: 'numero1',
            message: 'Digite o primeiro número'
        },
        {
            name: 'numero2',
            message: 'Digite o segundo número'
        }
    ])
    // Promise
    .then((resposta) => {
        //Converter os números para valores numéricos

        const numero1 = Number(resposta.numero1);
        const numero2 = Number(resposta.numero2);
        const operacao = resposta.operacao;

        // Calcular

        if(operacao === '+'){
            const resultado =  somarNumeros(numero1, numero2);

            //Imprime
            console.log(chalk.bgRed(`A soma de ${numero1} e ${numero2} é igual à ${resultado}`))
        }
        if(operacao === '-'){
            const resultado = subtrairNumeros(numero1, numero2);

            console.log(chalk.bgRed(`A soma de ${numero1} e ${numero2} é igual à ${resultado}`))
        }
        if(operacao === '*'){
            const resultado = multiplicarNumeros(numero1, numero2);

            console.log(chalk.bgRed(`A soma de ${numero1} e ${numero2} é igual à ${resultado}`))
        }
        if(operacao === '/'){
            const resultado = dividirNumeros(numero1, numero2);

            console.log(chalk.bgRed(`A soma de ${numero1} e ${numero2} é igual à ${resultado}`))
        }     
    })
}

main();




