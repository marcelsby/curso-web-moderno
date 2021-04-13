const inteiroAleatorio = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

const aleatorio = n => {
    if (n < 1 && n > 10)
        return false

    sorteado = Math.floor(Math.random() * Math.floor(10))

    resultado = n === sorteado ? `Parabéns! O número sorteado foi ${sorteado}` : `Que pena! O número sorteado foi ${sorteado}` 

    return resultado
}

console.log(aleatorio(3))
console.log(aleatorio(7))