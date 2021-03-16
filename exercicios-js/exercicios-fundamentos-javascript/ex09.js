const repetir = (elemento, repetidor) => {
    resultado = []

    for (let i = 0; i < repetidor; i++) {
        resultado.push(elemento)
    }

    return resultado
}

console.log(repetir('A', 50))
console.log(repetir('The cake is a lie!', 1000))