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

    calcularInss(): number {
        const salario: number = this.calcularSalarioMensal();
        let inss = 0;
    
        if (salario <= 1412) {
            inss = salario * 0.075;
        } else if (salario > 1412 && salario <= 2666.68) {
            inss = salario * 0.09;
        } else if (salario > 2666.69 && salario <= 4000.03) {
            inss = salario * 0.12;
        } else if (salario > 4000.04 && salario <= 7786.02) {
            inss = salario * 0.14;
        } else {
            inss = 751.99;
        }
    
        return parseFloat(inss.toFixed(2));
    }

    gerarRelatorioPagamento (): string { 
        return `\nNome: ${this.nome}` +
        `\nCargo: ${this.cargo}` +
        `\nTaxa Horária: ${this.taxaHoraria}` +
        `\nHoras Trabalhadas: ${this.horasTrabalhadasFuncionario()}hs` +
        `\nSalário Mensal: R$ ${this.calcularSalarioMensal()}` +
        `\nINSS: R$ ${this.calcularInss()}` +
        `\nSalário Líquido: R$ ${this.calcularSalarioMensal() - this.calcularInss()}`;
    }

    getDetalhesFuncionario(): string { 
        return `\nNome: ${this.nome}` +
        `\nCargo: ${this.cargo}` +
        `\nTaxa Horária: ${this.taxaHoraria}` +
        `\nHoras Trabalhadas: ${this.horasTrabalhadasFuncionario()}hs` +
        `\nSalário Mensal: R$ ${this.calcularSalarioMensal()}`;
    }
}
