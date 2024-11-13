const prompt = require('prompt-sync')();
const { adicionarFuncionario, registrarHoras, localizarFuncionarioPorNome  } = require('./Funcionario');
const { imprimirRelatorioDePagemento } = require('./Pagamento');

console.log("Bem-vindo aa Sistema de Folha de Pagamentos")

let opcao = prompt("Digite o número correspondente a opção desejada: \n1 - Cadastrar Funcionário\n2 - Listar Funcionários\n3 - Calcular Folha de Pagamento\n4 - Sair\n")

switch (opcao) {
    case "1":
        console.log("\nCadastrar Funcionário")
        console.log("\n------------------------")
        console.log("\nPreencha os campos abaixo:")
        adicionarFuncionario ();
        break;
    case "2":
        console.log("\nRegistrar Horas Trabalhadas")
        console.log("\n------------------------")
        console.log("\nPreencha os campos abaixo:")
        const mome = prompt("\nDigite o nome do funcionário: ");
        const funcionario = localizarFuncionarioPorNome(nome.tolowerCase());

        if (!funcionario) {
            console.log("\nFuncionário não encontrado");
            break;
        }

        const horas = prompt("\nDigite a quantidade de horas trabalhadas: ");

        registrarHoras (funcionario.id, horas);
        break;
    case "3":
        console.log("\nListar Funcionários")
        console.log("\n------------------------")
        console.log("\nPLista de Funcionários:")
        break;
    case "4":
        console.log("\nCalcular Folha de Pagamento")
        break;
    case "5":
        console.log("\nImprimir Relatorio de Pagamento")
        imprimirRelatorioDePagemento();
        break;
    default:
        console.log("\nOpção inválida")
        break;
}