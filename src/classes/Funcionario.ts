import Horatrabalhada from "./HoraTrabalhada";
import { v4 } from 'uuid';
const prompt = require('prompt-sync')();

export default class Funcionario {
    [x: string]: any;
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
    getNome():string {
        return this.nome
    }

    getHorasTrabalhadas(): Horatrabalhada[] | null {
        return this.horasTrabalhadas;
    }

    setNome(nome: string): void {
        this.nome = nome
    }

    setCargo(cargo: string): void {
        this.cargo = cargo
    }

    setTaxaHoraria(taxaHoraria: number): void {
        this.taxaHoraria = taxaHoraria;
    }

    setHorasTrabalhadas(horasTrabalhadas: Horatrabalhada[]): void { 
        this.horasTrabalhadas = horasTrabalhadas
    }
   
    //METODOS
    localizarFuncionarioPorNome( funcionarios: Funcionario[]) {
        const nomeFuncionario = prompt("\nDigite o nome do funcionário: ");

        const funcionarioFilter = funcionarios.find(func => func.nome === nomeFuncionario);

        if (!funcionarioFilter) {
            console.log("\nFuncionário não encontrado");
            return null;
        }

        return funcionarioFilter;
    }

    calcularSalarioMensal(): number {
       return parseFloat((this.horasTrabalhadasFuncionario() * this.taxaHoraria).toFixed(2))
    }

    private horasTrabalhadasFuncionario(): number {
        let totalHoras = 0;

        if(this.horasTrabalhadas) {
            this.horasTrabalhadas.forEach(hora => {
                totalHoras += hora.getHoraTrabalhada();
            });
        }
    
        return totalHoras;
    
    }

    getDetalhesFuncionario(): string { 
        return `\nNome: ${this.nome}` +
        `\nCargo: ${this.cargo}` +
        `\nTaxa Horária: ${this.taxaHoraria}` +
        `\nHoras Trabalhadas: ${this.horasTrabalhadasFuncionario()}hs` +
        `\nSalário Mensal: R$ ${this.calcularSalarioMensal()}`;
    }
}
