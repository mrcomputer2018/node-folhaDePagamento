function calcularSalarioMensal(funcionario) {
    let totalHoras = 0;

    funcionario.horasTrabalhadas.forEach(hora => {
        totalHoras += parseInt(hora.horaTrabalhada);
    });

    return totalHoras * funcionario.taxaHoraria;
}

module.exports = {
    calcularSalarioMensal
}