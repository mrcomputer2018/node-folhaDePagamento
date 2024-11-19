function calcularSalarioMensal(funcionario) {
    let totalHoras = 0;
    funcionario.horasTrabalhadas.forEach(hora => {
        totalHoras += hora.horaTrabalhada;
    });

    return totalHoras * funcionario.taxaHoraria;
}

module.exports = {
    calcularSalarioMensal
}