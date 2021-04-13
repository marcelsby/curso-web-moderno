function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!') 
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando', 0.9)
    .then(valor => `Valor: ${valor}`)
    .then(
        valor => consol.log(valor),
        // O erro cai no primeiro catch que encontrar
        err => `Erro Esp.: ${err}`
    )
    .catch(err => console.log(err))
    .then(() => console.log('Fim!'))