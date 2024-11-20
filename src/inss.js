function calcularInss(salario) {
    if (salario <= 1412) {
        return salario * 0.075;
    } else if (salario <= 2666.68) {
        return salario * 0.09;
    } else if (salario <= 4000.3) {
        return salario * 0.12;
    } else if (salario <= 7786.02) {
        return salario * 0.14;
    } else {
        return 671.12;
    }
}

module.exports = { calcularInss };