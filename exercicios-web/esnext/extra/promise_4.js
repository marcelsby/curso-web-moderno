function gerarNumeroEntre(min, max, segundos) {
    if (min > max)
        [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, segundos * 1000)
    })
}

function gerarDezNumeros() {
    return Promise.all([
        gerarNumeroEntre(1, 60, 4), 
        gerarNumeroEntre(1, 60, 1), 
        gerarNumeroEntre(1, 60, 0.5), 
        gerarNumeroEntre(1, 60, 3), 
        gerarNumeroEntre(1, 60, 0.1), 
        gerarNumeroEntre(1, 60, 1.5), 
    ])
}

console.time('Promise')

gerarDezNumeros()
    .then(numeros => numeros.map(n => n * 10))
    .then(numerosX10 => numerosX10.reduce((prev, current) => current += prev))
    .then(total => console.log(total))
    .then(() => console.timeEnd('Promise'))