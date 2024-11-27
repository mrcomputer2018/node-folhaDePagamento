import { v4 } from 'uuid';

export default class Horatrabalhada {
    private readonly id: string;
    private horaTrabalhada: number;
    private readonly data: Date;

    constructor(horaTrabalhada: number) {
        this.id = v4();
        this.horaTrabalhada = horaTrabalhada;
        this.data = new Date();
    }

    //getter e setter
    getHoraTrabalhada() {
        return this.horaTrabalhada;
    }

    public setHoraTrabalhada(horaTrabalhada: number) {
        this.horaTrabalhada = horaTrabalhada;
    }

}