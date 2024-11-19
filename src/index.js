const prompt = require('prompt-sync')();
const { adicionarFuncionario, registrarHoras, localizarFuncionarioPorNome  } = require('./Funcionario');
const { imprimirRelatorioDePagemento } = require('./Pagamento');
const { calcularSalarioMensal } = require('./Salario');

console.log("Bem-vindo aa Sistema de Folha de Pagamentos")

let continuar = "s";

while (continuar === "s" || continuar === "S") {

    let nome = '';
    let funcionario = [];
    let funcionarioFilter = [];

    const opcao = prompt("Digite o número correspondente a opção desejada: \n1 - Cadastrar Funcionário\n2 - Registrar Horas Trabalhadas\n3 - Listar Funcionários\n4 - Calcular Folha de Pagamento\n5 - Imprimir Relatorio de Pagamento\n6 - Sair\n")

    switch (opcao) {
        case "1":
            console.log("\nCadastrar Funcionário")
            console.log("\n------------------------")
            console.log("\nPreencha os campos abaixo:")
            funcionario = adicionarFuncionario ();
            break;
        case "2":
            console.log("\nRegistrar Horas Trabalhadas")
            console.log("------------------------")
            console.log("Preencha os campos abaixo:")
            nome = prompt("\nDigite o nome do funcionário: ");
            funcionarioFilter = localizarFuncionarioPorNome(nome.toLowerCase());

            if (!funcionarioFilter) {
                console.log("\nFuncionário não encontrado");
                break;
            }

            const horas = prompt("\nDigite a quantidade de horas trabalhadas: ");

            registrarHoras (funcionarioFilter.id, horas);
            break;
        case "3":
            console.log("\nListar Funcionários")
            console.log("\n------------------------")
            console.log("\nLista de Funcionários:")
            break;
        case "4":
            console.log("\nCalcular Folha de Pagamento")
            console.log("\n------------------------")
            console.log("Preencha os campos abaixo:")

            nome = prompt("\nDigite o nome do funcionário: ");
            funcionarioFilter = localizarFuncionarioPorNome(nome.toLowerCase());

            if (!funcionarioFilter) {
                console.log("\nFuncionário não encontrado");
                break;
            }

            const salario = calcularSalarioMensal(funcionarioFilter);

            console.log(`\nO salário mensal do funcionário ${funcionarioFilter.nome} é R$ ${salario}`);

            break;
        case "5":
            console.log("\nImprimir Relatorio de Pagamento")
            imprimirRelatorioDePagemento();
            break;
        case "6":
            console.log("\nSair")
            continuar = "n";
            break;
        default:
            console.log("\nOpção inválida")
            break;
    }

    continuar = prompt("\nDeseja continuar? (s/n) ")
}