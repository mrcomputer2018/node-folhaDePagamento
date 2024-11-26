import Funcionario from "./classes/Funcionario";
import HoraTrabalhada from "./classes/HoraTrabalhada";
const prompt = require('prompt-sync')();

console.log("Bem-vindo aa Sistema de Folha de Pagamentos")

let continuar = "s";

while (continuar === "s" || continuar === "S") {

    const opcao = prompt("Digite o número correspondente a opção desejada: \n1 - Cadastrar Funcionário\n2 - Registrar Horas Trabalhadas\n3 - Listar Funcionários\n4 - Calcular Folha de Pagamento\n5 - Imprimir Relatorio de Pagamento\n6 - Sair\n")

    switch (opcao) {
        case "1":
            console.log("\nCadastrar Funcionário")
            console.log("\n------------------------")
            console.log("\nPreencha os campos abaixo:")

            const nome = prompt("Digite o nome do funcionário: ");
            const cargo = prompt("Digite o cargo do funcionário: ");
            const taxaHoraria = +prompt("Digite a taxa horária do funcionário: ");
            
            const funcionario = new Funcionario(nome, cargo, taxaHoraria);
            
            console.log(funcionario.getDetalhesFuncionario());

            console.log("\n\nFuncionário cadastrado com sucesso!");
            
            break;

        case "2":
            console.log("\nRegistrar Horas Trabalhadas")
            console.log("------------------------")
           /* nome = prompt("\nDigite o nome do funcionário: ");
            funcionarioFilter = localizarFuncionarioPorNome(nome.toLowerCase());

            if (!funcionarioFilter) {
                console.log("\nFuncionário não encontrado");
                break;
            }

            const horas = prompt("\nDigite a quantidade de horas trabalhadas: ");

            registrarHoras (funcionarioFilter.id, horas); */
            const horaTrabalhada = prompt("\nDigite a quantidade de horas trabalhadas: ");
            
            const horasTrabalhadas: HoraTrabalhada[] = [];

            const horatrabalhada = new HoraTrabalhada(horaTrabalhada);

            horasTrabalhadas.push(horatrabalhada);

            console.log(horasTrabalhadas);

            console.log("\nHoras registradas com sucesso!");

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

            /* nome = prompt("\nDigite o nome do funcionário: ");
            funcionarioFilter = localizarFuncionarioPorNome(nome.toLowerCase());

            if (!funcionarioFilter) {
                console.log("\nFuncionário não encontrado");
                break;
            }

            const salario = calcularSalarioMensal(funcionarioFilter);
            const INSS =  calcularInss(salario);

            console.log(`\nO salário mensal bruto do funcionário ${funcionarioFilter.nome} é R$ ${salario}`);
            console.log(`\nO desconto do INSS do funcionário ${funcionarioFilter.nome} é R$ ${INSS}`); */

            break;
        case "5":
            console.log("\nImprimir Relatorio de Pagamento")
            console.log("\n------------------------")
            console.log("Preencha os campos abaixo:")

          /*   nome = prompt("\nDigite o nome do funcionário: ");
            gerarRelatorioPagamento(nome); */

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