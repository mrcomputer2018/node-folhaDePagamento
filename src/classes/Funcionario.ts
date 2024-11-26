import Horatrabalhada from "./HoraTrabalhada";
const prompt = require('prompt-sync')();
import { v4 } from 'uuid';

export default class Funcionario {
    private readonly id: string;
    private nome: string
    private cargo: string;
    private taxaHoraria: number;
    private horasTrabalhadas: Horatrabalhada[] | null;

    constructor(nome: string, cargo: string, taxaHoraria: number, horasTrabalhadas: Horatrabalhada[] | null = null) {
        this.id = v4();
        this.nome = nome;
        this.cargo = cargo;
        this.taxaHoraria = taxaHoraria;
        this.horasTrabalhadas = horasTrabalhadas ?? [];
    }

    //getters e setters
    getHorasTrabalhadas() {
        return this.horasTrabalhadas;
    }

    setHorasTrabalhadas(horasTrabalhadas: Horatrabalhada[]) { 
        const newHorasTrabalhadas = [...(this.horasTrabalhadas ?? []), ...horasTrabalhadas];
        this.horasTrabalhadas = newHorasTrabalhadas;
    }
   
    //METODOS
    /* localizarFuncionarioPorNome(nome) {
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
    } */

    private horasTrabalhadasFuncionario() {
        let totalHoras = 0;
    
       /*  this.horasTrabalhadas.forEach(hora => {
            totalHoras += parseInt(hora.horaTrabalhada);
        });
     */
        return totalHoras;
    
    }

    getDetalhesFuncionario(): string { 
        return `\nNome: ${this.nome}` +
        `\nCargo: ${this.cargo}` +
        `\nTaxa Horária: ${this.taxaHoraria}` +
        `\nHoras Trabalhadas: ${this.horasTrabalhadasFuncionario()}`;
    }
}
