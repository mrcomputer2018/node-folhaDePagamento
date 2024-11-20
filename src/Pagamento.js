const { localizarFuncionarioPorNome, horasTrabalhadasFuncionario } = require("./Funcionario");
const { calcularSalarioMensal } = require("./Salario");
const { calcularInss } = require("./Inss");


function gerarRelatorioPagamento(nome) {
    funcionarioFilter = localizarFuncionarioPorNome(nome.toLowerCase());

    if (!funcionarioFilter) {
        console.log("\nFuncionário não encontrado");
        return;
    }

    const salario = calcularSalarioMensal(funcionarioFilter).toFixed(2);

    console.log("Nome: " + funcionarioFilter.nome)
    console.log("Cargo: " + funcionarioFilter.cargo)
    console.log("Total de Horas: " + horasTrabalhadasFuncionario(funcionarioFilter) + "hs")
    console.log("Valor do INSS: R$" + calcularInss(salario).toFixed(2))
    console.log("Salario Bruto: R$" + salario)
    console.log("Salario Liquido: R$" + (salario - calcularInss(salario)).toFixed(2))
}

module.exports = { gerarRelatorioPagamento };
