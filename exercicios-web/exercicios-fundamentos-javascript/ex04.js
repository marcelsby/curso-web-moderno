const getNomeMes = numMes => {
    if (numMes > 12 || numMes < 1) {
        console.log("Insira um valor válido!\nSaindo...")
        return 1
    }

    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]

    mesInserido = meses.filter((num, idx) => idx + 1 === numMes).toString()

    return mesInserido
}

console.log(getNomeMes(1))
console.log(getNomeMes(12))
console.log(getNomeMes(8))