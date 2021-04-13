let numbers = [ 1, 5, 15 ]

// Três maneiras de fazer a mesma coisa
newNumbers = numbers.map(function (e) {
    return e * 2
})
newNumbers = numbers.map(x => { return x * 2 })
newNumbers = numbers.map(x => x * 2)

console.log('Debug breakpoint!')