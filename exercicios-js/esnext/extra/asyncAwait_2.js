function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max)
        [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    const numeros = []

    try {
        for (let i of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
    } catch {
        // Equivalente ao reject
        if (tentativas > 10)
            throw 'Não deu certo!!!'

        return gerarMegaSena(qtdNumeros, tentativas + 1)
    }

    return numeros
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)