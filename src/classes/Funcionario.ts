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
        this.horasTrabalhadas = horasTrabalhadas ?? [];
    }


    /*  
        const funcionarios = [];
        const horasTrabalhadas = [];
    */
   
    //METODOS
    adicionarFuncionario () {
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

    localizarFuncionarioPorNome(nome) {
        return funcionarios.find(funcionario => funcionario.nome === nome);
    }

    registrarHoras(id, horas) {
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

    horasTrabalhadasFuncionario(funcionario) {
        let totalHoras = 0;
    
        funcionario.horasTrabalhadas.forEach(hora => {
            totalHoras += parseInt(hora.horaTrabalhada);
        });
    
        return totalHoras;
    
    }
}
