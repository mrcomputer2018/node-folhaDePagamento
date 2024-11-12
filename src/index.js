const prompt = require('prompt-sync')();
const {cadastrarFuncionario} = require('./Funcionario');
const { imprimirRelatorioDePagemento } = require('./Pagamento');

console.log("Bem-vindo aa Sistema de Folha de Pagamentos")

let opcao = prompt("Digite o número correspondente a opção desejada: \n1 - Cadastrar Funcionário\n2 - Listar Funcionários\n3 - Calcular Folha de Pagamento\n4 - Sair\n")

switch (opcao) {
    case "1":
        console.log("\nCadastrar Funcionário")
        console.log("\nPreencha os campos abaixo:")
        cadastrarFuncionario();
        break;
    case "2":
        console.log("Listar Funcionários")
        break;
    case "3":
        console.log("Calcular Folha de Pagamento")
        break;
    case "4":
        console.log("Imprimir Relatorio de Pagamento")
        imprimirRelatorioDePagemento();
        break;
    default:
        console.log("Opção inválida")
        break;
}