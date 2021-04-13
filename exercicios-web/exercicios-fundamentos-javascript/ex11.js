// Resolução própria
const getPrimeiroUltimo = (arr, newArr=[]) => {
    newArr = []

    newArr.push(arr[0], arr[arr.length - 1])

    return newArr
}

console.log(getPrimeiroUltimo([4, 5, 6, 7, 10]))

// Resolução da apostila
function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento= elementos.shift()
    const ultimoElemento = elementos.pop()

    return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([4, 5, 6, 7, 10]))