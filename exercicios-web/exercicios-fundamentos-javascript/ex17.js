const somarNumeros = arr => arr.reduce((acc, valAtual) => acc += valAtual, 0)

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))