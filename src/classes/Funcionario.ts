const prompt = require('prompt-sync')();
const { v4 } = require('uuid');

export default class Funcionario {
    private readonly id: string;
    private nome: string
    private cargo: string;
    private taxaHoraria: number;
    private horasTrabalhadas: number[] | null;

    constructor(nome: string, cargo: string, taxaHoraria: number, horasTrabalhadas: number[] | null = null) {
        this.id = v4();
        this.nome = nome;
        this.cargo = cargo;
        this.taxaHoraria = taxaHoraria;
        this.horasTrabalhadas = horasTrabalhadas;
    }
}

const funcionarios = [];
const horasTrabalhadas = [];

function adicionarFuncionario () {
    // código para cadastrar funcionário
   const nome = prompt("Digite o nome do funcionário: ");
   const cargo = prompt("Digite o cargo do funcionário: ");
   const taxaHoraria = prompt("Digite a taxa horária do funcionário: ");
   const horaTrabalhada = prompt("Digite a hora trabalhada do funcionário: ");

   const newHoratrabalhada = {
        id: v4(),
        horaTrabalhada: horaTrabalhada,
        data : new Date()
   }

   horasTrabalhadas.push(newHoratrabalhada);

    const funcionario = {
        id: v4(),
        nome: nome,
        cargo: cargo,
        taxaHoraria: taxaHoraria,
        horasTrabalhadas : horasTrabalhadas
    };

    funcionarios.push(funcionario);
    
    console.log("\n\nFuncionário cadastrado com sucesso!");
    console.log(funcionarios);
    return funcionarios;
}


// Crie uma função registrarHoras que recebe id do funcionário e a quantidade de horas trabalhadas.
// A função deve localizar o funcionário com o id fornecido e adicionar as horas ao array horasTrabalhadas.
function registrarHoras(id, horas) {
    // código para registrar horas trabalhadas
    const funcionario = funcionarios.find(funcionario => funcionario.id === id);

    if (!funcionario) {
        console.log("Funcionário não encontrado");
        return;
    }

    const newHoratrabalhada = {
        id: v4(),
        horaTrabalhada: horas,
        data : new Date()
   }

    funcionario.horasTrabalhadas.push(newHoratrabalhada);
    console.log(">>> Horas registradas com sucesso!");
    console.log(funcionario);
}

function horasTrabalhadasFuncionario(funcionario) {
    let totalHoras = 0;

    funcionario.horasTrabalhadas.forEach(hora => {
        totalHoras += parseInt(hora.horaTrabalhada);
    });

    return totalHoras;

}


// A função deve localizar o funcionário por nome e retornar o objeto do funcionário.
function localizarFuncionarioPorNome(nome) {
    return funcionarios.find(funcionario => funcionario.nome === nome);
}


module.exports = {
    adicionarFuncionario,
    registrarHoras,
    localizarFuncionarioPorNome,
    horasTrabalhadasFuncionario
};