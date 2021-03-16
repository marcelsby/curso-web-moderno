const multComSoma = (a, b) => {
    a = Math.abs(a), b = Math.abs(b)
    let menor = a > b ? b : a
    let maior = a < b ? b : a
    let total = 0

    for (let i = 0; i < menor; i++)
        total += maior

    return total
}

console.log(multComSoma(2, 2))
console.log(multComSoma(-2, -2))
console.log(multComSoma(30, 2))