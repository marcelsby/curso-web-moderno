const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    3: 'Bia'
}

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

// Conseguimos acessar pois "0" não é um identificador válido para ser acessado com a notação de .
console.log(quaseArray[0])

// Agora um array de verdade
const meuArray = [ 'Rafael', 'Ana', 'Bia' ]

console.log('Debug breakpoint!')