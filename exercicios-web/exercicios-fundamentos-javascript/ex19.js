const calcularMedia = arrayValores => {
    total = arrayValores.reduce((acc, valAtual) => acc += valAtual, 0)
    media = total / arrayValores.length

    return media
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))