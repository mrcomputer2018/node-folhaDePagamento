const prompt = require('prompt-sync')();

function cadastrarFuncionario() {
    // código para cadastrar funcionário
   const nome = prompt("Digite o nome do funcionário: ");
   const cargo = prompt("Digite o cargo do funcionário: ");
   const taxaHoraria = prompt("Digite a taxa horária do funcionário: ");
}

module.exports = {
    cadastrarFuncionario
};