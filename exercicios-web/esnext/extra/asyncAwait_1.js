function esperarPor(tempo = 2) {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve()
        }, tempo * 1000)
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    // Return é equivalente a um alias para resolve() em uma função assíncrona
    return 20
}

async function executar() {
    const valor = await retornarValorRapido()

    await esperarPor(1.5)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1.5)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1.5)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()

    return valor
}

executarDeVerdade()
    .then(console.log)