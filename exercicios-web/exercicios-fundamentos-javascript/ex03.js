const getSalarioLiquido = (horasTrabalhadas, valorHora) => {
    salarioBruto = horasTrabalhadas * valorHora
    taxaImposto = 1 - 0.3
    salarioLiquido = salarioBruto * taxaImposto

    return `Salário líquido igual a R$ ${salarioLiquido}`
}

console.log(getSalarioLiquido(100, 1))